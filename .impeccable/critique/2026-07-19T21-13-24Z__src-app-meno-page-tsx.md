---
target: meno
slug: src-app-meno-page-tsx
total_score: 75
prior_score: 69
delta: +6
p0_count: 0
p1_count: 2
p2_count: 2
p3_count: 2
timestamp: 2026-07-19T21-13-24Z
detector: clean
---
Method: dual-agent

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Static page; described flows have no UX feedback described |
| 2 | Match System / Real World | 4/4 | User-world language throughout; no jargon overdose |
| 3 | User Control and Freedom | 3/4 | Good page-level escape; hard-fail mentioned without patient recovery path |
| 4 | Consistency and Standards | 3/4 | Two equal-weight solid CTAs create mild hierarchy ambiguity |
| 5 | Error Prevention | 2/4 | Hard-fail described approvingly; patient-facing fallback absent |
| 6 | Recognition Rather Than Recall | 4/4 | Screenshots follow features, callout names outputs |
| 7 | Flexibility and Efficiency | 3/4 | Three skim anchors; What Meno Does is one long unmarked scroll |
| 8 | Aesthetic and Minimalist Design | 3/4 | "curated" duplicated; tech prose slightly verbose |
| 9 | Error Recovery | 1/4 | Hard fail named, patient recovery not described |
| 10 | Help and Documentation | 3/4 | Footnotes real; single source persists for multiple claims |
| **Total** | | **28/40** | **Good — strong foundation, structural gaps remain** |

## Anti-Patterns Verdict

**LLM assessment: PASS.** Specific medication names, precise credentials, engineering rationale. "She seemed a little irked when I found one myself" is a sentence an LLM would either overwrite or dilute. One flag: "The nervous system often knows before the conscious mind does" sits at the edge of woo — tolerable in roadmap, would not survive in Problem or Insight.

**Deterministic scan: clean.** Exit 0. No anti-patterns detected.

## Prior Issue Status

- P1 Ask Meno no visual: PERSISTS (deferred by user)
- P1 Single source for multiple claims: PERSISTS
- P2 No skim layer: RESOLVED — white punchlines, callout box, Mental Health spacing confirmed by browser
- P1 Roadmap indistinguishable from current state: RESOLVED — "None of this is built yet" disclaimer confirmed
- P3 Live app button: RESOLVED — removed; header reads clean
- P3 text-[var(--bg)] fragile: RESOLVED
- P3 Ghost button border-white/25: RESOLVED — border-white/50 confirmed clearly visible
- P3 Bare arrows: RESOLVED — aria-hidden confirmed on all three CTAs

## What's Working

1. The pivot sentence in "The Insight" — establishes credibility, locates power asymmetry, makes the product feel inevitable
2. Skim layer working — browser confirms white sentences visually distinct; three-beat summary scannable
3. Roadmap is now honest — "None of this is built yet" resets the reader before any vision claim

## Priority Issues

**[P1] Ask Meno has no screenshot** — four screenshots cover provider directory and appointment prep; Ask Meno (described as "the core") has zero. If image_4 shows Ask Meno output, update the caption to say so. → /impeccable clarify meno

**[P1] Single source for multiple independent claims** — mental health correlation data, HRV/wearable hypothesis, dismissal rate all unanchored. Now more exposed because page is otherwise tighter. Add 2-3 footnotes to mental health paragraph. → /impeccable clarify meno

**[P2] "How It's Built" paragraph order buries the lead** — Pydantic/hard-fail paragraph (strongest engineering signal) is third of four. Should be second. Process paragraph stays last. Quick reorder, no copy changes. → /impeccable polish meno

**[P2] "What Meno Does" is a long unmarked scroll** — four prose paragraphs + four screenshots + callout box with no internal sub-headings. ~12 screen heights on mobile with no navigation anchor. Sub-headings ("Finding a specialist," "Calling script," "Appointment prep," "The two documents") would fix. → /impeccable layout meno

**[P3] Meta description vocabulary mismatch** — description says "RAG-powered clinical Q&A"; page body uses "Ask Meno". One-word fix in metadata. → /impeccable clarify meno

**[P3] Mid-page "How I work →" same weight as closing CTA** — demoting to text link would resolve ambiguity about which CTA is primary. → /impeccable polish meno

## Persona Red Flags

**Jordan (hiring manager):** No "Testing" row in tech stack grid; CATCHES annotations in prose only. Single-source issue material for healthcare product judgment. Mid-page CTA may read as primary exit.

**Casey (mobile):** "What Meno Does" is ~12 screen heights on mobile with no internal landmarks.

**Sam (screen reader):** "Provider summary" / "Personal cheatsheet" in callout use `<p>` not semantic heading elements. Footnotes section has no role="note" or aria-label.

## Minor Observations

- "curated" appears twice in the first How It's Built paragraph — cut one instance
- Meta description says "symptom tracking" — phrase doesn't appear in page body
- "You don't have to go search for it" → "search for it" is cleaner
- Image captions text-center on mobile produces pyramid wrap on longer captions — text-left sm:text-center would improve
- Comma splice in closing paragraph is intentional and effective — leave it

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 17 |
| Narrative Arc and Structure | 20 | 14 |
| Copy Quality and Persona Fit | 20 | 16 |
| Visual Hierarchy and CTA Logic | 15 | 10 |
| Nielsen Heuristics (normalized) | 15 | 11 |
| Cognitive Load and Skim Path | 10 | 7 |
| **Total** | **100** | **75** |
