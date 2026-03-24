---
status: pending
priority: p2
issue_id: "004"
tags: [code-review, animation, react]
---

# Staggered Entry Animation in Work Page is Non-Functional

## Problem Statement

`work/page.tsx` applies both a parent `<section>` transition AND per-item `transitionDelay` styles to create a staggered entrance effect for career timeline cards. Because both the section and the items share the same `isVisible` state that flips to `true` synchronously on mount, they all transition simultaneously — the intended stagger is never observed.

## Findings

**File:** `src/app/work/page.tsx`

**Parent section (lines 65–69):**
```tsx
<section
  className={`... transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  style={{ transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
>
```

**Each timeline item (lines 87–92):**
```tsx
<div
  className={`... ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  style={{
    transitionDelay: `${idx * 100}ms`,
    transition: 'opacity 0.6s ease-out',
  }}
>
```

Both the section and every item read the same `isVisible` value. When `useEffect` fires, `isVisible` becomes `true` in a single state update. All elements start their transition at the same time. The `transitionDelay` on child items has no effect because the items' `opacity` CSS property doesn't have a `transition` rule applied via Tailwind — the inline `transition` style only takes effect when the property already has a transition, but the starting state (opacity-0) is applied as a Tailwind class, not an inline style.

Confirmed by: TypeScript reviewer (#7).

## Proposed Solutions

### Option A — Let items start from CSS, rely on `transitionDelay` (recommended, effort: Small)

Remove the `isVisible` toggle from the child items entirely and instead have them start at `opacity: 0` via an initial CSS class, then apply `opacity: 1` via `transitionDelay` driven by the parent becoming visible. The cleanest approach: keep the section transition as-is, and for the child items set `opacity: 0` as default and animate to `opacity: 1` using the inline transition that already has delay:

```tsx
<div
  className="flex md:even:flex-row-reverse gap-8 items-center"
  style={{
    opacity: isVisible ? 1 : 0,
    transitionDelay: `${idx * 100}ms`,
    transition: 'opacity 0.6s ease-out',
  }}
>
```

Moving opacity to an inline style (instead of Tailwind class) ensures the inline `transition` property governs it. The delay then actually works because the same style object owns both `opacity` and `transition`.

**Pros:** Minimal change, stagger effect works as intended.
**Effort:** Small | **Risk:** None

### Option B — Remove per-item animation, keep only section fade (effort: Small)

Remove the `className` opacity toggle and inline `transition`/`transitionDelay` styles from child items entirely. The section fade-in already provides a single clean entrance. Simpler, slightly less dynamic.

**Effort:** Small | **Risk:** None

## Recommended Action

_[ Option A — move opacity to inline style on child items so the inline transition governs it and transitionDelay actually takes effect. ]_

## Technical Details

- **Affected file:** `src/app/work/page.tsx:85–96`
- **Root cause:** Tailwind class opacity vs inline style transition — inline `transition` only governs inline-style properties

## Acceptance Criteria

- [ ] Career timeline cards enter with visible stagger delay (100ms between each)
- [ ] Section still fades in on page load
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by TypeScript reviewer (#7)
