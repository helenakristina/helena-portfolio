---
target: process
total_score: 74
p0_count: 2
p1_count: 1
p2_count: 1
p3_count: 1
detector: clean
timestamp: 2026-07-21T01-47-04Z
slug: src-app-process-page-tsx
---
Method: dual-agent

## AI Slop Verdict

**Mostly clean — two residue points.**

The page avoids all the hard failures: no gradient text, no glassmorphism, no rainbow cards, no numbered scaffolding. The copy inside the cards is genuinely specific — "Every test includes a CATCHES annotation describing the specific bug it prevents" and "No plan, no code" read like a real practitioner's opinions, not a portfolio template.

Two things break the illusion:

- **"Why this is my philosophy"** — exactly the self-referential heading LLMs produce when they need a section name. A human writer names the thing, not the meta-category of the thing.
- **Subtitle uniformity** — all 7 subtitles follow the same verb-phrase structure. The individual subtitles are good; the mechanical regularity across all seven reads like template output without editorial override.

**Detector: CLEAN.** Exit code 0. No anti-pattern findings. No teal, purple, or slate classes remain. No rounded-lg or rounded-xl. Design system is coherent throughout.

## Browser Evidence

**Heading hierarchy confirmed:** H1 "How I Work" → 8× H3 (7 stage cards + philosophy section). No H2 exists anywhere on the page. The philosophy heading ("Why this is my philosophy") is structurally indistinguishable from stage headings in a screen reader's heading list.

**Timeline dots:** All 7 use `-translate-x-1/2` class only. No inline style override. Browser measurement shows the dots at the expected x position — consistent with the Tailwind class computing correctly here. However, the `/work` page uses `style={{ transform: 'translateX(-50%)' }}` as an explicit override. Applying the same pattern would make the two timelines consistent.

**Zero `animate-list-item` classes** on any stage card. The class exists in `globals.css` (used on both the learning and work pages). Infrastructure available but not applied here.

**`ce:` code elements:** All 4 present and visible. Correct styling. 3 null stages render no code element — correct.

**No overflow** at 1280px or 375px.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Section-level fade-in on load; no per-card animation signal |
| 2 | Match System / Real World | 4 | Collaborative Design → Merge maps to real engineering workflow; `ce:` labels ignorable as metadata |
| 3 | User Control and Freedom | 3 | Static page; no traps |
| 4 | Consistency and Standards | 3 | H1 → H3 skip; philosophy H3 indistinguishable from stage H3s |
| 5 | Error Prevention | 4 | n/a; external link has `rel="noopener noreferrer"` |
| 6 | Recognition Rather Than Recall | 4 | All content visible; no memory burden |
| 7 | Flexibility and Efficiency | 2 | No stage anchors; no scroll compression on mobile |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and restrained; subtitle + ce: command on same `<p>` mixes semantic content |
| 9 | Error Recovery | 4 | n/a |
| 10 | Help and Documentation | 2 | `ce:` commands appear with no explanation or glossary |
| **Total** | | **32/40** | Good |

## What's Working

1. **The copy inside the cards is the strongest writing on the site.** CATCHES annotations, "No plan, no code", "I read every line of code and every test in the PR" — concrete, opinionated statements that distinguish a real practitioner from a template portfolio.

2. **"Learnings feed the next cycle" separator.** Subtle but semantically correct — closes the feedback loop and communicates the compounding idea without spelling it out.

3. **Design system coherence is now complete.** No trace of the old rainbow color scheme. Every element uses `border-border-subtle`, `text-ink-muted`, `text-accent`. Sharp corners throughout.

## Priority Issues

**[P0] Heading hierarchy: H1 → H3, no H2 anywhere**
Browser confirmed 8 H3s directly under the H1 — 7 stage cards plus the philosophy section. WCAG 1.3.1: heading levels must not skip. Screen reader users navigating by headings get a broken outline: one top-level item, then eight third-level items with no structure in between.
Fix: Change all stage card headings from `h3` to `h2`. Change the philosophy section heading from `h3` to `h2` as well.
Suggested: /impeccable audit

**[P0] `ce:` commands have no referent for the page's primary audience**
4 of 7 cards show code-styled labels (`ce:plan`, `ce:work`, `ce:review`, `ce:compound`). The Compound Engineering link in the intro establishes some context but a hiring manager skimming the cards won't connect the dots. The labels read as decorative noise rather than meaningful metadata.
Fix: Add one sentence to the intro paragraph — "Commands prefixed `ce:` are Claude Code slash commands from the Compound Engineering workflow." — or a small footnote after the last card.
Suggested: /impeccable clarify

**[P1] No scroll-driven stagger on the 7 stage cards**
The entire timeline appears at once via the section-level `animate-fade-in`. The `animate-list-item` class (scroll-triggered, staggered via `--stagger` CSS variable) is already in `globals.css` and is used on both the learning and work pages. Seven cards revealing progressively as the user scrolls would create a reading rhythm that mirrors the sequential nature of the process itself.
Fix: Add `animate-list-item` class and `style={{ '--stagger': `${index * 80}ms` } as CSSProperties}` to each stage card's outer div, identically to the work page pattern.
Suggested: /impeccable animate

**[P2] Philosophy section heading is AI-flavored copy**
"Why this is my philosophy" names the meta-category rather than the thing. The body copy — "AI can write code faster than I can, but writing code is not the hard part" — is the real hook and doesn't need a preamble announcing that a philosophy will be explained.
Fix: Remove the heading and let the body open directly, or replace with something that says something: "What this actually buys me" or "Where human judgment counts."
Suggested: /impeccable clarify

**[P3] Stage 7 closing sentence is passive**
"The process gets better over time" is flat for a final close. Either cut the last clause entirely ("These learnings feed directly into the next feature cycle.") or make it active: "The next feature starts smarter than the last one did."
Suggested: /impeccable clarify

## Persona Red Flags

**Jordan (hiring manager, 5s scan)**
Seven identically sized, fully expanded cards. No visual cue distinguishes what Helena does (stages 1, 4, 6) from what tooling does (stages 3, 5, 7). The `ce:` labels read as decorative code formatting without context. "Why this is my philosophy" sounds self-congratulatory before the body earns it. In 5 seconds Jordan gets "process page" not "this person is doing something specific and unusual."

**Sam (screen reader / keyboard)**
H1 → H3 skip is structural failure. NVDA navigating by headings announces "How I Work — level 1 / Collaborative Design — level 3" — the gap signals broken structure. All 8 H3 entries are peer-level in the outline; philosophy section indistinguishable from stage 7. Tab order is clean. `focus-visible` contrast correct. External link `aria-label` includes "(opens in new tab)" — correct.

**Casey (mobile)**
Seven fully expanded cards is a long unbroken scroll. The `pl-10` container plus `p-5` card padding leaves ~260px reading width at 375px. No collapse behavior. The timeline structure persists correctly at 375px — dots, line, and cards all render — but there is no compression affordance for users who want to skim rather than read.

## Minor Observations

- The closing anaphora in the philosophy section — "Every PR I merge, I can explain. Every test I approve, I understand what it catches. Every feature I ship, I know why it exists." — is the sharpest writing on the page. It currently sits at the bottom. Worth considering whether these three sentences could move higher or serve as a standalone quote above the card list.
- Timeline dot centering via `-translate-x-1/2` measures correctly in browser. For consistency with the `/work` page (which uses `style={{ transform: 'translateX(-50%)' }}`), applying the same inline style override would make both timelines implement the same pattern.
- `import type { CSSProperties }` will be needed when adding the stagger styles — the same pattern as the work page.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 15 |
| Narrative Arc and Structure | 20 | 14 |
| Copy Quality and Persona Fit | 20 | 16 |
| Visual Hierarchy and CTA Logic | 15 | 10 |
| Nielsen Heuristics (normalized) | 15 | 12 |
| Cognitive Load and Skim Path | 10 | 7 |
| **Total** | **100** | **74** |
