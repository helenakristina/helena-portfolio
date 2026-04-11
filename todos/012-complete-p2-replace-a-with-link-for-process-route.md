---
status: complete
priority: p2
issue_id: "012"
tags: [code-review, architecture, next-link]
---

# Replace `<a>` with `<Link>` for Internal `/process` Route

## Problem Statement

The `/process` link in the "How It's Built" section uses a plain `<a>` tag instead of Next.js `<Link>`. This causes a full page reload on click instead of client-side navigation, and the visible link text hardcodes the production domain (`helena-lucia.vercel.app/process`) which will look broken in local dev and staging.

Every other internal link in the codebase uses `<Link>`.

## Findings

**File:** `src/app/meno/page.tsx`, lines 203–210

```tsx
// Current — causes full reload, hardcoded domain in text
<p className="mt-8 text-sm">
  <a
    href="/process"
    className="text-teal-400 hover:text-teal-300 underline"
  >
    &rarr; How I work: helena-lucia.vercel.app/process
  </a>
</p>
```

**Issues:**
1. `<a>` instead of `<Link>` — no client-side navigation, no prefetching
2. Hardcoded `helena-lucia.vercel.app/process` in visible text — wrong in dev/staging, fragile if domain changes

Confirmed by: Architecture reviewer (Finding: Internal link styling).

## Proposed Solutions

### Option A — Replace `<a>` with `<Link>`, remove hardcoded domain from text (recommended, effort: Small)

```tsx
import Link from 'next/link';

// ...

<p className="mt-8 text-sm">
  <Link
    href="/process"
    className="text-teal-400 hover:text-teal-300 underline"
  >
    &rarr; How I work
  </Link>
</p>
```

**Pros:** Consistent with the rest of the codebase. Enables prefetching. Removes the fragile hardcoded domain.
**Cons:** None.
**Effort:** Small | **Risk:** None

## Recommended Action

_[ Replace `<a>` with `<Link>` (import from 'next/link'), remove the hardcoded domain from the link text. ]_

## Technical Details

- **File:** `src/app/meno/page.tsx`, lines 203–210
- Add `import Link from 'next/link'` at the top of the file (line 2, after `import Image`)
- `<Link>` is already used on `src/app/page.tsx` — consistent pattern

## Acceptance Criteria

- [ ] Link uses `<Link href="/process">` from `next/link`
- [ ] Visible link text does not contain the hardcoded domain
- [ ] `Link` import added at the top of the file
- [ ] No TypeScript errors

## Work Log

- 2026-04-09: Identified by Architecture reviewer
