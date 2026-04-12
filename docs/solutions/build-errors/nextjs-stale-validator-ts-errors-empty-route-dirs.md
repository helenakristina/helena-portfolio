---
title: "Next.js: Stale TypeScript errors from empty route directories"
category: build-errors
date: 2026-04-10
tags: [typescript, nextjs, app-router, build]
---

# Next.js: Stale TypeScript errors from empty route directories

## Problem

`npx tsc --noEmit` reports errors in `.next/types/validator.ts` pointing to page modules that don't exist:

```
.next/types/validator.ts(42,39): error TS2307: Cannot find module '../../src/app/about/page.js'
.next/types/validator.ts(96,39): error TS2307: Cannot find module '../../src/app/resume/page.js'
```

The errors reference `.next/types/validator.ts` — an auto-generated file — so editing source code doesn't fix them.

## Root Cause

Next.js generates `.next/types/validator.ts` during each build/dev run. It scans `src/app/` and emits a type-check entry for every route it finds. If a route's `page.tsx` is later deleted but the **directory** remains (git doesn't track empty directories, so they persist silently), the next `tsc --noEmit` run still includes the old `.next/types/validator.ts` from the last build — which references the now-missing page modules.

The cycle:
1. `src/app/about/page.tsx` existed → build ran → `.next/types/validator.ts` got an entry for it
2. `page.tsx` was deleted but `src/app/about/` directory left behind (empty)
3. No new build ran → `.next/types/validator.ts` still has the old entry
4. `tsc` includes `.next/types/**/*.ts` via `tsconfig.json` → error

## Solution

1. **Delete the empty route directories:**
   ```bash
   rmdir src/app/about src/app/resume
   ```
   Use `rmdir` (not `rm -rf`) — it will fail safely if the directory isn't actually empty.

2. **Delete the stale validator file:**
   ```bash
   rm .next/types/validator.ts
   ```
   It will be regenerated correctly on the next `npm run dev` or `npm run build`.

3. **Verify:**
   ```bash
   npx tsc --noEmit
   # Should be clean (no output)
   ```

Nothing needs to be committed — empty directories aren't tracked by git, and `.next/` is gitignored.

## Prevention

- When removing a page from an App Router project, delete the **directory**, not just `page.tsx`. An empty directory is invisible to git but still trips the Next.js type validator.
- If `tsc` errors point to `.next/types/validator.ts`, the problem is always stale build artifacts, not your source code. Delete `.next/types/validator.ts` and re-run.
- Periodically run `find src/app -type d -empty` to surface orphaned route directories before they become confusing.
