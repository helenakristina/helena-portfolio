---
status: pending
priority: p2
issue_id: "002"
tags: [code-review, architecture, react, duplication]
---

# Mount Animation Pattern Duplicated Across All 7 Pages

## Problem Statement

The identical `isVisible` fade-in animation pattern is copy-pasted into all 7 page components. Any change to the animation (duration, easing, distance) requires editing every file. This is the canonical signal for extraction.

## Findings

The following block appears **identically** in all 7 pages:

```tsx
const [isVisible, setIsVisible] = useState(false);
useEffect(() => { setIsVisible(true); }, []);
```

And all pages apply the same classes/style to their root `<section>`:

```tsx
className={`... transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
style={{ transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
```

**Files affected (all 7):**
- `src/app/page.tsx:8–12, 16–19`
- `src/app/about/page.tsx:6–10, 13–17`
- `src/app/meno/page.tsx:6–10, 13–17`
- `src/app/learning/page.tsx:6–9, 31–34`
- `src/app/resume/page.tsx:7–11, 14–18`
- `src/app/contact/page.tsx:7–11, 13–17`
- `src/app/work/page.tsx:57–61, 65–69`

Confirmed by: TypeScript reviewer (#2, #3), architecture reviewer (section 3), performance reviewer (#1).

Note: `globals.css` already defines `@keyframes fade-in` + `.animate-fade-in` at lines 34–64 — a CSS-native approach that could replace the state-driven approach entirely for pages with no other client logic.

## Proposed Solutions

### Option A — Extract `useMountAnimation` hook (recommended, effort: Small)

```tsx
// src/hooks/useMountAnimation.ts
import { useState, useEffect } from 'react';

export function useMountAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);
  return isVisible;
}
```

Each page replaces the 4 lines with:
```tsx
import { useMountAnimation } from '@/hooks/useMountAnimation';
const isVisible = useMountAnimation();
```

Pages that need no other client logic (`about`, `meno`, `resume`, `contact`) can still drop `'use client'` by using the CSS approach below. Pages that must remain client components (`work`, `learning`) use the hook.

**Pros:** Minimal change, pages still own their root element structure.
**Cons:** Pages with no other interactivity still need `'use client'` just for the hook.
**Effort:** Small | **Risk:** None

### Option B — CSS-only fade for server components (effort: Small, best combined with Option A)

For pages with no client logic (`about`, `meno`, `resume`, `contact`), drop `'use client'` entirely and apply the existing CSS animation class unconditionally:

```tsx
// No useState, no useEffect, no 'use client'
<section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
```

`animate-fade-in` is already defined in `globals.css:62-64`. This renders on the server, ships zero JS, and the animation still plays via CSS.

**Pros:** Four pages become true server components, no JS shipped for them.
**Cons:** CSS animation plays even on direct link visits (no "has this been shown" tracking) — but this is fine for a portfolio.
**Effort:** Small | **Risk:** None

### Option C — `AnimatedSection` wrapper component (effort: Medium)

Create `src/components/AnimatedSection.tsx` that owns the animation and wraps children. All pages use it as their root container. Eliminates duplication and the `'use client'` on server-compatible pages.

**Effort:** Medium | **Risk:** Low (but more abstraction than needed)

## Recommended Action

_[ Combine Option A + B: extract the hook for `work` and `learning` (which need client rendering anyway), and use CSS `animate-fade-in` directly for the other four pages, removing their `'use client'` entirely. See todo #003 for the server component conversion. ]_

## Technical Details

- **Files to create:** `src/hooks/useMountAnimation.ts`
- **Files to modify:** All 7 page components
- **Also fix:** Replace `transition-all duration-700` with `transition-[opacity,transform] duration-700` (see todo #005)

## Acceptance Criteria

- [ ] `src/hooks/useMountAnimation.ts` created
- [ ] `work/page.tsx` and `learning/page.tsx` use the hook
- [ ] `about`, `meno`, `resume`, `contact` pages use CSS `animate-fade-in` with no `'use client'`
- [ ] `home/page.tsx` uses hook or CSS approach (either is fine)
- [ ] Fade-in animation plays correctly on all pages in browser
- [ ] `npm run build` passes with all routes still `○ Static`

## Work Log

- 2026-03-24: Identified by TypeScript (#2, #3), Architecture (section 3), and Performance (#1) agents
