---
status: complete
priority: p3
issue_id: "014"
tags: [code-review, simplicity, html]
---

# Collapse Single-Paragraph `<div>` Wrappers in Meno Page

## Problem Statement

Five `<div className="text-gray-300 leading-relaxed space-y-4">` wrappers in the Meno page each contain exactly one `<p>` tag. `space-y-4` on a single child has no effect. These wrappers add markup depth without any visual or structural benefit.

## Findings

**File:** `src/app/meno/page.tsx`

Instances with a single `<p>` child (approximately lines 77–82, 97–101, 116–120, 135–139, 154–158):

```tsx
// Current — space-y-4 has no effect on a single child
<div className="text-gray-300 leading-relaxed space-y-4">
  <p>You walk in with two documents…</p>
</div>

// Simplified
<p className="text-gray-300 leading-relaxed">You walk in with two documents…</p>
```

Confirmed by: Simplicity reviewer.

## Proposed Solutions

### Option A — Put prose classes directly on `<p>` (recommended, effort: Small)

For any wrapper containing exactly one `<p>`, remove the wrapper and apply `text-gray-300 leading-relaxed` directly to the `<p>`. Drop `space-y-4` (no effect on single child).

**Pros:** ~10 lines removed, no misleading `space-y-4` on single children.
**Cons:** None.
**Effort:** Small | **Risk:** None — visual output is identical

## Recommended Action

_[ Find the five single-paragraph wrappers and collapse them. ]_

## Technical Details

- **File:** `src/app/meno/page.tsx`
- Multi-paragraph wrappers (where `space-y-4` does apply) should be left as-is

## Acceptance Criteria

- [ ] No `<div className="... space-y-4">` wrapper containing exactly one `<p>`
- [ ] Visual output is unchanged
- [ ] No TypeScript errors

## Work Log

- 2026-04-09: Identified by Simplicity reviewer
