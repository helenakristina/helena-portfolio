---
date: 2026-07-18T23:30:00Z
file: src/app/page.tsx
slug: src-app-page-tsx
score: 76
prior_score: 63
delta: +13
p0: 1
p1: 2
p2: 2
p3: 2
detector: clean
---

# Critique: Home Page (`src/app/page.tsx`) — Re-critique after polish pass

**Score: 76/100** (+13 from 63) — Hero is now doing real work. The remaining gap is in the close and in the translation of the home page's emotional promise into shipped evidence.

---

## Detector

Clean. Zero hits. Exit 0.

---

## Browser Evidence

**Desktop (1280px):** All hero content visible above the fold — quote, sub-headline, byline, Meno descriptor, both CTAs — with ~240px of dead black space below the CTA row before the section break (`min-h-[90vh]` effect). Right ~62% of hero viewport is empty. Both "See my work →" and "See how I work →" present and identically styled in the About columns.

**Mobile (375px):** Hero wraps correctly, CTAs side-by-side (no overflow). ~211px of dead space below CTAs — visually significant on mobile, can read as a broken layout. About collapses to single column correctly.

**Meno descriptor:** `rgb(255,255,255)` white on near-black — high contrast, clearly legible.

**Ghost button:** `border-white/50` — visible but softer than a full-weight ghost button. Reads as secondary, not invisible.

**About body copy:** `oklch(65% 0 0)` on near-black ≈ 5.5:1 contrast ratio — passes WCAG AA.

---

## What Changed (Polish Pass)

All P0s from the prior critique resolved:
- ✅ **Meno descriptor added** in hero — "Meno: AI-powered support for women navigating perimenopause — built with RAG, grounded in clinical evidence."
- ✅ **CTA hierarchy fixed** — "See my work →" and "See how I work →" demoted to text links. Only two CTAs in hero, one solid primary, one ghost.
- ✅ **"The approach" copy rewritten** — leads with "Every PR I merge, I can explain." Credentials moved to end as supporting evidence.
- ✅ **Ghost button upgraded** — `border-white/25` → `border-white/50`
- ✅ **"See my work →"** added under "The work" for structural symmetry.

---

## Nielsen Heuristics

| # | Heuristic | Score |
|---|-----------|-------|
| 1 | Visibility of System Status | 3/4 — Fade-in tasteful, reduced-motion handled; ghost hover too subtle |
| 2 | Match System / Real World | 4/4 — Clear language throughout |
| 3 | User Control and Freedom | 3/4 — Fixed nav escape; no map to site depth |
| 4 | Consistency and Standards | 3/4 — Ghost button border inconsistency between pages (/50 home vs /25 meno) |
| 5 | Error Prevention | 3/4 — No forms; linked routes exist |
| 6 | Recognition Rather Than Recall | 4/4 — Page is self-orienting |
| 7 | Flexibility and Efficiency of Use | 2/4 — No fast path for skimmers; credentialing is below fold |
| 8 | Aesthetic and Minimalist Design | 4/4 — Genuinely disciplined. One accent, no decoration, nothing competing |
| 9 | Error Recovery | N/A |
| 10 | Help and Documentation | 2/4 — "Built with RAG" unexplained; non-technical readers slightly stranded |

**Average (excluding N/A): 3.1/4 (77.5%)**

---

## Cognitive Load

All 8 items in good shape. Two observations:

- **Hero has five distinct type sizes** in one visual zone (H1 clamp, subhead clamp, byline sm, descriptor sm, CTAs sm). The stepping is rational but creates density before the CTAs.
- **No emotional bridge** between the hero and the About section. The page moves from mission-driven quote to employer list without a transition. Works, but doesn't flow.

---

## Emotional Journey

**Entry (H1 + punchline):** Genuinely arresting. Mission in pale pink, then "I built something about it." — short, confident, past tense. Excellent.

**Byline:** Correct register drop. A whisper. Works.

**Meno descriptor:** Dips. "AI-powered support... built with RAG, grounded in clinical evidence" is accurate but clinical after something that felt personal. The reader has just felt something and now they're getting a README.

**About — "The work":** Credentialing mode. Real companies, real numbers. Works for skeptics but is a tonal left turn from the hero.

**About — "The approach":** The rewrite is the single best improvement. "Every PR I merge, I can explain. Every test I ship, I understand what it catches." Specific, falsifiable, exactly what the skeptical hiring manager needed to read.

**End:** The page still doesn't close. "See how I work →" in small accent text is not a final beat. Per peak-end rule: the peak (H1 + punchline) is excellent; the end (text link) is quiet. The hero was fixed; the close was not.

---

## Strengths

1. **The quote/punchline/byline sequence is now the best thing about the page.** Mission → action → identity in three steps. No other tech portfolio opens this way.

2. **"The approach" copy is doing real persuasion.** "Every PR I merge, I can explain" is a specific, testable claim. "I use AI to move faster, not to skip the judgment that makes code worth maintaining" is the precise counter-signal to the AI-skeptic hiring manager. This copy answers the biggest objection.

3. **CTA hierarchy is controlled.** One solid primary, one ghost, two text links. The decision tree is obvious without being heavy-handed.

---

## Remaining Issues

### P0 — The page has no close
The About section ends with two text links. There is no final beat, no call to action that carries weight, nothing that invites the reader to take the next step. The emotional arc is: **arresting opening → credentialing → quiet stop**. The home page's promise (she came back and built something real) is never delivered on the home page itself — it's deferred to /meno. A visitor who skims the hero and the About section and doesn't click through has seen the premise but not the proof, and leaves with nothing to remember except the quote.

Fix: A short closing section after About — even two sentences and a contact CTA — would resolve this. Something that echoes the hero's register and invites action.

### P1 — Meno descriptor is functional but tonally mismatched
"Meno: AI-powered support for women navigating perimenopause — built with RAG, grounded in clinical evidence." is accurate but shifts from personal/emotional to product-README. The Meno case study has the real origin story (the dismissed appointment, the specialist, the ten minutes). Even one line of that here would create continuity: the reader has just felt something; give them a human reason to click before a technical one.

### P1 — No evidence the thing is shipped
"Is this real and recent?" is the skeptical hiring manager's unresolved question on the home page. No live link, no launch date, no "available now." The Meno page has a live link, but only visitors who click through see it. Someone who reads only the home page has no signal that Meno is real and working — only that Helena built something.

### P2 — Ghost button border inconsistency between pages
Home page: `border-white/50`. Meno page CTAs: `border-white/25`. No explicit ghost-button-border token in the design system, so authors make local decisions. Should be standardized.

### P2 — About section heading size
`h2` at `text-lg` (18px) in a context where the H1 runs 36–80px is extreme ratio. Meno page uses `text-2xl` for its section headers (24px). Pulling About headers to `text-xl` or `text-2xl` would create cleaner visual breathing room without competing with the hero.

### P3 — "Stepped away with intention" slightly soft
Works as a framing but reads slightly euphemistic to a skeptic. The Meno page makes the gap meaningful. The home page doesn't — it signals there's a story without landing it.

### P3 — `min-h-[90vh]` dead space visible on mobile
~211px of empty space between the CTA row and the About section border on mobile. Looks like a loading gap or broken layout to a casual visitor.

---

## Persona Status

**Jordan (tech lead, skeptical):** Reads the approach copy and slows down — the fix landed for this persona. Risk: the hero is self-contained enough that Jordan may not scroll to see the credentialing. No reason to scroll is given before the fold.

**Casey (non-technical hiring manager):** "Built with RAG" unexplained. Casey knows "AI-powered" and "clinical evidence" but can't evaluate the technical depth. The home page doesn't offer Casey an alternative entry point calibrated to their level.

**The Skeptical Hiring Manager:** Main improvement from v1: no longer reads boilerplate and closes the tab. Remaining risk: reads "See my work →" and is taken to a timeline of employers rather than proof of craft — but that's a /work page issue, not home.

---

## Minor Observations

- `text-balance` on H1 correct and good. On About h2s (single-line headings) it's inert but harmless.
- `max-w-sm` on Meno descriptor (~24rem) constrains line length tightly in a wide container — `max-w-md` would breathe better without losing the left-anchored feel.
- `text-[var(--bg)]` on the primary button is slightly fragile — `text-black` is more robust and accurate to design intent.
- "Get In Touch" as a ghost button label is the only phrase on the page that could have come from any portfolio. Low priority but worth noting.
- "Open to roles in healthcare, AI, and purposeful engineering" (footer) — "purposeful engineering" is slightly worn phrasing for a portfolio whose voice is otherwise specific.

---

## Score Delta

| Category | V1 | V2 |
|----------|----|----|
| AI slop test | 9/20 | 15/20 |
| CTA + visual hierarchy | 8/15 | 14/15 |
| Emotional journey + close | 11/20 | 12/20 |
| Copy quality + persona fit | 11/20 | 16/20 |
| Technical craft + consistency | 10/15 | 10/15 |
| Cognitive load | 7/10 | 9/10 |
| **Total** | **63/100** | **76/100** |
