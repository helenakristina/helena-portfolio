---
status: pending
priority: p3
issue_id: "009"
tags: [code-review, seo, architecture]
---

# All Pages Share the Same `<title>` Tag — Add Per-Page Metadata

## Problem Statement

`src/app/layout.tsx` defines a single global `metadata` export ("Helena's Portfolio"). Every page — Home, About, Meno, Work, etc. — renders the same `<title>` and `<meta name="description">`. Direct links to `/meno` or `/work` show identical social preview cards with no page-specific context.

## Findings

**File:** `src/app/layout.tsx:15–19`

```ts
export const metadata: Metadata = {
  title: "Helena's Portfolio",
  description: "A showcase of my work and projects as a software developer.",
};
```

All 7 pages share this title. The architecture reviewer flagged that page-specific metadata cannot be exported from `'use client'` components — this is a constraint that reinforces todo #002 (convert static pages to server components).

## Proposed Solution

Once `about`, `meno`, `resume`, and `contact` are server components (todo #002), add `metadata` exports to each:

```tsx
// src/app/about/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Helena Lucia — The Journey",
  description: "How I went from senior engineer to intentional return — the story behind the career gap.",
};
```

Suggested titles:
- `/` → "Helena Lucia — Senior Engineer"
- `/about` → "Helena Lucia — The Journey"
- `/meno` → "Meno — Healthcare App by Helena Lucia"
- `/learning` → "Helena Lucia — Learning & Growth"
- `/work` → "Helena Lucia — Career Timeline"
- `/resume` → "Helena Lucia — Resume"
- `/contact` → "Helena Lucia — Contact"

**Effort:** Small | **Risk:** None | **Dependency:** todo #002 (server component conversion)

## Acceptance Criteria

- [ ] Each page exports its own `metadata` object
- [ ] Browser tab title changes per page
- [ ] Social previews show page-specific titles and descriptions
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by Architecture reviewer (section 5)
