---
target: home
total_score: 83
p0_count: 0
p1_count: 1
p2_count: 2
p3_count: 2
timestamp: 2026-07-19T17-48-03Z
slug: src-app-page-tsx
---
# Critique: Home Page (`src/app/page.tsx`) — Fourth pass

**Score: 83/100** (+3 from 80) — Layout hierarchy resolved. Narrative arc holds. Meno descriptor remains the primary copy gap.

---

## Detector

**Exit code: 0. Zero findings.** Clean across all rules. `text-ink-muted` on body copy did not trigger contrast warnings.

---

## What Changed (Fourth Pass)

- ✅ **About grid asymmetry resolved**: `md:grid-cols-[3fr_2fr]` confirmed by browser — 508.8px / 339.2px = 60/40. Resolves the P1 that appeared in all three prior critiques.
- ✅ **h2 hierarchy established**: "The work" at 24px/700, "The approach" at 18px/600. Detectable in browser; subordination reads correctly.
- ✅ **Closing section weight**: `text-2xl font-bold` (24px/700) reads with authority. `pt-24 pb-28` (96px top / 112px bottom vs About's 80px/80px) gives the section more breathing room — visible in browser comparison.
- **Meno descriptor unchanged**: "RAG-powered. Clinically grounded." fragments remain.

---

## Browser Evidence

**Desktop (1280px):**
- About grid col 1 = 508.8px, col 2 = 339.2px. 48px gap. 60/40 visually perceptible.
- "The work" h2: 24px / weight 700. "The approach" h2: 18px / weight 600. Hierarchy is present; gap is modest but reads.
- Closing `<p>`: 24px / weight 700 / text-white. Identical type metrics to "The work" h2. Strong in isolation; semantically `<p>` not a heading.
- Closing padding: 96px top / 112px bottom. About: 80px/80px. Extra breathing room is visible, closing reads as a distinct final beat.
- Hero dead space: ~200–250px of empty black below CTA buttons before the About border (min-h-[90vh] + justify-center). Conspicuous.

**Mobile (390px):**
- Grid stacks correctly: "The work" at ~841px offset, "The approach" at ~1120px, Closing at ~1403px. Correct source order.
- No horizontal overflow. `body.scrollWidth === 390`.
- Closing section retains 96px/112px padding on mobile — appropriately roomier than About.

---

## Narrative Arc — Full Assessment

**Hero:** Mission quote → "I built something about it." → byline → Meno descriptor → CTAs. The open is strong. The descriptor paragraph is the trough.

**About:** "The work" delivers scope and trajectory in the larger column. "The approach" delivers rigor and judgment in the subordinate column — the 3fr/2fr split correctly signals which is credential vs. philosophy. Browser confirms the hierarchy reads.

**Closing:** "Healthcare is being rebuilt. I want to be in the room." at 24px/700 with extra padding — this lands as a thesis, not a caption. Belief ladder step 4 fulfilled with conviction.

**The arc works and is stronger.** The 60/40 split resolves the false-parity problem. The closing now asserts its own weight. The Meno descriptor remains the one interruption to an otherwise controlled arc.

---

## Anti-Patterns Verdict

**LLM Assessment:** No gradient text. No glassmorphism. No eyebrows on sections. No rounded-xl cards. The Deliberate Edge palette (near-black + pale pink) remains distinctive. The asymmetric grid now signals considered information architecture rather than template thinking. The one remaining tell: "RAG-powered. Clinically grounded." reads like AI-generated "punchy copy" — three fragments in a row from a template.

**Deterministic Scan:** Clean. Exit 0.

---

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Hover states consistent; no active nav state in source |
| 2 | Match System / Real World | 4/4 | Natural language throughout; quote-as-headline correct |
| 3 | User Control and Freedom | 3/4 | Multiple exit paths; "See Meno →" vs "Get In Touch" intent ordering ambiguous |
| 4 | Consistency and Standards | 4/4 | Arrow suffix, link style, button pattern — all consistent |
| 5 | Error Prevention | 3/4 | `text-[var(--bg)]` on button: if CSS var fails, text invisible |
| 6 | Recognition Rather Than Recall | 4/4 | Everything visible; no hidden-reveal patterns |
| 7 | Flexibility and Efficiency | 3/4 | Direct /meno and /contact paths available; no skip-nav |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean and disciplined; Meno descriptor adds friction |
| 9 | Error Recovery | 2/4 | N/A surface; structural absence |
| 10 | Help and Documentation | 2/4 | N/A; appropriate for portfolio; /work and /process opaque pre-click |
| **Total** | | **31/40** | **Good — solid foundation** |

---

## Priority Issues

### P1 — Meno descriptor fragments (carryover from v3)
"Meno: AI-powered support for women navigating perimenopause and menopause. RAG-powered. Clinically grounded." — three fragments following the page's strongest line ("I built something about it."). These read as generic feature bullets, not a differentiating claim. "RAG-powered" is true of every health AI product in 2026. The page establishes *why the problem matters* but doesn't establish *why Meno specifically is the answer*.

**Fix options:**
1. Replace with one outcome sentence: "Meno gives women the research-grounded answers their doctors don't have time to find."
2. Remove entirely — let "I built something about it." + "See Meno →" do the work. The mystery may be more compelling than the description.
3. Add a specificity anchor: "Used by 40+ women in beta" or a concrete outcome.

### P2 — "The approach" column at 40% width risks underread
The 3fr/2fr split is correct — the work earns the dominant column. But "The approach" column contains the most differentiating engineering statement on the page: "Every PR I merge, I can explain. I use AI to move faster, not to skip the judgment that makes code worth maintaining." This directly answers the skeptical hiring manager's biggest concern. A fast scanner reading in scan order (left-heavy) may deprioritize the 40% column before reaching the argument that would change their mind.

**Fix:** No structural change needed. Copy adjustment: move the philosophy statement ("Every PR I merge...") to the *first* sentence of the approach paragraph, before "Three Coursera AI specializations." Currently the column leads with the philosophy, which is correct — confirm this paragraph order doesn't drift.

### P2 — Closing statement is `<p>`, not a heading (semantic/a11y)
Browser confirmed: line 97 is `<p className="text-2xl font-bold text-white...">`. Screen reader users navigating by headings won't encounter "Healthcare is being rebuilt. I want to be in the room." as a landmark — the last heading on the page is one of the two `<h2>` elements in the About section. This is also a structural-semantic issue: the element that carries the most rhetorical weight on the page is not marked as a heading.

**Fix:** Change to `<h2>` or `<p role="heading" aria-level="2">`. The visual styling can stay the same.

### P3 — Arrow characters in link text not aria-hidden
"→" appears in: "See Meno →", "Get In Touch →", "See my work →", "See how I work →". Screen readers announce this as "right-pointing arrow." Five instances.

**Fix:** `<span aria-hidden="true"> →</span>` on each arrow.

### P3 — Hero dead space (~200px below CTA row at desktop)
Browser measured: ~200–250px of empty black between the CTA buttons and the About section border at 1280px / 900px tall viewport. The `min-h-[90vh] justify-center` creates this. It reads as a broken layout gap to a first-time visitor. The effect is intentional in design terms (creates drama and vertical space) but may read as a loading error.

**Fix options:** Remove `min-h-[90vh]` and let content height drive the section, or add `pb-32` to the inner div so the dead space becomes structured breathing room with controlled bottom padding.

---

## Persona Red Flags

**Jordan (skeptical hiring manager, 90-second scan):**
Jordan's arc has improved. The quote lands → "I built something about it." lands → Meno descriptor is the friction point (generic) → About section delivers with The work column → "Every PR I merge, I can explain" in the approach column earns a pause if Jordan reads it → Closing now lands as a thesis. The one risk: if Jordan's scan terminates at the Meno descriptor ("RAG-powered. Clinically grounded." — sounds like the other 20 portfolios this week) before reaching the About section's stronger material.

**Casey (mobile, one-handed):**
Browser-confirmed clean at 390px. No overflow. Correct stacking order. The Closing section retains the extra padding on mobile. Hero CTA buttons are in `flex-wrap gap-4` and appear stacked or side-by-side depending on label length — no evidence of overflow. One remaining concern: `min-h-[90vh]` on a short mobile viewport (667px = iPhone SE) produces 600px hero, potentially pushing both CTAs below the fold if the h1 clamp renders at 2.25rem across 5 lines.

**Sam (screen reader / keyboard-only):**
Two structural issues confirmed by browser. (1) The closing section's primary text is a `<p>` — not reachable by heading navigation. (2) Arrow characters in link text will be read aloud as "right-pointing arrow" by VoiceOver/NVDA. The About section's two `<h2>` elements at different visual weights (24px vs 18px) are semantically identical to screen readers — no way to perceive the intended subordination. Minor: `text-balance` and `text-pretty` are CSS-visual only, no a11y impact.

---

## Minor Observations

- The closing `<p>` sharing identical type metrics with "The work" `<h2>` (both 24px/700/text-white) creates a semantic inconsistency — same visual weight, different element roles. A screen reader user can't distinguish them from heading nav.
- "See my work →" and "See how I work →" differ by one word in parallel positions — a fast scanner could register these as duplicate links.
- `&ndash;` + `&middot;` in the byline is typographically correct but slightly cluttered. En-dash alone or comma would be cleaner.
- The "N" badge in browser screenshots is a Next.js dev indicator — not present in production.
- `text-[var(--bg)]` on the primary CTA button is slightly fragile — `text-black` is safer and matches design intent.

---

## Questions to Consider

1. **What if the Meno descriptor paragraph disappeared entirely?** The hero currently runs: quote → "I built something about it." → [four lines of Meno description] → CTAs. What if it was: quote → "I built something about it." → CTAs? The mystery might make "See Meno →" irresistible rather than redundant. Is the description resolving curiosity the page should be building?

2. **Does the 40% approach column get read?** "Every PR I merge, I can explain" is the single sentence most likely to change a skeptical hiring manager's mind. Is there any way to ensure it gets read rather than scanned past? What if it was in the hero instead of the About column?

3. **Is the hero dead space a bug or a feature?** The ~200px gap below the CTAs is conspicuous at desktop. If it's intentional pacing, add `pb-32` to make it feel structured. If it's unintentional, reduce or remove `min-h-[90vh]`.
