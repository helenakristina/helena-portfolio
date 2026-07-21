---
target: process
total_score: 75
p0_count: 1
p1_count: 2
p2_count: 1
p3_count: 1
timestamp: 2026-07-21T02-29-04Z
slug: src-app-process-page-tsx
---
Method: dual-agent

## AI Slop Verdict

**Mostly clean. One structural leak.**

The prose in the stage descriptions reads with genuine specificity — "CATCHES annotation," "No plan, no code," "feed directly into the next feature cycle." The closing anaphora is the strongest writing on the site. Detector exit 0, no banned patterns anywhere.

The one pattern that reads as AI-generated: the subtitle field on every card. Seven stages, seven subtitles, all in the same grammatical mold. They compress the title and then re-state the first sentence of the description. Stage 2: subtitle says "Plan reviewed and approved before a single line gets written"; description opens "I review and approve the plan before a single line of code gets written." Stage 6: subtitle says "Read every line of code and every test in the PR"; description opens "I read every line of code and every test in the PR." The subtitles are doing no additive work — they are the description's first sentence, compressed. Seven identical template slots is the tell.

**Detector: CLEAN.** Exit code 0. No anti-pattern hits. No banned CSS patterns.

## Browser Evidence

**Heading hierarchy confirmed.** H1 "How I Work" (id="process-title") → 7× H2 stage titles. No H3. No skip. Clean.

**Aria attributes confirmed.** `aria-labelledby="process-title"` on section — correct. `aria-hidden="true"` on timeline line, dot, and footer decorative divider — all present. Compound Engineering link has `aria-label="Compound Engineering (opens in new tab)"` — correct.

**Stagger implementation confirmed.** All 7 stage cards have `animate-list-item` with `--stagger` values 0ms–480ms. Footer coda and philosophy paragraphs have reset values (0ms, 0ms, 100ms). All `CSSProperties` imports present.

**"Product Requirements Document (PRD)"** confirmed in Stage 1 description.

**`ce:` intro code element** confirmed before card `ce:` commands in document order.

**No hard-coded colors.** All values use Tailwind utility classes resolving to CSS tokens.

**No overflow at 375px.** Longest single word is "Test-Driven" (~90–100px at text-lg); no card title or subtitle overflows at 295px usable card width on mobile.

**`globals.css` animation guards confirmed.** `animate-list-item` inside `@supports (animation-timeline: view())` with reduced-motion override. `timeline-line-draw` scroll-driven with reduced-motion override. `@media print` reset present for both classes.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scroll-driven animation gives implicit progress. No position indicator needed at this page length. |
| 2 | Match System / Real World | 4 | Jargon explained inline. "ce:" contextualized immediately. PRD expanded on first use. |
| 3 | User Control and Freedom | 4 | Static page. No traps. |
| 4 | Consistency and Standards | 2 | Cross-page inconsistency: WorkTimeline role title uses `text-accent font-semibold`; process subtitle uses `text-ink-muted text-sm`. Different hierarchy treatments for the same conceptual slot (card secondary info) with no apparent reason. H1 `mb-6` here vs `mb-16` on work page lands differently. |
| 5 | Error Prevention | 4 | N/A — static read-only page. |
| 6 | Recognition Rather Than Recall | 3 | `ce:` explanation in intro. But scanning users hit `ce:plan` on card 2 without having read the intro. Explanation is above-fold only — not persistent. |
| 7 | Flexibility and Efficiency | 3 | No stage anchors, but acceptable at 7 items. |
| 8 | Aesthetic and Minimalist Design | 2 | Subtitle and description are both `text-ink-muted text-sm`. No typographic distinction between a "what" label and a "how" explanation. Three text nodes per card at similar visual weight — two muted layers is one too many. |
| 9 | Error Recovery | 4 | N/A. |
| 10 | Help and Documentation | 3 | Compound Engineering link is the right move. No indication of where this page sits in the site hierarchy (no active nav state visible from here). |
| **Total** | | **32/40** | Good |

## What's Working

1. **The closing anaphora is the best writing on the site.** "Every PR I merge, I can explain. Every test I approve, I understand what it catches. Every feature I ship, I know why it exists." It lands on the peak-end rule correctly — last thing read, most likely to be remembered. The anaphoric rhythm is earned, not decorative.

2. **`ce:` commands as inline metadata is well-executed.** Present but not dominant. They appear as secondary metadata (smaller, accent color, same line as subtitle), explained once in the intro. This is the right level of detail for a portfolio page — present for the curious, ignorable for the skimmer.

3. **The philosophy section framing is conceptually strong.** "AI can write code faster than I can, but writing code is not the hard part." This positions Helena correctly without being defensive. It sounds like someone who has worked with AI tooling at scale, not someone reacting to a trend.

## Priority Issues

**[P0] No CTA at page end**
The page ends after its strongest writing. A hiring manager who is convinced has nowhere to go. The home page has a full closing section with a "Get In Touch" CTA. This page builds harder (it requires reading investment) and offers zero exit affordance. The emotional peak — the closing anaphora — is followed by silence.
Fix: Add a closing link after the second philosophy paragraph. "See the work →" (links to `/work`) or "Get in touch →" (links to contact) — whichever fits the intended conversion path. Even a text link at `text-accent hover:text-white` matches the existing pattern from the learning page's closing section.
Suggested: /impeccable clarify

**[P1] Subtitle and description text are typographically identical**
Both are `text-ink-muted text-sm`. The only separation is a `mt-3` margin. The subtitle does not function as a second heading — it reads as a lead sentence of the description. Three prose blocks per card where there are effectively only two meaningful layers (stage name + explanation). The eye has no clear signal after the title.
Fix: Either give the subtitle a distinct treatment (`text-white/60 text-xs` would read as metadata rather than prose), or remove it and absorb its key phrase into the first sentence of the description.
Suggested: /impeccable clarify

**[P1] Subtitles are largely redundant**
Six of seven subtitles compress a sentence that the description's opening already says better. Stage 6 subtitle: "Read every line of code and every test in the PR." Description: "This is where I invest the most time. I read every line of code and every test in the PR." The subtitle adds no information; it just pre-announces what the next sentence says. If they stay, they need to carry something the description does not — a concrete outcome, a constraint, a decision criterion.
Fix: Rewrite subtitles to be additive (say something the body text does not), or remove them and strengthen the first sentence of each description.
Suggested: /impeccable clarify

**[P2] Stage 4 (Manual Testing) has no specific tell**
Six of the seven stages have something concrete and distinctive. Stage 4 has only "visual issues, workflow gaps, edge cases that only surface in real use" — true of every engineer's manual testing. The stage reads generic against the specificity of its neighbors. If Helena has a specific pattern here from building Meno (a checklist, a particular device, a walkthrough order), name it.
Fix: One specific concrete detail that makes this feel like Helena's manual testing process, not a job description.
Suggested: /impeccable clarify

**[P3] `--stagger` resets to 0ms on elements outside the map loop**
The "Learnings feed the next cycle" coda and the philosophy paragraphs reset stagger to 0ms/100ms. These elements animate in independently of the card sequence above them. If they enter the viewport before the last card finishes staggering, the timing may feel discontinuous. Low-risk but worth a browser check at slow scroll speed.
Fix: Set the coda's `--stagger` to something like `120ms` to give it a beat of delay after the card sequence. Or leave it if browser testing confirms the transition is smooth.
Suggested: /impeccable animate

## Persona Red Flags

**Jordan (hiring manager, 5s scan)**
Scans H1, then the 7 stage titles. The titles alone tell the story. But Jordan's eye will catch `ce:plan`, `ce:work`, `ce:review`, `ce:compound` before reading the intro explanation. The `ce:` codes read as unexplained jargon on a fast scan. The explanation exists only at the top; a Jordan who reads titles → jumps to a card hits unexplained terms. On mobile, the intro paragraph may be below the fold after the H1. Risk is real but low — the explanation is one scroll up.

**Sam (screen reader / keyboard)**
Section `aria-labelledby="process-title"` is correct. All 7 stage H2s are peer-level headings under the H1 — semantically fine for a flat list. `aria-hidden` on all decorative elements confirmed. The `<a>` to Compound Engineering has correct `aria-label`. `<code>` elements for `ce:` commands will be read as "ce colon plan" — acceptable for this context. No blocking failures.

**Casey (mobile)**
`pl-10` + `-left-10` dot pattern holds at 375px. `p-5` card padding leaves ~295px usable text width — readable at `text-sm`. One risk: on a long subtitle with an inline `<code>` element (`ml-2 font-mono text-xs`), the code badge may wrap to a new line at 320px, detaching from the subtitle text. Worth checking at 320px viewport. No major mobile failures.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 16 |
| Narrative Arc and Structure | 20 | 15 |
| Copy Quality and Persona Fit | 20 | 16 |
| Visual Hierarchy and CTA Logic | 15 | 10 |
| Nielsen Heuristics (normalized) | 15 | 12 |
| Cognitive Load and Skim Path | 10 | 6 |
| **Total** | **100** | **75** |
