---
status: pending
priority: p3
issue_id: "010"
tags: [code-review, architecture, ux]
---

# No `not-found.tsx` or `error.tsx` — Unhandled 404s Show Next.js Default

## Problem Statement

The app has no custom `src/app/not-found.tsx` or `src/app/error.tsx`. Visiting an unknown route (e.g. `/typo`) shows the bare Next.js default 404 page — completely unstyled relative to the portfolio's dark gradient theme.

## Findings

Architecture reviewer noted this in section 5 (Next.js App Router Conventions).

A portfolio is a first impression. A broken URL should still feel like part of the site.

## Proposed Solution

**`src/app/not-found.tsx`:**
```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-teal-400 mb-4">404</h1>
      <p className="text-gray-300 text-xl mb-8">Page not found.</p>
      <Link href="/" className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold">
        Go Home
      </Link>
    </div>
  );
}
```

**`src/app/error.tsx`** (must be a client component):
```tsx
'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <button onClick={reset} className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold">
        Try again
      </button>
    </div>
  );
}
```

**Effort:** Small | **Risk:** None

## Acceptance Criteria

- [ ] Visiting `/anything-invalid` shows branded 404 page with link home
- [ ] 404 page uses the same dark gradient background (via Layout)
- [ ] `error.tsx` created with retry button
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by Architecture reviewer (section 5, Low priority)
