---
status: complete
priority: p2
issue_id: "013"
tags: [code-review, content-accuracy]
---

# Reconcile RAG Document Count: 10,000 vs 49,000

## Problem Statement

The Meno case study page states "10,000 curated research documents" in two places. The home page states "49,000 research documents." Both figures are visitor-facing copy claiming to describe the same Meno RAG pipeline. One of them is wrong.

## Findings

**`src/app/meno/page.tsx`:**
- Line ~137: "Meno pulls from 10,000 curated research documents to surface the dismissals..."
- Line ~193: "pgvector handles semantic search across 10,000 curated research documents"

**`src/app/page.tsx`:**
- Line ~87: references the Meno RAG pipeline with "49,000 research documents" (confirm exact line)

Confirmed by: Architecture reviewer (Content-accuracy note).

## Proposed Solutions

### Option A — Correct the figure across both files (effort: Small)

Determine which number is accurate (check the actual Meno app's vector index size), then update whichever file has the wrong number to match.

**Effort:** Small | **Risk:** None — content-only change

### Option B — Use a consistent approximate figure

If the exact count isn't easily verifiable, pick one round number ("over 10,000" or "tens of thousands") and use it consistently everywhere.

## Recommended Action

_[ Verify actual document count in the Meno app's pgvector index, then update the incorrect figure. If uncertain, use approximate language consistently in both files. ]_

## Technical Details

- **Files to check:**
  - `src/app/meno/page.tsx` (two instances of "10,000")
  - `src/app/page.tsx` (one instance of "49,000" — confirm line number)

## Acceptance Criteria

- [ ] Both pages state the same figure (or consistent approximate language)
- [ ] The figure matches the actual Meno vector index size

## Work Log

- 2026-04-09: Identified by Architecture reviewer
