---
target: meno
slug: src-app-meno-page-tsx
total_score: 69
prior_score: 29
delta: +40
p0_count: 0
p1_count: 2
p2_count: 2
p3_count: 4
timestamp: 2026-07-19T20-00-00Z
detector: clean
---

# Critique: Meno Page (`src/app/meno/page.tsx`) — Second pass

**Score: 69/100** (+40 from prior 29/40 Nielsen baseline) — Voice is exceptional and the page now has a clear entry point and close. The gap between 69 and 85 is almost entirely information hierarchy: this page treats every sentence as equally important, which means nothing is.

---

## Detector

Clean. Exit 0. Zero anti-pattern hits.

---

## Prior Issue Status

- **P0 — No entry point for cold visitors:** RESOLVED. H1 "Meno" is now followed by a crisp lede (provider directory, appointment prep, RAG-powered clinical Q&A) and a live app CTA. Cold reader has context within 5 seconds.
- **P1 — No closing CTA:** RESOLVED. Two CTAs close the page — "Get in touch →" (primary fill) and "See the work →" (ghost). Well-placed, strong exit.
- **P1 — Roadmap grid-cols-4 / stats grid-cols-3 (mobile failure):** RESOLVED. Both blocks removed. Tech stack is now `grid-cols-1 sm:grid-cols-2` — confirmed clean at 375px by browser.
- **P2 — No skim layer:** PERSISTS. Every section is uniform-weight running prose. No pull-quotes, no bolded lead sentences, no numbered lists. An expert scanner gets nothing.
- **P2 — Centered prose in closing:** RESOLVED. No `text-center` on the closing section.
- **Minor — `rounded-xl` on images:** RESOLVED. All 4 screenshots use `border border-border-subtle w-full h-auto`.
- **Minor — SVG icons without aria-hidden:** RESOLVED. No SVG icons in this component.
- **Minor — "(PREPARED!)" tonal inconsistency:** RESOLVED. Now `— prepared —` inline.

---

## Browser Evidence

**Desktop:** Clean single-column layout within `max-w-3xl`. Typography legible throughout. All 4 screenshots render within the content column with subtle borders. Closing section: two CTAs side by side, clear visual differentiation between filled "Get in touch" and ghost "See the work."

**`text-[var(--bg)]` on 3 CTAs:** Resolves to near-black `lab(0.112911 0 0)` text on pale pink — high contrast, readable. Fragile because if `--bg` changes, the text becomes invisible against the pale-pink button. Functionally correct today; technically risky.

**Ghost button `border-white/25`:** Confirmed at 375 mobile and desktop. Visible but clearly lighter than home page's `border-white/50`. The weight asymmetry between the two closing CTAs is pronounced — the ghost button reads as an afterthought at 25% opacity.

**Mobile (375px):** Clean. Tech stack collapses to single column correctly. All 4 images render at 343px wide, no overflow. Closing CTAs fit side-by-side at 375px (no wrapping). Prior responsive failures are gone.

---

## Nielsen Heuristics

| # | Heuristic | Score |
|---|-----------|-------|
| 1 | Visibility of System Status | 3/4 — Live app link visible; no breadcrumb or section context on long scroll |
| 2 | Match System / Real World | 4/4 — Domain language precise without jargon overdose |
| 3 | User Control and Freedom | 2/4 — No anchor links, no back-to-top, no section skip for ~1800 words |
| 4 | Consistency and Standards | 3/4 — CTA pattern consistent; `(First person.)` parenthetical is a register break |
| 5 | Error Prevention | 2/4 — "Ask Meno" introduced without prior context; "10,000+ documents" unverified |
| 6 | Recognition Rather Than Recall | 3/4 — 4 screenshots excellent; Ask Meno named before shown |
| 7 | Flexibility and Efficiency | 1/4 — No skim layer; tech stack is the only scannable element in 9 sections |
| 8 | Aesthetic and Minimalist Design | 3/4 — Clean, no banned patterns; closing `text-white` vs preceding `text-ink-muted` is unintentional-looking |
| 9 | Error Recovery | 2/4 — Vercel preview URL may cold-start; no login warning |
| 10 | Help and Documentation | 2/4 — One footnote for multiple clinical claims; roadmap vs. shipped state ambiguous |

**Raw total: 25/40**

---

## AI Slop Test — PASS

Sentence rhythms uneven in the way human writers produce: "It worked. I left with a plan." / "She seemed a little irked when I found one myself." Clinical specificity is real: "micronized progesterone," "NAMS-certified," "hnsw vector index," "five-layer prompt system," "Pydantic models." These are not AI hallmarks.

One flag: "The dots exist. Meno connects them." at the close of "The Mental Health Dimension" — the most LLM-ish sentence on the page. Does not change the verdict. PASS.

---

## Narrative Arc

**What works:** Structure earns its length. Personal → systemic → solution → depth → technical → vision → meaning. The pivot from "this happened to me" to "systemic failure" to "so I built the system" is clean and credible. "The Insight" is the emotional hinge and it delivers: three sentences and you understand both the problem and the product thesis.

**What doesn't:**

"The Mental Health Dimension" arrives with no structural signal that it's a different dimension from the preceding feature walkthrough. Same h2 weight, same muted prose block. The claim "Meno is one of the few tools that takes the mental health dimension of menopause seriously" is the most differentiating sentence on the page — it should feel like a revelation, not paragraph 12 of the same essay.

"Where It's Going" is written in present-tense narrative prose but describes entirely unbuilt features. "The next juncture is mobile" and "From there, predictive analytics" read as current plans indistinguishable from current features. A technical reader cross-referencing the live app will find no Apple Watch integration. The credibility gap is real.

---

## What's Working

**1. The opening story.** "She suggested lube" and "She seemed a little irked when I found one myself." Specific, droll, devastating. Two lines that earn more credibility with a hiring manager who has no personal stake in the subject than any credential ever could.

**2. Screenshots integrated correctly.** Each image follows the prose that set it up, has meaningful alt text, and is captioned with a single line re-stating value rather than re-describing the image. The pattern is consistent across all four.

**3. Tech stack table.** Clean two-column grid, accent on labels not values, no icon clutter. "OpenAI API → Claude API (production)" is a credible engineering decision made visible, not a marketing claim.

---

## Priority Issues

**[P1] "Ask Meno" appears without introduction**
First reference to "Ask Meno" is 1,600+ words into the page in "The Mental Health Dimension," with no screenshot and no prior setup. The reader has seen four features demonstrated with UI — then a fifth is named in prose only. "The RAG pipeline is the core of Ask Meno" in "How It's Built" lands without context. Ask Meno is likely the most technically impressive feature on the page; it is the least visible.

Fix: Add one screenshot of an Ask Meno Q&A response in "The Mental Health Dimension" section, or briefly introduce the feature earlier in "What Meno Does" before the appointment prep walkthrough.

**[P1] "Where It's Going" is indistinguishable from current state**
Present-tense prose for entirely unbuilt features. No temporal signal separating roadmap from shipped product. A technical reader will visit the live app and find no Apple Watch integration, no predictive analytics, no provider dashboard. That discrepancy damages credibility.

Fix: One explicit statement opening the section — something as direct as "None of this is built yet. Here is where it goes next." The prose is confident enough to carry that honesty without weakening the case.

**[P2] No skim layer**
~1800 words of prose, 9 sections, one scannable element (tech stack table). A hiring manager with 90 seconds has no shortcut to signal. No bolded lead sentences, no pull-quotes, no numbered lists for the multi-step feature walkthrough.

Fix: At minimum — bold the opening sentence of "The Problem Is Personal" and "The Insight." Consider converting "You walk in — prepared — with two documents..." into a brief callout or inset block. The appointment prep output is the product's value proposition in one paragraph; it should be scannable.

**[P2] One footnote for multiple claims**
"Fewer than one in five OB-GYN residents" is sourced. "10,000+ curated research documents" is not. "The pattern shows up in the data" (mental health section) is not. Footnotes (plural) — one source.

Fix: Either add citations for the mental health claims or adjust language to signal synthesis rather than assertion. "10,000+ documents" should clarify scope (total in the index, not retrieved per query — very different numbers).

**[P3] Vercel preview subdomain**
`meno-hazel.vercel.app` is a deployment URL. It may cold-start. It almost certainly requires login. No warning either way.

Fix: Add a note near the CTA — "Login required, request access below" or a one-line cold-start warning. If a custom domain exists, prefer it.

**[P3] `text-[var(--bg)]` — fragile CSS variable on 3 CTAs**
All three CTA buttons ("View live app →", "How I work →", "Get in touch →") use `text-[var(--bg)]` instead of `text-black`. Currently renders correctly (near-black on pale pink). If `--bg` is ever changed, the text becomes invisible.

Fix: `text-[var(--bg)]` → `text-black` on all three instances.

**[P3] Ghost button `border-white/25` vs home page `border-white/50`**
"See the work →" in the closing uses `border-white/25`. Home page ghost button uses `border-white/50`. The Meno button is visually recessive at this opacity, especially paired directly with the filled primary CTA.

Fix: `border-white/25` → `border-white/50`.

**[P3] Bare arrows in 3 CTAs — accessibility gap**
"How I work →", "Get in touch →", and "See the work →" have bare `→` in their text content. Screen readers may announce "rightwards arrow." "View live app →" is protected by its `aria-label`. The other three are not.

Fix: Wrap arrows in `<span aria-hidden="true"> →</span>`.

---

## Persona Red Flags

**Jordan (hiring manager, 5 minutes, skimming):**
Reads h1 + lede. Clicks "View live app" — Vercel subdomain, possible cold-start, login wall. Returns. Skims h2s. Clicks on tech stack, scans fast. Looks for architecture detail and finds four dense prose paragraphs with no bolded sentences. Has to read all four to find "six structured LLM calls" and "five-layer prompt system" — the two most impressive technical facts on the page. Jordan may not stay for all four paragraphs.

**Casey (mobile, 375px):**
Responsive breakpoints correct. No broken grids. Images render correctly. Main concern: ~5,000 pixels of scroll to reach closing CTAs. No sticky CTA, no back-to-top, no section anchors. Casey may not reach the close.

**Sam (screen reader):**
`<section>` wrapper has no `aria-label`. Images use `<Image>` with descriptive alt text — good. Image/caption pairs are `<Image>` + `<p>`, not `<figure>`/`<figcaption>` — semantic gap. Three of four CTA arrows are not aria-hidden. Footnote section has no `role="note"`.

---

## Minor Observations

- Meta description says "symptom tracking" — this feature doesn't appear in the visible copy. Either the meta is stale or "symptom tracking" was cut from the page.
- `...verbatim, unchanged` uses three literal dots rather than `…` (U+2026) — minor typographic inconsistency given the care taken with curly quotes elsewhere.
- "Gen X is finally talking. Millennials are paying attention and promising to do it differently." — the only place on the page where women are segmented by generation. Small register break from the more universal "every woman" framing used throughout.
- The "How I work →" CTA sits inside "How It's Built" between the tech paragraph block and the roadmap section. It interrupts the read. It belongs at the bottom of the section.

---

## Score

| Dimension | Max | Score |
|-----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 17 |
| Narrative Arc and Structure | 20 | 14 |
| Copy Quality and Persona Fit | 20 | 16 |
| Visual Hierarchy and CTA Logic | 15 | 9 |
| Nielsen Heuristics (normalized) | 15 | 9 |
| Cognitive Load and Skim Path | 10 | 4 |
| **Total** | **100** | **69** |

The gap between 69 and 85+ is almost entirely information hierarchy. One focused pass — skim layer, Ask Meno visibility, roadmap framing — would move this 12+ points without touching the copy that's already working.
