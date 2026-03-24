---
status: pending
priority: p2
issue_id: "003"
tags: [code-review, performance, react]
---

# Counter `setInterval` Continues Running After Animation Completes

## Problem Statement

The counter animation in `learning/page.tsx` uses a `setInterval` that fires at 30ms for the lifetime of the component, even after all three counters have reached their target values. After ~420ms the animation is visually complete but the interval keeps executing JS on the main thread indefinitely.

## Findings

**File:** `src/app/learning/page.tsx:17–27`

```tsx
useEffect(() => {
  if (!isVisible) return;
  const interval = setInterval(() => {
    setCounters(prev => ({
      courses: Math.min(prev.courses + 1, 14),
      specializations: Math.min(prev.specializations + 1, 3),
      years: Math.min(prev.years + 1, 12),
    }));
  }, 30);
  return () => clearInterval(interval);
}, [isVisible]);
```

Timeline:
- `specializations` reaches max (3) at 90ms (3 ticks × 30ms)
- `years` reaches max (12) at 360ms (12 ticks × 30ms)
- `courses` reaches max (14) at 420ms (14 ticks × 30ms)

After 420ms the interval continues firing ~33 times/second. `Math.min` clamps values, so `setCounters` keeps being called with the same result — React's reconciler detects no state change and skips re-renders, so there's no visual cost. However, the `setInterval` callback and `setCounters` call still execute on the main thread at 33 Hz until the component unmounts.

Confirmed by: TypeScript reviewer (#8), performance reviewer (#2).

## Proposed Solutions

### Option A — Clear interval when all counters reach max (recommended, effort: Small)

```tsx
useEffect(() => {
  if (!isVisible) return;
  const interval = setInterval(() => {
    setCounters(prev => {
      const next = {
        courses: Math.min(prev.courses + 1, 14),
        specializations: Math.min(prev.specializations + 1, 3),
        years: Math.min(prev.years + 1, 12),
      };
      if (next.courses === 14 && next.specializations === 3 && next.years === 12) {
        clearInterval(interval);
      }
      return next;
    });
  }, 30);
  return () => clearInterval(interval);
}, [isVisible]);
```

**Pros:** Minimal change, self-contained, interval stops exactly when done.
**Cons:** Slightly more complex callback.
**Effort:** Small | **Risk:** None

### Option B — Use `setTimeout` cascade (effort: Small)

Since the max tick count is known (14), use a single `setTimeout(clearInterval, 14 * 30 + 10)` after starting the interval. Simpler but depends on timing rather than state.

**Effort:** Small | **Risk:** Low (timing-based, slightly fragile)

## Recommended Action

_[ Option A — clear the interval inside the setter callback once all values hit their ceiling. ]_

## Technical Details

- **Affected file:** `src/app/learning/page.tsx:17–27`
- **Max values:** courses=14, specializations=3, years=12
- **Time to completion:** ~420ms at 30ms tick interval

## Acceptance Criteria

- [ ] Interval stops firing after all counters reach target values
- [ ] Counter animation still visually counts up from 0 to targets on page load
- [ ] No console warnings about state updates on unmounted component
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by TypeScript reviewer (#8) and Performance reviewer (#2)
