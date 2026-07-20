---
timestamp: 2026-07-20T22-30-00Z
slug: src-app-work-page-tsx
target: work
total_score: 81
prior_score: 68
delta: 13
p0_count: 1
p1_count: 2
p2_count: 1
p3_count: 1
detector: clean
---
Method: dual-agent

## AI Slop Verdict

**Largely cleared — one holdout.**

The timeline now reads like a real person's CV. The middle entries have genuine texture: "Maryland MVA safety recalls" with its parenthetical count, "35B+ records, 40TB" at Flashpoint, explicit mentor framing at Recall Masters. These are details an AI would not invent without prompting.

One sentence undermines it: **"Traveled to Spain."** in the Learning & Growth detail. It reads like padding — something added because two sentences felt sparse. To a hiring manager, it signals the four years weren't all productive. The surrounding sentences are stronger without it.

**Detector: CLEAN.** Zero anti-pattern hits. No banned CSS patterns.

## Browser Evidence

**Accordion animation confirmed.** `job-detail-0` (Intel) expanded to `78.5px` computed grid-row height. All other panels at `0px`. `aria-hidden` states correct: open panel is `false`, all others `true`. `motion-safe:transition-[grid-template-rows]` working as expected.

**Heading hierarchy confirmed.** JS evaluation: all 6 company names resolved as `h2` elements. H1 → H2 → (no H3 usage) is clean.

**No overflow.** `scrollWidth === windowWidth === 1280` at desktop viewport.

**The 7 unnamed `aria-hidden` elements** reported by browser evaluation are the lucide SVG icons (6× ChevronDown + 1× Download) — correct behavior, not a bug.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Chevron rotates, border highlights on expand — clear. No first-glance affordance that cards are expandable |
| 2 | Match System / Real World | 4 | Timeline metaphor natural, year ranges parseable, "Learning & Growth" honest without apologizing |
| 3 | User Control and Freedom | 3 | Click-to-close works; only one card open at a time |
| 4 | Consistency and Standards | 4 | Card structure, hover, chevron behavior all consistent throughout |
| 5 | Error Prevention | 4 | n/a — no destructive actions |
| 6 | Recognition Rather Than Recall | 3 | Highlight text visible collapsed is correct; ChevronDown at 16px in accent is small enough to miss on first scan |
| 7 | Flexibility and Efficiency | 2 | No expand-all; keyboard user must tab through each entry; only one open at a time |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained throughout; dimmed dot for Learning & Growth is a smart editorial touch |
| 9 | Error Recovery | 4 | n/a |
| 10 | Help and Documentation | 3 | Download CTA well-positioned; "Full resume as PDF" label is a passive caption, not a prompt |
| **Total** | | **34/40** | |

## What's Working

1. **Accordion implementation is technically excellent.** Grid-rows transition with `motion-safe:transition-[grid-template-rows]` and `cubic-bezier(0.16,1,0.3,1)` avoids height-animation jank, degrades cleanly for reduced-motion users. The `aria-hidden` + `aria-controls` targeting always-present DOM nodes is the correct ARIA pattern.

2. **Copy differentiation is now real.** Each of the six entries says something distinct. Cox Automotive's highlight with middot separators packs three wins into one scannable line. Flashpoint's numbers (35B, 40TB) give the eye a place to land. No verbatim repetition between highlight and detail.

3. **"Learning & Growth" treatment is editorially confident.** Dimmed dot, italic role, no apology for the gap. Meno leads. Naming Anthropic courses specifically is better than claiming 18 courses without attribution.

## Priority Issues

**[P0] Remove "Traveled to Spain."**
Only sentence in the component that actively undermines the candidate. To a hiring manager reading a career timeline, it signals the four years weren't all productive. The two surrounding sentences are stronger without it.
Fix: Delete the sentence from `careerEvents.ts` Learning & Growth detail.
Suggested: /impeccable clarify

**[P1] Recall Masters tenure unexplained — hiring manager reads "gap" not "engagement"**
Month-precision year format (`May–Sep 2019`) breaks the page's year-range pattern and immediately signals "short enough to track to the month." The detail explains what was done, not the nature of the engagement. A single sentence contextualizing the 5-month span prevents the reader's brain from filling in "fired" or "quit."
Fix: Add one sentence to the Recall Masters detail field that characterizes the engagement type (contract, consulting, staff aug, etc.).
Suggested: /impeccable clarify

**[P1] `<button>` wrapping `<h2>` announces entire card as button name to screen readers**
The expand button wraps the full card div including the h2, role paragraph, highlight, and (collapsed) detail. On NVDA+Chrome, the accessible name of the button becomes the concatenated visible text of all its children. The cleaner pattern is to scope the button to the header row (company + chevron), and let the highlight and detail panel live outside the button as siblings controlled by `aria-controls`.
Fix: Restructure so only the top row (company name + chevron) is the button trigger; highlight text and detail panel are siblings outside the button.
Suggested: /impeccable audit

**[P2] Intel detail: "across the division" is vague**
The phrase lacks concrete scope. If there's a division name or a specific output (row count, index size, etc.), one replacement phrase makes this entry feel grounded rather than rounded.
Fix: Replace "across the division" with the actual division name or a concrete artifact.
Suggested: /impeccable clarify

**[P3] Download CTA label is a passive fragment**
"Full resume as PDF" above the button reads like a file caption. The button text "Download resume" already covers the action. The label is either redundant or needs to add context ("Everything above, plus education and references").
Fix: Remove the label, or rewrite to add context not already in the button.
Suggested: /impeccable polish

## Persona Red Flags

**Jordan (hiring manager, 5s scan)**
Cox Automotive's highlight is the strongest scan target — three wins, specifics, numbers. The Recall Masters entry is the cognitive bump: month-range precision signals "short" before the content signals "valuable." Address the engagement type and the bump goes away.

**Sam (screen reader / keyboard)**
Button-wraps-h2 means full card text is announced as the button's accessible name. Fix: scope the trigger to the header row only. Otherwise, focus-visible ring is correctly defined (2px solid accent, 3px offset), heading hierarchy is H1 → H2 throughout, aria-hidden/aria-controls implementation is correct.

**Casey (mobile)**
No overflow. Cards run edge-to-edge at 375px which is intentional. Tap targets are the full card height (144px+), appropriate.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 17 |
| Narrative Arc and Structure | 20 | 15 |
| Copy Quality and Persona Fit | 20 | 15 |
| Visual Hierarchy and CTA Logic | 15 | 13 |
| Nielsen Heuristics (normalized) | 15 | 13 |
| Cognitive Load and Skim Path | 10 | 8 |
| **Total** | **100** | **81** |
