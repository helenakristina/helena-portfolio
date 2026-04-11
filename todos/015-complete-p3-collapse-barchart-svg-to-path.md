---
status: complete
priority: p3
issue_id: "015"
tags: [code-review, simplicity, svg]
---

# Collapse Bar Chart SVG Lines to a Single `<path>`

## Problem Statement

The "Predictive Analytics" roadmap icon uses four separate `<line>` elements where a single `<path>` expresses the same shape. Verbose SVG for no reason.

## Findings

**File:** `src/app/meno/page.tsx`, approximately lines 288–294

```tsx
// Current — 4 elements
<line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
<line x1="12" y1="20" x2="12" y2="4"  strokeLinecap="round" />
<line x1="6"  y1="20" x2="6"  y2="14" strokeLinecap="round" />
<line x1="3"  y1="20" x2="21" y2="20" strokeLinecap="round" />

// Simplified — 1 element, same output
<path d="M18 20V10M12 20V4M6 20V14M3 20h18" strokeLinecap="round" />
```

Confirmed by: Simplicity reviewer.

## Proposed Solutions

### Option A — Replace 4 `<line>` elements with 1 `<path>` (recommended, effort: Trivial)

**Pros:** 4 lines → 1, same rendered output.
**Cons:** None.
**Effort:** Trivial | **Risk:** None

## Recommended Action

_[ Replace the four `<line>` elements with `<path d="M18 20V10M12 20V4M6 20V14M3 20h18" strokeLinecap="round" />`. ]_

## Technical Details

- **File:** `src/app/meno/page.tsx` — Predictive Analytics SVG in the roadmap icon row

## Acceptance Criteria

- [ ] SVG uses a single `<path>` instead of four `<line>` elements
- [ ] Icon renders identically
- [ ] No TypeScript errors

## Work Log

- 2026-04-09: Identified by Simplicity reviewer
