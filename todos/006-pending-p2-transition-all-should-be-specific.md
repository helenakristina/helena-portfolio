---
status: pending
priority: p2
issue_id: "006"
tags: [code-review, performance, css]
---

# `transition-all` on Page Sections Causes Unnecessary CSS Transitions

## Problem Statement

All 7 page components apply `transition-all duration-700` to their root `<section>`. `transition-all` transitions every CSS property, not just `opacity` and `transform`. On pages with many interactive cards (hover states change `background`, `border-color`, `shadow`), this can trigger unnecessary style recalculations when hovering child elements while the section is still transitioning.

## Findings

All 7 pages (e.g. `src/app/about/page.tsx:13`, `src/app/work/page.tsx:65`):

```tsx
className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${...}`}
```

Only `opacity` and `transform` are ever changed on these sections. `transition-all` also transitions `width`, `height`, `padding`, `border`, `color`, `background`, and every other property — any of which could be inadvertently triggered by a parent style change.

Confirmed by: Performance reviewer (#4).

## Proposed Solution

Replace `transition-all duration-700` with `transition-[opacity,transform] duration-700` in all 7 page components.

Tailwind 4 supports arbitrary values in `transition-[...]`, so this works without any configuration.

**Files to update:**
- `src/app/page.tsx:16`
- `src/app/about/page.tsx:13`
- `src/app/meno/page.tsx:13`
- `src/app/learning/page.tsx:31`
- `src/app/work/page.tsx:65`
- `src/app/resume/page.tsx:14`
- `src/app/contact/page.tsx:13`

**Effort:** Small (mechanical find-and-replace) | **Risk:** None

Note: This todo becomes moot for pages converted to server components with CSS `animate-fade-in` (see todo #002).

## Acceptance Criteria

- [ ] No page component uses `transition-all` on the root section
- [ ] All use `transition-[opacity,transform]` or equivalent
- [ ] Animations still play correctly on all pages
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by Performance reviewer (#4)
