---
status: pending
priority: p3
issue_id: "007"
tags: [code-review, ux, react]
---

# Mobile Menu Stays Open on Browser Back Navigation

## Problem Statement

The mobile hamburger menu closes when a nav link is clicked (via `onClick={() => setIsMenuOpen(false)}`), but does not close when the user navigates via the browser back button or any external navigation trigger. If the menu is open and the user presses back, it remains visually open on the previous page.

## Findings

**File:** `src/components/Navbar.tsx`

Links correctly close the menu (line ~75):
```tsx
onClick={() => setIsMenuOpen(false)}
```

But there is no effect that watches for pathname changes and closes the menu. If `pathname` changes due to back/forward navigation while the menu is open, `isMenuOpen` remains `true`.

Confirmed by: TypeScript reviewer (#10).

## Proposed Solution

Add a `useEffect` that depends on `pathname` and resets `isMenuOpen`:

```tsx
useEffect(() => {
  setIsMenuOpen(false);
}, [pathname]);
```

This runs whenever the route changes for any reason — link click, back button, forward button, programmatic navigation.

**Effort:** Tiny (2 lines) | **Risk:** None

## Acceptance Criteria

- [ ] Opening mobile menu, pressing browser back button closes the menu
- [ ] Opening mobile menu, clicking a Link still closes the menu
- [ ] No double-close / flicker on normal link navigation

## Work Log

- 2026-03-24: Identified by TypeScript reviewer (#10)
