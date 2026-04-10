---
status: complete
priority: p2
issue_id: "011"
tags: [code-review, performance, next-image]
---

# Add `priority` and `sizes` Props to Meno Page Images

## Problem Statement

The Meno case study page has two `next/image` issues that will hurt Core Web Vitals and mobile performance:

1. `image_1` (the first screenshot, above the fold) is lazy-loaded by default — it should have `priority` to trigger a `<link rel="preload">` and avoid an LCP penalty.
2. All four images are missing a `sizes` prop. Without it, the browser cannot pick the correct srcset breakpoint and defaults to `100vw`, causing it to fetch a larger image than needed on mobile viewports. On a 390px mobile screen, each image fetches a 900px+ rendition instead of a 480px one — ~160–280KB of unnecessary transfer across four images per page load.

## Findings

**File:** `src/app/meno/page.tsx`

- Line 85: `image_1` — first screenshot, likely LCP element, no `priority` prop
- Lines 85, 104, 122, 141: all four `<Image>` components — no `sizes` prop
- Container: `max-w-3xl mx-auto` = 48rem = 768px max rendered width

Confirmed by: TypeScript reviewer (Finding 5) and Performance reviewer (Findings 1 & 2).

## Proposed Solutions

### Option A — Add `priority` to image_1 and `sizes` to all four (recommended, effort: Small)

```tsx
// image_1 — add priority + sizes
<Image
  src="/image_1.png"
  alt="Provider directory showing NAMS-certified specialists with a shortlist tracking call status"
  width={900}
  height={643}
  priority
  sizes="(max-width: 768px) 100vw, 768px"
  className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
/>

// images 2–4 — add sizes only
<Image
  src="/image_2.png"
  ...
  sizes="(max-width: 768px) 100vw, 768px"
  ...
/>
```

**Pros:** Direct LCP improvement + mobile bandwidth savings. Both are one-liner additions.
**Cons:** None — `priority` on image_1 is unambiguously correct; `sizes` is always better than the default.
**Effort:** Small | **Risk:** None

## Recommended Action

_[ Add `priority` to image_1 at line 85. Add `sizes="(max-width: 768px) 100vw, 768px"` to all four Image components at lines 85, 104, 122, 141. ]_

## Technical Details

- **File:** `src/app/meno/page.tsx`
- **Lines:** 85 (priority + sizes), 104, 122, 141 (sizes only)
- `priority` injects `<link rel="preload">` in the `<head>` and removes `loading="lazy"` from the `<img>` tag
- `sizes` tells the browser the rendered display width so it picks the right srcset entry

## Acceptance Criteria

- [ ] `image_1` has `priority` prop
- [ ] All four images have `sizes="(max-width: 768px) 100vw, 768px"`
- [ ] Images still render correctly at all viewport sizes
- [ ] No TypeScript errors (`npm run build`)

## Work Log

- 2026-04-09: Identified by TypeScript reviewer (Finding 5) and Performance reviewer (Findings 1 & 2)
