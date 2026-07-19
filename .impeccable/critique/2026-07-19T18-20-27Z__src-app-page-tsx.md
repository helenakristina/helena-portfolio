---
target: home
total_score: 85
p0_count: 1
p1_count: 1
p2_count: 2
p3_count: 2
timestamp: 2026-07-19T18-20-27Z
slug: src-app-page-tsx
---
# Critique: Home Page (`src/app/page.tsx`) — Fifth pass

**Score: 85/100** (+2 from 83) — Structure is clean. Remaining gap is entirely in copy and one micro-layout decision.

---

## Detector

**Exit code: 0. Zero findings.** Clean.

---

## What Changed (Fifth Pass)

- ✅ **Hero dead zone eliminated**: Content-driven `pt-32 pb-28` replaced `min-h-[90vh] justify-center`. Browser confirmed: hero is 716px, 0px gap between hero bottom and About border. About section is partially visible at desktop without scrolling — creates natural scroll invitation.
- ✅ **CTA contrast**: `text-black` on `bg-accent` = 13.88:1 contrast ratio. WCAG AAA. No concerns.
- ✅ **Byline cleaned**: `Helena Lucia · Senior Engineer` — no leading en-dash. DOM confirmed.
- ✅ **Descriptor width**: `max-w-md` gives 448px — wraps cleanly across 2 lines. No orphans.
- ✅ **Heading structure confirmed**: H1 → H2 (The work) → H2 (The approach) → H2 (Healthcare...) — correct.
- ✅ **Arrow aria-hidden**: All 4 arrow instances wrapped. Hero ghost button `Get In Touch` correctly has no arrow, correctly has no span.
- **Meno descriptor partial**: "research-grounded answers their doctors don't have time to find" — the second half lands; the qualifier "research-grounded" introduces a new P0.

---

## Browser Evidence

**Desktop (1280px):**
- Hero: 716px height, content-driven. About border starts at 716px — the top of the About section is visible without scrolling at standard desktop viewport (900px). Editorial feel, not theatrical forced-fill.
- Descriptor: 2-line clean wrap at 448px max-width. "don't have time to find" completes on line 2 with no orphan.
- Black text on accent pink: RGB(246, 198, 205) → 13.88:1 contrast.

**Mobile (390px):**
- Hero: 673px height. No dead space.
- CTAs: Side by side on one row (134px + 139px). No stacking.
- No horizontal overflow (`body.scrollWidth === 390`).

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Hover states consistent; static page |
| 2 | Match System / Real World | 3/4 | "The work" / "The approach" are slightly abstract — hiring manager mental model says "Experience / Philosophy" |
| 3 | User Control and Freedom | 3/4 | Multiple clear exits; no dead ends |
| 4 | Consistency and Standards | 3/4 | h2 weight mismatch (text-2xl bold vs text-lg semibold) reads intentional but is subtle enough to seem accidental |
| 5 | Error Prevention | 4/4 | N/A surface |
| 6 | Recognition Rather Than Recall | 3/4 | Descriptor arrives after hero/CTA setup, not before; reader waits for product explanation |
| 7 | Flexibility and Efficiency | 3/4 | Two clear CTAs; no skip-nav |
| 8 | Aesthetic and Minimalist Design | 3/4 | Five content layers in hero; byline and descriptor compete for same attention slot |
| 9 | Error Recovery | 2/4 | N/A surface |
| 10 | Help and Documentation | 3/4 | Page answers who/what; credential list reads as postscript rather than signal |
| **Total** | | **31/40** | **Good — solid foundation** |

---

## Anti-Patterns Verdict

**LLM:** The page is not AI-generated in its bones. The h1 as quoted mission is distinctive. "I built something about it." is confident and specific. "I stepped away with intention" is human. The career arc is legible and uncommon. One phrase breaks the pattern: "research-grounded" reads like health-app marketing copy — a credibility label rather than a specific description. Everything else passes the category-reflex check.

**Deterministic scan:** Clean. Exit 0.

---

## Overall Impression

The architecture is done. The page has a clear voice, a working belief ladder, confirmed a11y compliance, browser-clean rendering, and no structural issues left. What remains is a small cluster of copy decisions — one phrase that reads like a tell, one element in the wrong position, one closing line facing the wrong direction. These are one-line edits. The page is close to shippable; it just needs a final copy pass.

---

## What's Working

**1. The hero without the dead zone.** Removing `min-h-[90vh]` is the right call. The content is large enough (5rem h1 in pale pink, large semibold subhead) to carry visual authority without viewport filling. The page now opens like a printed piece — generous padding, not theatrical forced height. Browser confirmed: 716px at desktop, 0px dead space.

**2. "Every PR I merge, I can explain."** This is the best sentence on the page. It's specific, falsifiable, and directly addresses the 2026 hiring manager's core anxiety about AI-assisted engineers. It earns trust without asking for it.

**3. Structural restraint throughout.** Three sections, one voice, no sidebar, no skill bars, no animated headings, no card grids. The `border-border-subtle` separators are quiet enough to pace without breaking flow. The typographic hierarchy is legible. The system is being respected.

---

## Priority Issues

### [P0] "research-grounded" is the one remaining tell
"Meno gives women the research-grounded answers their doctors don't have time to find."

The second half of this sentence is good — "answers their doctors don't have time to find" is specific and human. "Research-grounded" is the problem: it's a credentialing label that sounds like it was optimized for trust signals rather than written for a person. Every femtech product in 2026 is "research-grounded." It tells rather than shows, and it breaks the register that the rest of the page maintains.

**Fix:** Name the mechanism instead of labeling the quality.
- "...answers sourced from clinical research, not search results." (specificity: contrasts against Google Health)
- "...answers backed by actual studies, not general wellness advice." (plain language version)
- "...answers their doctors didn't have time to find." (cut the qualifier entirely — the sentence is stronger without it)

### [P1] Byline position breaks the hero narrative sequence
`Helena Lucia · Senior Engineer` sits between the subhead ("I built something about it.") and the Meno descriptor. The visitor is tracking a mission arc — problem → action → product — and the identity beat interrupts it. First-time visitors may read it as a caption for the quote rather than a byline. It arrives too late to ground the visitor and too early to transition to the product.

**Options:**
1. Move above the h1 as a pre-title: `text-xs text-ink-muted tracking-wide mb-6` — small, muted, sets context before the quote
2. Remove entirely — the nav has her name, the page `<title>` has her name, the meta has her name; the h1 delivers her voice before her identity

### [P2] Descriptor at `text-sm` whispers after the h1/subhead
The Meno descriptor drops from `clamp(1.125rem,2vw,1.75rem)` on the subhead to `text-sm` (0.875rem) — a four-step type scale jump down. The descriptor is doing important work: it's the one sentence that explains the product. It's being asked to do that work in fine print. `text-base` (1rem) minimum; `text-[0.9375rem]` as a compromise.

### [P2] Closing statement faces the wrong direction
"Healthcare is being rebuilt. I want to be in the room."

This is Helena's aspiration, not the reader's invitation. A hiring manager finishing the page reads "she wants this" and is left to make the leap to "so I should contact her." One reframe closes that gap:
- "Healthcare is being rebuilt. If you're building it, let's talk." — converts aspiration to invitation
- "Healthcare is being rebuilt. The engineers who shape it are being hired right now." — reader-facing urgency

### [P3] "everything I learned along the way" is hollow
"I came back building Meno, and everything I learned along the way." The clause gestures at something without naming it. In a passage that is otherwise specific (Intel, Cylance, 35 billion records), this phrase reads as a connective tissue filler. Cut it: "I came back building Meno." is complete without it.

### [P3] Credential fragments break prose rhythm
"Three Coursera AI specializations. Claude Certified Architect – Foundations." Two fragments end a paragraph of full sentences. The rhythm break signals "resume item pasted in." Either integrate into a sentence or move to a /about page where credentials have context.

---

## Persona Red Flags

**Jordan (skeptical hiring manager, 90-sec scan):**
Byline position creates a 0.5-second confusion — is "Helena Lucia · Senior Engineer" a caption for the quote or a header? The descriptor at `text-sm` is easy to miss at scan speed. Jordan may hit the CTA without fully processing what Meno is. "Everything I learned along the way" will not survive a skim — registers as filler. The closing statement doesn't give Jordan a permission structure to act.

**Casey (mobile, one-handed):**
CTAs side-by-side on one row — browser confirmed at 390px. No overflow. `text-[2.25rem]` h1 wraps cleanly. The 3fr/2fr About grid collapses to single column on mobile — "The approach" loses its visual subordination and reads equal to "The work." Minor but notable on mobile specifically.

**Sam (screen reader/keyboard):**
H1 → H2 × 3 heading structure confirmed — correct. Arrows aria-hidden on all 4 instances. The two About section `<h2>` elements have mismatched visual weights but identical semantic roles — screen reader nav gives no indication one is subordinate to the other. No skip-to-main visible in source.

---

## Minor Observations

- `animate-fade-in` is only on the hero. About and Closing sections appear without entrance animation. This is either intentional (hero-only entrance) or an oversight.
- The hero ghost CTA "Get In Touch" has no arrow; closing CTA "Get In Touch →" does. Minor inconsistency — either both should have the arrow or neither should.
- `border-white/50` on the ghost button computes to approximately `oklch(50% 0 0)` on near-black — visible but soft. Intentional softness for secondary hierarchy.
- "See my work →" and "See how I work →" in parallel positions differ by one word — a fast scanner could register them as duplicate links.

---

## Questions to Consider

1. **What's the right noun for "research-grounded"?** The mechanism is more persuasive than the label. Does Meno pull from PubMed, clinical guidelines, curated research? One specific source type is more trustworthy than the generic qualifier.
2. **Is the byline earning its position?** The page has four places Helena's name appears (nav, page title, meta, byline). What does the byline uniquely add at its current position in the hero?
3. **Whose sentence is the closing?** "I want to be in the room" is a statement about Helena. The rest of the page asks the reader to evaluate her. Should the close invite the reader to act, or is the aspiration statement the right emotional register for the end?
