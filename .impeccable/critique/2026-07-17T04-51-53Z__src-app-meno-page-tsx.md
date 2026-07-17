---
target: meno
total_score: 29
p0_count: 1
p1_count: 2
timestamp: 2026-07-17T04-51-53Z
slug: src-app-meno-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "View live app →" link proves product exists; no in-page location indicator for a long scroll |
| 2 | Match System / Real World | 4 | Medical terminology used precisely without over-explaining. Excellent |
| 3 | User Control and Freedom | 2 | 530 lines, no anchor links. No ability to jump or orient. Mid-page departure link is abrupt |
| 4 | Consistency and Standards | 3 | H2s consistent; text-accent on both tech labels and market stats — mild semantic conflation |
| 5 | Error Prevention | 3 | Static page; n/a for forms |
| 6 | Recognition Rather Than Recall | 3 | Screenshot captions clear. H1 "Meno" provides no context for a cold arrival — no lede before narrative |
| 7 | Flexibility and Efficiency | 2 | No skim layer. No pull quotes, no summary. Must read from line 1 or feel like missing something |
| 8 | Aesthetic and Minimalist Design | 3 | Prose sections clean. Roadmap block (icon grid + market stats) is a visual register break |
| 9 | Error Recovery | 3 | Static page; n/a |
| 10 | Help and Documentation | 3 | Footnotes are a rare and credible choice. "$600B by 2030" uses 2024 source — date attribution slightly loose |
| **Total** | | **29/40** | **Good — strong content, structural gaps** |

## Anti-Patterns Verdict

**LLM assessment: Not AI slop. Two slop patches on a real document.**

The prose is doing real work. The opening anecdote is specific and medical — "she seemed a little irked when I found one myself" is not AI-generated. The case study arc is coherent and earned. No gradient text, no glassmorphism, no eyebrow text, no numbered markers, no hero-metric block.

The exceptions: the roadmap icon grid (four centered icons with labels — lines 382–473) is a recognizable template widget. The market stats row ($63B / $600B / 7%) reads like a pitch deck card. Both live inside a border-subtle container. The prose earns everything these elements claim, then the elements undercut the prose.

**Deterministic scan: CLEAN** — detector `[]`, exit 0. No color violations. Gray color substitution from prior polish pass confirmed clean.

**Browser evidence:** Desktop renders without issues. Mobile (375px) confirms: `grid-cols-4` roadmap grid and `grid-cols-3` stats row have no responsive breakpoints — both compress to near-unreadable at 375px. Confirmed by Assessment B browser screenshots.

## Overall Impression

This is the best copy on the portfolio. The personal narrative is specific, the engineering proof is credible, and the footnotes signal a rigor that most portfolios never reach. The problem is structural: the page assumes the reader will stay for 530 lines, in order, without help. A hiring manager with 90 seconds has no skim path, no orientation, and nowhere to land when they're done.

## What's Working

**1. The opening narrative earns its length.** Every paragraph advances the argument. Specificity ("micronized progesterone," "NAMS-certified") signals medical literacy without performance. What a personal case study should do.

**2. Technical credibility demonstrated, not claimed.** "Dependency injection throughout means swapping providers requires changing one file" and "It will hard fail on parse errors. A partial or empty clinical document is worse than none" are statements of engineering judgment that a tech stack table alone could not provide.

**3. The footnotes.** Sourced citations on a portfolio page earn credibility with anyone who cares about epistemic rigor.

## Priority Issues

**[P0] No entry point for cold visitors**
H1: "Meno." First body sentence: "I came prepared." A visitor arriving via direct link has zero context. All product context arrives at line 99, ~800 words in. A single lede sentence between H1 and CTA — "A full-stack healthcare app for women navigating menopause." — solves this with zero disruption to the narrative.
→ `/impeccable clarify meno`

**[P1] No closing CTA — page goes cold**
After the closing paragraph ("even if that someone is an app"), the next element is `text-xs text-ink-muted` footnotes. The emotional arc deflates into citations. No terminal action for a hiring manager who just finished the full read. A CTA between the closing paragraph and footnotes turns a completed read into a continued relationship.
→ `/impeccable clarify meno`

**[P1] Roadmap block: register break + no mobile fallback**
`grid-cols-4` roadmap grid (lines 382–473) and `grid-cols-3` stats row (lines 476–487) have no responsive breakpoints. Both compress to unreadable tight columns at 375px — confirmed by browser. Beyond the mobile failure, the icon grid (four centered icons, label below) is a template widget that doesn't belong in an essay. The prose above and below already carries this content.
→ `/impeccable adapt meno` (mobile) + `/impeccable distill meno` (register)

**[P2] No skim layer**
Every H2 is identical in weight and size. No pull quotes, no bolded key sentences. A hiring manager giving the page 90 seconds has no shortcut to the content that matters most.
→ `/impeccable layout meno`

**[P2] Centered prose in the closing section**
Line 492: `text-center` wraps two multi-line prose paragraphs. Centered body prose is always wrong at paragraph length. The closing words are the best on the page; centering them signals "inspirational pull quote template."
→ `/impeccable layout meno`

## Persona Red Flags

**Jordan (hiring manager, first visit)**
Lands at `/meno`. H1: "Meno." First sentence: "I came prepared." Doesn't know what Meno is. 800 words before the product is described. Finishes the page, wants to reach out — no terminal CTA, scrolls back up to navigate.

**Casey (mobile user)**
4-column roadmap grid and 3-column stats row have no responsive breakpoints. Confirmed broken at 375px by browser. Core reading experience is fine; these two blocks are the failure point.

**Sam (screen reader user)**
Four decorative SVG icons (lines 385, 405, 429, 449) have no `aria-hidden="true"`. External link (line 19) opens new tab with no `aria-label` or sr-only notice. Good: all four app screenshots have substantive, specific alt text.

## Minor Observations

- "(PREPARED!)" on line 199 — tonal inconsistency in a precise document; if intentional voice, fine; if crept in, remove
- "The Insight" (line 75) is the weakest section header — the section is really about the product hypothesis born from Helena's patient experience
- "How I work →" link (line 293) appears before the tech stack callout, making the callout read as an extension of the linked page; reversing their order would be cleaner
- `rounded-xl` on all four screenshot images conflicts with the Deliberate Edge sharp-corners principle; square images with `border border-border-subtle` would be more consistent

## Questions to Consider

**1.** Should there be one sentence before the narrative begins? Not a tagline — a lede. "I built Meno after my doctor couldn't help me." One sentence that orients without disrupting the story.

**2.** What is the one thing a hiring manager should remember 20 minutes after leaving this page? Does the structure lead with that, or bury it?

**3.** Is Meno demonstrably live and working today? A video walkthrough or Loom would close the loop that the technical section opens.
