<!-- SEED: re-run /impeccable document once the new visual system is implemented to capture the actual tokens and components. -->

---
name: Helena Lucia — Portfolio
description: Senior engineer. Healthcare mission. Nothing wasted.
---

# Design System: Helena Lucia — Portfolio

## 1. Overview

**Creative North Star: "The Deliberate Edge"**

This is a portfolio where every decision is defensible — the design equivalent of reading every line of code before it ships. The system is built on true black, white, and pale pink: a palette that is instantly recognizable, immediately distinctive, and impossible to mistake for generated output. Nothing moves unless touched. Nothing is decorative. The type does the work, and the type is heavy.

The system rejects the entire visual vocabulary of the current dark-tech portfolio era: no teal, no cyan, no animated background blobs, no gradient text, no glassmorphism cards, no identical rounded cards repeated endlessly. It also rejects the corporate LinkedIn aesthetic and the bootcamp project template. What remains is something uncommon enough that a hiring manager notices it before they read a word.

Pale pink at 30–60% of key surfaces is the commitment. It doesn't whisper — it is present. On near-black, it reads as both warm and precise: personal without being soft, clinical without being cold. The right temperature for a portfolio built around healthcare and engineering rigor.

**Key Characteristics:**
- Near-black surface dominant; pale pink appears at scale, not just as punctuation
- White for primary text; pale pink for display moments and key accent elements
- Humanist sans in extreme weight contrast (light body, heavy display)
- No gradient text. No glassmorphism. No autonomous animation
- Space is structure — generous margins, deliberate rhythm, nothing fills space by default
- Scroll-triggered entrances only; no looping or ambient motion

## 2. Colors

A committed three-value palette: black, white, pale pink. The pink is not an afterthought — it carries 30–60% of key surfaces. Its presence on a near-black ground is the visual identity.

### Primary
- **Pale Pink** [to be resolved during implementation — target: a desaturated rose at high lightness, around OKLCH 88–90% lightness, low chroma ~0.04–0.06, hue ~0–10°]: The dominant accent. Appears on hero display text, key section backgrounds, and interactive highlight states. Not pastel-soft; dusty and precise.

### Neutral
- **True Black** [to be resolved — near-black, not slate, not warm-gray; OKLCH ~5% lightness, chroma 0]: The body background. Every page starts here.
- **White** [#ffffff or OKLCH 97% 0 0]: Primary text on black surfaces. Navigation text. Body copy.
- **Muted White** [to be resolved — OKLCH ~65–70% lightness, chroma 0]: Secondary text, captions, metadata. Used sparingly.

### Named Rules
**The Pink-on-Black Rule.** Pale pink on true black is the only chromatic relationship this system uses. No cyan, no teal, no blue, no gradient between two colors. One accent, used at scale, not scattered.

**The Committed Surface Rule.** The pale pink is not a highlight color appearing at ≤10%. It owns 30–60% of display moments. Section backgrounds, hero type, large callouts — it appears where it matters, at the size where it matters.

**The No-Warmth-By-Default Rule.** The black background has chroma 0; the pale pink's warmth carries the brand temperature. Do not add warmth through tinted backgrounds, warm-tinted neutrals, or "sand/cream" surface colors. Black is black.

## 3. Typography

**Body Font:** A single humanist sans, varied in weight [font family to be chosen at implementation — candidates: Plus Jakarta Sans, Instrument Sans, DM Sans. Final choice should perform well at weight 800–900 for display and weight 300–400 for body. The display weight is the design moment; the body weight disappears into readability.]

**Character:** One family across the entire site, doing two entirely different jobs: at display scale in near-black weight it stops the eye; at body scale in light weight it steps aside. The contrast between the two weights is the typographic identity. No serif, no second family, no mono used decoratively.

### Hierarchy
- **Display** (weight 800–900, `clamp(3rem, 8vw, 5.5rem)`, line-height 0.95–1.0): Hero headlines only. Helena's name, the page-defining statement per section. Pale pink or white.
- **Headline** (weight 700, `clamp(1.75rem, 4vw, 2.75rem)`, line-height 1.1): Section titles. White.
- **Title** (weight 600, `1.25rem–1.5rem`, line-height 1.2): Card headings, subheadings within a section. White or pale pink.
- **Body** (weight 400, `1rem–1.0625rem`, line-height 1.65): All prose. White or muted white. Max line length 65–75ch. `text-wrap: pretty` on paragraphs.
- **Label** (weight 500, `0.8125rem`, `letter-spacing: 0.01em`): Navigation, metadata, tags. White or muted. No all-caps tracking unless used once as a deliberate brand signal, not as scaffolding.

### Named Rules
**The Weight-Contrast Rule.** Display and body weights must be separated by at least 400 weight units (e.g. 800 display / 400 body). A headline that is "slightly bolder" than body is not a hierarchy — it's noise.

**The No-Eyebrow Rule.** No small all-caps tracked labels above every section heading ("ABOUT", "PROCESS", "WORK"). One deliberate label as a brand signal per page is permitted; eyebrows on every section are AI grammar. The section headings stand alone.

## 4. Elevation

This system is flat by default. Near-black surfaces do not cast shadows on near-black backgrounds; the contrast is already zero. Depth is conveyed through color commitment (pale pink sections vs. black sections), spacing, and typographic weight — not through drop shadows or blur.

No `box-shadow` on cards or panels. No glassmorphism (`backdrop-filter: blur`). No `bg-white/10 border-white/20` surfaces. When something needs to be "above" the page (navigation, a tooltip), use z-index and a solid background from the palette — not a semi-transparent frosted effect.

**The Flat-By-Default Rule.** If you are reaching for a shadow or a blur, reach for a bolder color or a stronger type weight instead. The shadow is a crutch; the palette is the answer.

## 5. Components

*To be defined on the first Scan-mode run once the new visual system is implemented.*

The following principles apply to all components before tokens are set:

- **Buttons:** No gradient fills. No rounded-pill shape. Sharp corners (0–4px radius maximum) or a deliberate choice in either direction — no "rounded-lg by default." Primary CTA uses the pale pink background with black text, or the inverse (black bg with pale pink text + pale pink border). The button should look like it was designed, not defaulted.
- **Cards / containers:** No glassmorphism. No semi-transparent backgrounds. On a black base, sections are differentiated by their background — black section, pale pink section — not by frosted card overlays floating above a shared background.
- **Navigation:** Fixed, minimal, high-contrast. Name on the left in display weight. Links on the right in body weight. Active state via pale pink color shift, not underline or background fill.

## 6. Do's and Don'ts

### Do:
- **Do** use pale pink at display scale — on hero headlines, on a full section background, on a large CTA. Its power is in its scale, not its frequency. If it's small, it's not earning its place.
- **Do** let white space carry the rhythm. Sections breathe. No padding-packing to fit more above the fold.
- **Do** use weight contrast to create hierarchy. A 900-weight display headline next to a 400-weight body paragraph IS the design.
- **Do** make scroll-triggered entrances purposeful — one entrance per section, matched to what the section reveals. Fade up is earned; it is not a default applied to every element.
- **Do** apply `text-wrap: balance` on display and headline elements; `text-wrap: pretty` on body paragraphs. No orphaned words on their own line.
- **Do** hit WCAG 2.1 AA on every text/background combination. Pale pink text on black must meet 4.5:1; check it. Muted white body text is the failure risk — bump it toward white before it goes muted.

### Don't:
- **Don't** use gradient text (`background-clip: text`). On any heading. Ever. This is a hard ban, present on every heading in the current site, and it's the first thing that reads as vibe-coded slop.
- **Don't** use glassmorphism — `backdrop-blur`, `bg-white/10`, `border-white/20` — as a default card or container surface. The current site does this on every section. Replace with solid black or solid pale pink.
- **Don't** use animated background blobs, floating gradient orbs, or any autonomous looping animation. Nothing moves unless the user scrolled or interacted.
- **Don't** use teal, cyan, or blue as accent colors. The anti-reference is the current site. If you reach for teal, you have reverted to the generic dark SaaS portfolio.
- **Don't** add a small all-caps tracked eyebrow above every section heading. The current Meno page already does this ("CASE STUDY" above the heading). One per page, earned by the context. Not a scaffold.
- **Don't** use `transition-all`. Specify the properties: `transition: opacity 0.3s ease-out, transform 0.3s ease-out`. Broad transitions cause paint-thrash.
- **Don't** scatter the pale pink accent at small sizes (icons, bullets, inline highlights). If it appears small, it reads as the old teal-accent pattern in a new hue. Scale is the point.
- **Don't** design a layout that looks like it was generated without an editorial eye — no same-sized card grids, no hero-metric template (big number / small label), no identical card repetition. Every layout decision should be defensible.
