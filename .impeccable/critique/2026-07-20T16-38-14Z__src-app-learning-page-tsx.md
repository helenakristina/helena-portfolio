---
target: learning
total_score: 36
p0_count: 1
p1_count: 1
p2_count: 2
p3_count: 1
timestamp: 2026-07-20T16-38-14Z
slug: src-app-learning-page-tsx
---
Method: dual-agent

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | animate-fade-in; no dynamic states needed |
| 2 | Match System / Real World | 3/4 | Domain-appropriate; no jargon mismatches |
| 3 | User Control and Freedom | 3/4 | External links open new tab; standard nav escape |
| 4 | Consistency and Standards | 2/4 | Three different metadata patterns; h2 undersized |
| 5 | Error Prevention | 4/4 | No forms, no risk surface |
| 6 | Recognition Rather Than Recall | 2/4 | 18 courses stated, 7 listed, no explanation |
| 7 | Flexibility and Efficiency | 2/4 | No anchor links; reference doc with no in-page nav |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean but Focus Areas chips repeat coursework info |
| 9 | Error Recovery | 4/4 | N/A |
| 10 | Help and Documentation | 1/4 | No context on 18 vs 7 gap; no Credly explanation |
| Total | | 27/40 | Acceptable |

## Anti-Patterns Verdict

LLM: FAIL. Assembled, not authored. Nav label as h1. Four taxonomic sections. Focus Areas chips are canonical AI-scaffold skills section. Zero prose. Zero Helena voice. One exception: Credly badge block follows design system correctly and feels earned. Detector: CLEAN. Exit 0. One confirmed flag: bare arrow at line 40 in "Verify on Credly" link not wrapped in aria-hidden span. Four en-dashes (not banned).

## What's Working

1. Credly badge block: 96px image anchor, hover transition, micro-CTA — follows system correctly
2. Section dividers: border-t border-border-subtle pt-12 applied consistently
3. Heading hierarchy valid: h1 → four h2s, no skipped levels

## Priority Issues

**[P0] "18 courses" gap is a credibility bug**
Subtitle claims 18 courses; only 7 render. No "selected" label, no collapsed state. Damages trust — signals draft state or inflated count.
Fix: (a) show all 18, (b) change to "Selected courses", or (c) drop the count.

**[P1] No voice, no narrative arc**
Zero prose on the page. h1 is a nav label. Page closes with floating chips. No argument for why this cluster of learning, no conviction, no angle. Every other page has Helena's voice; this page has taxonomy.
Fix: 2–3 sentence intro under h1 arguing for the learning choices. Closing sentence or CTA.

**[P2] "Learning" h1 is a dead heading**
Same text as the nav link. Tells scanner, screen reader, and search engine nothing new.
Fix: Reframe to carry intent — "What I've Studied" or "I wanted to understand the architecture, not just use the tools."

**[P2] Focus Areas chips are resume padding**
Six pills at closing position that repeat information from the three course sections above. Chip elements are span-in-div, not a semantic list — no aria-label, no list count announced.
Fix: Cut entirely, or replace with one synthesis sentence. If kept, make ul/li with aria-label="Focus areas".

**[P3] No closing CTA**
Page ends. No link to contact, work, or process. Every other page closes with an invitation.
Fix: One line — "These credentials inform how I work. See my process →"

## Persona Red Flags

Jordan (hiring manager): gets "she has cert and took courses" — no angle, no depth, no next step. The 18 vs 7 gap may trigger distrust.
Casey (mobile): functional, no overflow, but visually monotonous — four sections of lists with no prose or visual variation.
Sam (screen reader): bare arrow at line 40; Focus Areas has no list semantics; section lacks aria-labelledby.

## Minor Observations

- h2s at text-lg feel undersized as primary section breaks; text-2xl would read with more structural authority
- mb-8 below subtitle loosens connection between label and list content
- Three inconsistent metadata patterns across parallel sections
- Outer section lacks aria-labelledby pointing to h1

## Score

| Category | Max | Score |
|---|---|---|
| AI Slop Test / Voice Authenticity | 20 | 7 |
| Narrative Arc and Structure | 20 | 6 |
| Copy Quality and Persona Fit | 20 | 4 |
| Visual Hierarchy and CTA Logic | 15 | 6.75 |
| Nielsen Heuristics (normalized) | 15 | 10.1 |
| Cognitive Load and Skim Path | 10 | 2.5 |
| Total | 100 | 36 |
