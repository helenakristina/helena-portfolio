---
status: pending
priority: p1
issue_id: "001"
tags: [code-review, performance, react]
---

# Unused `scrollY` State Causes Navbar Re-render on Every Scroll Event

## Problem Statement

`Navbar.tsx` declares `scrollY` state and attaches a `scroll` event listener that fires on every scroll tick. The state value is **never read** in the JSX — no class, style, or render output consumes it. Every scroll event triggers `setScrollY → React re-render → full Navbar JSX re-evaluation` with zero visual effect. This is a silent performance regression introduced in the refactor.

## Findings

**File:** `src/components/Navbar.tsx:20–27`

```tsx
const [scrollY, setScrollY] = useState(0);       // line 20 — declared, never read

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);  // fires every scroll tick
  window.addEventListener('scroll', handleScroll);         // no { passive: true }
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

`scrollY` is set at line 24 and appears in the state at line 20, but searching the entire file reveals no JSX reference to `scrollY`. The scroll listener:
- Fires synchronously on every scroll event (no throttle/debounce)
- Missing `{ passive: true }` option, which can block the browser's native scroll thread
- Triggers a full re-render of all nav links, the hamburger button, and the mobile menu

Confirmed by: TypeScript reviewer (#1), architecture reviewer (Dead state section), performance reviewer (#5).

## Proposed Solutions

### Option A — Remove entirely (recommended, effort: Small)
Simply delete the `scrollY` state and the scroll `useEffect`. The navbar visually works without it.

```tsx
// Delete these 8 lines from Navbar.tsx:
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Pros:** Zero dead code. No future confusion about what `scrollY` is for.
**Cons:** If a "scrolled" navbar style was intended (e.g., more opaque background on scroll), that feature is deferred.
**Effort:** Small | **Risk:** None

### Option B — Implement the likely intended feature (effort: Small)
Replace raw pixel tracking with a boolean threshold and actually use it:

```tsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Then use `isScrolled` in the nav className to add a stronger background or shadow.

**Pros:** Implements useful feature, limits re-renders to one (when threshold is crossed).
**Cons:** Adds scope beyond the bug fix.
**Effort:** Small | **Risk:** Low

## Recommended Action

_[ Option A — delete the unused state and listener. If a scroll-aware navbar is wanted later, implement it then with Option B. ]_

## Technical Details

- **Affected file:** `src/components/Navbar.tsx`
- **Lines:** 20–27 (state declaration + useEffect)
- **Also missing:** `{ passive: true }` on `addEventListener` — add when reimplementing

## Acceptance Criteria

- [ ] `scrollY` state removed from `Navbar.tsx`
- [ ] Scroll event listener removed from `Navbar.tsx`
- [ ] `useState` import not orphaned (still needed for `isMenuOpen`)
- [ ] `useEffect` import not orphaned (still needed if mobile-menu-close effect is added)
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by TypeScript, Architecture, and Performance review agents in parallel code review of `refactor/single-file-to-multipage-nextjs`
