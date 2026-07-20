---
target: work
total_score: 68
prior_score: 19
delta: 49
p0_count: 1
p1_count: 2
p2_count: 2
p3_count: 0
detector: clean
timestamp: 2026-07-20T20-57-34Z
slug: src-app-work-page-tsx
---
Method: dual-agent

## AI Slop Verdict

**Mostly clean — with one major failure.**

The four real employer entries (Intel, Cylance, Cox Automotive, Flashpoint) are the opposite of slop: specific numbers (35B+ records, 40TB warehouse, 20+ APIs, 6+ subsidiaries), bounded date ranges, real company names. A hiring manager can verify these claims. The design system is applied consistently — no banned patterns, no decorator noise.

The "Return to Tech" entry is the strongest slop signal on the page. It reads like a cover letter closing paragraph reformatted as a career entry: "Ready to contribute AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology." This is the exact register of an AI-generated LinkedIn bio — no dates, no deliverables, no specificity. Its highlight field ("Ready to build AI solutions") signals waiting rather than doing, which undercuts everything the four real entries built. The "2025+" date format is also a design tell: every other entry has bounded ranges; a future-pointing entry breaks the timeline grammar.

**Detector: CLEAN.** No anti-patterns flagged. No banned CSS patterns in the component.

## Browser Evidence

**Desktop (1280×900):** Timeline renders correctly. Vertical line + dot markers + bordered accordion cards. ChevronDown rotates on expand (confirmed). Border lightens on hover and expanded state. CTA button (pale pink, square corners) sits correctly at bottom with appropriate spacing.

**Mobile (375×812):** No overflow. Timeline renders correctly at narrow width. One issue: the role title "Senior Engineer with LLM Expertise" wraps between "LLM" and "Expertise" in the Return to Tech entry — breaking at an awkward syllable boundary.

**Dot alignment issue:** The dot classes include `-translate-x-1/2` for centering on the vertical line, but Tailwind's CSS-var-based transform chain means computed `transform: none` — the dot is left-edge aligned with the line rather than center-aligned. Both desktop and mobile show the dot sitting slightly right of the line rather than bisecting it.

**Highlight repetition confirmed:** The Intel detail text opens with the exact same sentence as the Intel highlight field. Both visible simultaneously after expand.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Chevron rotation + border on expanded state are clear |
| 2 | Match System / Real World | 3 | Timeline metaphor strong; "Return to Tech" breaks it (no employer, future-tense) |
| 3 | User Control and Freedom | 3 | Click-to-close works; no expand-all but not needed at this scale |
| 4 | Consistency and Standards | 3 | "Return to Tech" styled identically to real jobs (pink dot, accent role text) |
| 5 | Error Prevention | 4 | No destructive actions possible; n/a |
| 6 | Recognition Rather Than Recall | 3 | Highlight preview in collapsed state is the right call; chevron is small affordance |
| 7 | Flexibility and Efficiency | 2 | 6 clicks to expand all; power reader must click through each entry linearly |
| 8 | Aesthetic and Minimalist Design | 3 | Design is restrained; copy redundancy (highlight ≈ detail) creates noise |
| 9 | Error Recovery | 4 | No error states possible; n/a |
| 10 | Help and Documentation | 2 | Chevron is the only interactivity signal; border-on-hover is subtle on dark bg |
| **Total** | | **30/40** | **Good** |

## What's Working

1. **Specific numbers in real job entries.** 35B+ records, 40TB, 20+ APIs, 6+ subsidiaries. These are verifiable claims in the exact form a hiring manager wants. They anchor credibility for everything else on the page and are the opposite of AI vagueness.

2. **Timeline structure + accordion pairing.** The vertical line, dot markers, year stamp, and bordered cards is a clean system. The collapsed state gives enough scannable information (company, role, highlight) that a fast reader gets value without expanding. The hierarchy is correct.

3. **"Learning & Growth" entry is handled with appropriate confidence.** Given a 4-year gap, this entry doesn't apologize or hide. Meno is named. Anthropic courses are named. The dot is de-emphasized (grey vs. accent pink) which signals it's not an employer entry without explaining it. This is a design choice that mostly works.

## Priority Issues

**[P0] Remove or rewrite "Return to Tech" entry**
This entry has no dates, no employer, no deliverables, and no information that belongs on a work history page. It is a cover letter closing paragraph formatted as a career entry. "Ready to build AI solutions" is the weakest line of copy on the portfolio. The "2025+" future date is a timeline grammar violation — every other entry has bounded ranges. Options: (a) remove it entirely — the sabbatical entry is a stronger close and doesn't need a follow-on; (b) replace it with something concrete and present-tense (a consulting project, current role scope, specific what-you're-building now); (c) move the sentiment to the homepage bio where that register belongs.
Fix: Delete the "Return to Tech" entry from `careerEvents.ts` and let the sabbatical close the timeline.
Suggested command: /impeccable clarify

**[P1] Accordion content doesn't earn its two-layer structure**
The highlight and detail fields are too similar in content for Intel, Cylance, and Cox Automotive. The accordion creates an implicit promise: "there's more if you expand." When "more" turns out to be the highlight written in a full sentence — in Intel's case *verbatim* — the interaction feels like friction rather than reward. Each detail field should contain information not present in the highlight: a specific technical decision, a team impact, a technology choice. Flashpoint does this correctly ("mentored engineers, contributed to security research" is not in the highlight). The others should follow.
Fix: Rewrite Intel, Cylance, and Cox detail fields to add genuinely new information beyond the highlight summary.
Suggested command: /impeccable clarify

**[P1] "Sabbatical" role title is passive; Meno is buried**
"Sabbatical" names absence. A hiring manager reads the role title before the highlight and processes "she stopped working" before reaching the content. Options: "Independent Study & Build", "Founder / Independent Engineer" (if Meno warrants), or "Career Reinvention" (less precise). Additionally, Meno being the middle item in "3 Coursera specializations, built Meno, 18 courses" is a rank-order problem — the thing Helena actually built is sandwiched between two course counts. On a page of employer entries, the original project deserves first position.
Fix: Update the `Learning & Growth` role field and reorder the highlight to lead with Meno.
Suggested command: /impeccable clarify

**[P2] Dot doesn't center on the vertical line**
The `-translate-x-1/2` class on the dot nodes is declared but not computing: Tailwind's CSS-var-based transform setup means `transform: none` in the cascade, so the dot's left edge sits on the line rather than bisecting it. The dot appears slightly to the right of the line on both desktop and mobile.
Fix: Use `style={{ transform: 'translateX(-50%)' }}` inline on the dot div, or add an explicit `translate-x-[-50%]` with a specificity override.
Suggested command: /impeccable audit

**[P2] Broken `aria-controls` reference when panel is closed**
The expand button uses `aria-controls={`job-detail-${idx}`}` pointing to the detail div ID. But the detail div is conditionally rendered (`{isExpanded && (...)}`) — when collapsed, the referenced element doesn't exist in the DOM. This is a broken ARIA relationship: `aria-controls` should always point to an existing element (use `aria-hidden` or `hidden` attribute on the panel instead of conditional mount/unmount), or omit `aria-controls` when collapsed.
Fix: Replace `{isExpanded && (...)}` with always-rendered detail div with `hidden={!isExpanded}` or `aria-hidden={!isExpanded}`.
Suggested command: /impeccable audit

## Persona Red Flags

**Jordan (hiring manager, first scan)**
- Reads Intel → Flashpoint: impressed. Specific numbers, clear progression. Time to click deeper.
- Hits "Learning & Growth": processes "4-year gap" then "Meno, Coursera" — tentatively satisfied.
- Hits "Return to Tech": reads "Ready to contribute AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology." Jordan's read: this is an AI-written closing line. The momentum from the real entries stops here. The entire page's credibility takes a small but real hit.

**Sam (screen reader / keyboard)**
- `aria-expanded` and `aria-controls` correctly implemented on the button.
- The broken `aria-controls` reference when collapsed is a real screen reader issue: some screen readers attempt to navigate to the controls target on announcement. When it doesn't exist, behavior is browser/screen-reader-specific but always degraded.
- The `button` wrapping the full card is a single large focus target — this is correct.
- 6 Tab presses to reach the Download link is expected and fine.

**Casey (mobile, 375px)**
- No overflow issues.
- "Senior Engineer with LLM Expertise" wraps between "LLM" and "Expertise" in the Return to Tech entry at 375px — awkward mid-phrase break in a title that's already aspirational rather than factual.
- Tap targets on the download button are appropriate.

## Minor Observations

- `key={event.company}` will collide if two entries share a company name. `idx` would be safer.
- `text-balance` on `<h1>Work</h1>` is unnecessary (single word). Harmless.
- "Full resume as PDF" label above the download button is accurate but inert. It states what the button does but adds no context. Remove or replace with something that earns its vertical space.
- The `animate-fade-in` on the expanded detail is consistent with the design system.
- "Learning & Growth" dot is de-emphasized (grey vs. accent pink) — good design decision that works visually.

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 14 |
| Narrative Arc and Structure | 20 | 13 |
| Copy Quality and Persona Fit | 20 | 12 |
| Visual Hierarchy and CTA Logic | 15 | 11 |
| Nielsen Heuristics (normalized) | 15 | 11 |
| Cognitive Load and Skim Path | 10 | 7 |
| **Total** | **100** | **68** |
