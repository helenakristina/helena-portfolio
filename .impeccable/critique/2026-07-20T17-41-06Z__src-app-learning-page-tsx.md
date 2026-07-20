---
timestamp: 2026-07-20T17-41-06Z
slug: src-app-learning-page-tsx
target: learning
total_score: 74
prior_score: 36
delta: +38
p0_count: 0
p1_count: 0
p2_count: 2
p3_count: 3
detector: clean
---
Method: dual-agent

## AI Slop Verdict

**Pass.** The intro paragraph has genuine voice: "I didn't want to use AI as a black box" is concrete and first-person. The specific-to-generic sequence ("LLM architecture, RAG pipelines, and agentic systems") reads like a real engineer. "Everything here is pointed at that question." earns its white-text treatment.

One soft wobble: "These credentials inform how I build" in the closing CTA is the weakest line on the page — abstract where the rest of the page is specific. Not slop, but the only sentence a critic could circle.

## Detector

Clean. Exit 0. Zero anti-pattern hits.

## Browser Evidence

**Desktop (1280×900):** Clean black background throughout. Credentials callout renders as a single bordered box — badge image + metadata, correct hierarchy. Specializations and Coursework: course names left, Verify → right via `justify-between` — works correctly. No horizontal overflow.

**Mobile (375×812):** Course list — `flex justify-between` holds at 375px; course names wrap within their column, Verify → stays right-aligned. Assessment A mobile concern about long names did not materialize in the browser. One confirmed issue: closing CTA "See how I work →" wraps so the `→` glyph drops to its own line at 375px — cosmetic but visible.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Hover transitions exist; no loading states needed |
| 2 | Match System / Real World | 4/4 | "Verify →" matches credential verification mental model |
| 3 | User Control and Freedom | 3/4 | All external links open in new tab with noopener |
| 4 | Consistency and Standards | 3/4 | Verify links consistent across both lists; callout border matches design system |
| 5 | Error Prevention | 3/4 | aria-labels include "(opens in new tab)"; no form surface |
| 6 | Recognition Rather Than Recall | 4/4 | Org and date surfaced in-line; no recall required |
| 7 | Flexibility and Efficiency | 3/4 | Heading structure enables efficient scan; no skip-to-content link |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean; single card container for top credential earns its weight |
| 9 | Error Recovery | 2/4 | No broken-link fallback if Credly/Skilljar URLs 404 |
| 10 | Help and Documentation | 3/4 | Date metadata contextualizes recency without tooltip |
| **Total** | | **31/40** | |

## What's Working

1. **The verify-link pattern reads as a portfolio, not a resume.** Right-aligned `Verify →` creates a two-column scan: what you learned (left) and proof (right). Every line is independently clickable to a certificate — a differentiating move.

2. **Callout border earns its weight.** The single `border border-border-subtle p-6` around the Credly badge is the only card-like container on the page. It makes the architect credential visually singular — hierarchy working correctly.

3. **Skim path has a real spine.** H1 → white punchline → "Credentials" h2 → badge → "Coursera Specializations" → "Coursework" → CTA. Jordan can parse the structure in under 5 seconds. The text-2xl h2s are pulling their weight.

## Prior Issue Status

- P0 No prose / dead H1 / zero voice: RESOLVED — genuine intro, white punchline, clear narrative
- P1 Focus Areas resume padding: RESOLVED — section removed entirely
- P1 "18 courses" credibility gap: RESOLVED — "Selected courses" label, 7 items shown
- P2 No verification links: RESOLVED — all items have inline Verify → links
- P2 Visual hierarchy flat: RESOLVED — text-2xl h2s, bordered callout, verify pattern
- P3 Bare arrow in CTA: RESOLVED — all 4 arrows in `aria-hidden="true"` span

## Priority Issues

**[P2] Closing CTA sentence is the weakest line on the page**
"These credentials inform how I build" is abstract and generic — the only line a critic could circle. The rest of the page is declarative and specific. The destination is `/process`, which is about decision-making in LLM systems. The sentence doesn't say that.
Fix: "See how they show up in my work →" or "These inform every LLM decision I make. See how I work →"

**[P2] Mobile CTA arrow orphan**
At 375px, the closing "See how I work →" wraps so the `→` glyph drops to its own line. Confirmed by browser screenshot.
Fix: Add `whitespace-nowrap` to the `<Link>` element (line 185–190).

**[P3] Credly aria-label uses en-dash**
`"Claude Certified Architect Foundations – verify on Credly"` — the `–` character creates an awkward screen reader pause. A comma reads more cleanly.
Fix: Replace `–` with `,` in the Credly link aria-label.

**[P3] Vestigial bullet •**
The accent-colored `•` in list items contributes minimal signal — it's doing margin-equivalent work. The flex layout handles spacing; the bullet adds complexity without hierarchy value.
Fix (optional): Remove bullet spans, let flex layout manage spacing.

**[P3] Metadata description inaccuracy**
Description says "Three Coursera specializations" — the page lists two.
Fix: Update to "Two Coursera specializations" or restructure.

## Persona Red Flags

**Jordan (hiring manager, 5s scan):** No red flags. Skim yield: credential → Anthropic badge → two specializations → seven selected courses. Leaves with: recent, deliberate, verifiable learning.

**Casey (mobile, 375px):** Course list holds correctly. Arrow orphan on closing CTA is the only visual glitch.

**Sam (screen reader):** h1 → h2 × 3, no skipped levels. All external links have descriptive aria-labels with "(opens in new tab)". Arrow spans all aria-hidden. Credly en-dash is the only friction point.

## Minor Observations

- Date notation: specializations header uses literal `–` (en-dash); coursework subtitle uses `&ndash;` entity. Both render identically — code consistency only.
- `text-balance` on all h1/h2s correct.
- No `<h3>` usage — keeps outline flat and scannable.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 16 |
| Narrative Arc and Structure | 20 | 15 |
| Copy Quality and Persona Fit | 20 | 14 |
| Visual Hierarchy and CTA Logic | 15 | 11 |
| Nielsen Heuristics (normalized) | 15 | 12 |
| Cognitive Load and Skim Path | 10 | 6 |
| **Total** | **100** | **74** |
