---
target: learning
total_score: 86
prior_score: 74
delta: +12
p0_count: 0
p1_count: 1
p2_count: 2
p3_count: 3
detector: clean
timestamp: 2026-07-20T18-06-15Z
slug: src-app-learning-page-tsx
---
---
timestamp: 2026-07-20T19-00-00Z
slug: src-app-learning-page-tsx
target: learning
total_score: 86
prior_score: 74
delta: +12
p0_count: 0
p1_count: 1
p2_count: 2
p3_count: 3
detector: clean
---
Method: dual-agent

## AI Slop Verdict

**Pass.** Voice holds throughout — first-person narrative with named project, specific domain vocabulary ("LLM architecture, RAG pipelines, hnsw vector index"), genuine motivation behind the learning. No hedging, no superlatives, no fabricated humility. The closing callback ("This is what it looks like to not use AI as a black box") completes the bracket opened by the intro. Clean.

## Detector

Clean. Exit 0. Zero anti-pattern hits. No em-dashes, no banned patterns, no rounded-xl, no gradient, no glassmorphism.

## Browser Evidence

**Desktop (1280×900):** Clean layout. Credly badge in bordered callout, correct hierarchy. Specializations and Coursework with right-aligned Verify → links. Closing CTA on one line. No overflow.

**Mobile (375×812):** The `flex justify-between` pattern holds for most items. P1: On long course names ("Claude Code: Software Engineering with Generative AI Agents · Vanderbilt University"), the name wraps to 2–3 lines while "Verify →" floats top-right — creating an ambiguous visual bond between the link and the first line of the name only. Fix: `flex-col sm:flex-row` on each `<li>` in the coursework list.

**Minor:** "Verify on Credly→" renders without a space before the arrow — the leading space inside the `inline-block` span is being stripped by CSS white-space collapsing at the start of the inline-block's block formatting context. All other arrow spans likely have the same issue; "Verify→" at `text-sm` is less visually obvious than "Credly→" at `text-xs`.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Arrow nudge + badge scale give hover feedback |
| 2 | Match System / Real World | 4/4 | "Verify" is exact credential platform vocabulary |
| 3 | User Control and Freedom | 3/4 | All external links open new tabs with noopener |
| 4 | Consistency and Standards | 4/4 | Callout, CTA pattern, section borders consistent |
| 5 | Error Prevention | 3/4 | Aria-labels on every external link |
| 6 | Recognition Rather Than Recall | 3/4 | CTAs self-describing; org names inline |
| 7 | Flexibility and Efficiency | 2/4 | No skip-to-content; 7 Verify links require 7+ tabs |
| 8 | Aesthetic and Minimalist Design | 4/4 | Zero decorative noise; everything earns its place |
| 9 | Error Recovery | 2/4 | External links can 404 silently |
| 10 | Help and Documentation | 3/4 | Metadata description accurate and thorough |
| **Total** | | **31/40** | |

## Motion Assessment

**Purposeful.** Stagger on 7 coursework items at 50ms increments (350ms total cascade) triggers on scroll via view timeline — not on page load. `cubic-bezier(0.16, 1, 0.3, 1)` is correct curve for list reveals. `@supports (animation-timeline: view())` with `@media (prefers-reduced-motion)` fallback inside is structurally sound.

**One seam:** Specializations list has no stagger; Coursework does. As the user scrolls through both sections, Specializations appear statically while Coursework cascades. Defensible (2 items vs. 7), but creates an inconsistent scroll experience.

## Focus-Visible Assessment

`outline: 2px solid var(--accent); outline-offset: 3px` — pale pink (~87% L) on near-black (~5% L) is high contrast, well above 3:1. The 3px offset prevents crowding. Unconventional color choice but distinctly visible. **Sufficient.**

Note: `group-hover` effects (arrow nudge, badge scale) fire on pointer hover only, not keyboard focus. Keyboard users see the focus ring but not the motion affordances. Acceptable — the focus ring is the correct keyboard signal.

## What's Working

1. **Credential-first hierarchy.** Credly badge leads, then specializations, then coursework — heaviest signal first, lightest last. Correct direction.
2. **Narrative economy.** Two short paragraphs establish motive, then evidence. Skim layer ("Everything here is pointed at that question." in white) works without ceremony.
3. **Aria hygiene.** `aria-label` on every external link with action + destination + "(opens in new tab)". Heading structure h1 → h2 × 3 clean. `aria-labelledby` on section intact.

## Prior Issue Status

- P2 Closing CTA sentence weak: RESOLVED — callback sentence echoes opener
- P2 Mobile arrow orphan on CTA: RESOLVED — whitespace-nowrap
- P3 Credly aria-label dash: RESOLVED — comma used
- P3 Metadata "Three specializations": RESOLVED — accurate description
- P3 Vestigial bullet: RESOLVED — removed

## Priority Issues

**[P1] Mobile flex breaks on long course names**
"Claude Code: Software Engineering with Generative AI Agents · Vanderbilt University" wraps to 2–3 lines at 375px; "Verify →" floats top-right of the tall row. The visual bond between the course name and its Verify link is weakened.
Fix: Add `flex-col sm:flex-row items-start` to coursework `<li>` elements; `Verify →` falls below the name on mobile.

**[P2] "Credentials" H2 wraps a single card**
Section header "Credentials" (plural) with one item implies a list that doesn't exist. Premature hierarchy that costs vertical space and overpromises.
Fix: Either remove the H2 and present the callout directly with a "Certification" label inside the card, or accept that the header will make sense when a second badge arrives.

**[P2] Stagger asymmetry**
Specializations items appear statically; Coursework items stagger. Defensible but creates an inconsistent scroll experience across adjacent sections.
Fix: Add a light stagger (25ms × 2 items) to Specializations list, or lean into the asymmetry by making it architecturally explicit.

**[P3] Arrow space stripped by inline-block**
Leading space inside `<span className="inline-block">` is stripped by CSS white-space collapsing at the start of the span's block formatting context. All arrows likely affected; "Credly→" is the most visible instance due to `text-xs` size.
Fix: Move space OUTSIDE the span: `Verify <span aria-hidden="true" className="inline-block ...">→</span>`.

**[P3] Closing sentence construction**
"This is what it looks like to not use AI as a black box." — "to not use" is a soft split infinitive. The callback is correct; the phrasing can be crisped.
Fix: "This is what it looks like to know what's inside the box." or "That's what it looks like to understand your tools."

**[P3] No skip-to-content link**
7 Verify links require 7+ Tab keypresses before reaching the closing CTA. Site-wide gap, not specific to this page.

## Persona Observations

**Jordan (5s):** H1 → badge image → "Claude Certified Architect Foundations" → "Anthropic · 2025." That's enough to register "certified by Anthropic in 2025." Likely clicks "Verify on Credly" before reading further — correct outcome. Page rewards the hire/pass decision in under 10 seconds.

**Casey (mobile, 375px):** P1 issue is real. Long course names create ambiguous Verify link placement.

**Sam (screen reader):** h1 → h2 × 3, clean. All external links labeled. `aria-hidden` on arrows. Focus-visible contrast sufficient. `group-hover` effects don't reach keyboard users — acceptable.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 19 |
| Narrative Arc and Structure | 20 | 17 |
| Copy Quality and Persona Fit | 20 | 17 |
| Visual Hierarchy and CTA Logic | 15 | 13 |
| Nielsen Heuristics (normalized) | 15 | 12 |
| Cognitive Load and Skim Path | 10 | 8 |
| **Total** | **100** | **86** |
