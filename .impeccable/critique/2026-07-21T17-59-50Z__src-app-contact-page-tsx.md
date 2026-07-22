---
target: contact
total_score: 26
p0_count: 1
p1_count: 2
p2_count: 1
p3_count: 1
timestamp: 2026-07-21T17-59-50Z
slug: src-app-contact-page-tsx
---
Method: dual-agent (A: aa2e1d471f6fa7773 · B: a132e8eadb5b49e77)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Submitting and success states are clear; error state visually underpowered |
| 2 | Match System / Real World | 3/4 | Language natural throughout |
| 3 | User Control and Freedom | 2/4 | No form reset, no success recovery, no error guidance |
| 4 | Consistency and Standards | 3/4 | Follows form conventions cleanly |
| 5 | Error Prevention | 2/4 | HTML5 basics only; no textarea constraints visible |
| 6 | Recognition Rather Than Recall | 3/4 | Placeholders and labels work; nothing forces memorization |
| 7 | Flexibility and Efficiency | 2/4 | No autofocus; no keyboard shortcuts; no repeat path |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean and restrained; footer items loose |
| 9 | Error Recovery | 2/4 | Generic error messages; no field-level feedback; may be off-screen mobile |
| 10 | Help and Documentation | 3/4 | Response-time note good but wrong location |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

**PASS. Detector: EXIT 0, zero findings.**

Assessment A and B agree completely. No gradient text, no glassmorphism, no eyebrows, no numbered section scaffolding, no side-stripe borders. bg-white/5 on form fields is structural, not decorative. Two subtle AI-language tells: "I'll be in touch soon." (generic success copy) and the conventional footer trio ordering. Neither is a hard fail; both are worth addressing.

## Overall Impression

The page went from a P0 blocking failure (mailto on corporate machines) to a genuinely functional, accessible contact surface. The headline is the strongest design decision on the page. The form states are all covered and the accessibility groundwork is thorough. Remaining problems: the form doesn't sustain Helena's voice, the success state lands quietly where it should land memorably, and the error state looks like a note when it needs to look like an alert.

## What's Working

1. "I'm available." is genuinely good — direct, unusual, in-register.
2. Accessibility is thorough — aria-hidden, aria-label, role="status", role="alert", proper label association.
3. The success animation is the page's best moment — CheckCircle scale-in with expo easing, staggered text reveal.

## Priority Issues

**[P0] Error state is visually indistinguishable from a neutral note**
- Location: ContactForm.tsx:114-121
- Why it matters: text-white/80 on bg-white/5 with border-white/10 blends with the form. On mobile, error is below the fold. Hiring manager may not register the failure and submit again, triggering rate limiting.
- Fix: Give error treatment visual weight — border-accent/40 or border-white/30 with bg-white/8. Scroll error into view on render with useRef + scrollIntoView.
- Suggested command: /impeccable harden contact

**[P1] Response-time expectation is placed after the fold**
- Location: page.tsx:58-60
- Why it matters: "I respond within a day or two." is the most important anxiety-reducer for a cold-contact form. Placed below the LinkedIn link, it's never seen by a user who submits and leaves.
- Fix: Move above the submit button — even a small text-ink-muted text-xs line directly above the button.
- Suggested command: /impeccable clarify contact

**[P1] Success state copy doesn't sustain the page's register**
- Location: ContactForm.tsx:53-56
- Why it matters: Peak-end rule: "I'll be in touch soon." is how Jordan remembers the interaction. After "I'm available." it's a tonal let-down. Also appears verbatim across AI-generated contact forms.
- Fix: "I'll read it today." / "You'll hear from me." / "Talk soon." — any of these closes the loop on Helena's voice.
- Suggested command: /impeccable clarify contact

**[P2] No autofocus on first field**
- Location: ContactForm.tsx:71-80
- Why it matters: One unnecessary click for the primary action on the page.
- Fix: Add autoFocus to name input. If entrance animation causes scroll-jump, delay with useEffect + requestAnimationFrame.
- Suggested command: /impeccable polish contact

**[P3] No reset path from the success state**
- Location: ContactForm.tsx:46-57
- Why it matters: No way to send another message without a page reload.
- Fix: Add "Send another message" button that calls setStatus("idle").
- Suggested command: /impeccable harden contact

## Persona Red Flags

**Jordan (hiring manager)**: Submits, sees CheckCircle, leaves. Never sees response-time expectation. If submission fails, error is visually quiet — may not notice, submits again.

**Sam (screen reader/keyboard)**: No autofocus means extra Tab. Error message content is non-actionable ("Something went wrong"). select-all email has no keyboard mechanism.

**Casey (mobile/distracted)**: Error below the fold on submission failure — not seen. Response-time line three scrolls below. Leaves without knowing when to expect a reply.

## Minor Observations

- select-all on email paragraph has no hover affordance. cursor-copy or underline would signal the interaction.
- Footer trio reads as three separate items. "Or reach me directly:" label above LinkedIn would unify them.
- Center-to-left pivot between header and form not felt as deliberate.
- Page-level animate-fade-in reduced-motion handling is correct via globals.css.

## Questions to Consider

1. Should the "name" field exist? Replacing it with "Company" or "What you're building" would make the form feel purpose-built, not templated.
2. Is "within a day or two" a constraint or an aspiration? "I'll respond the same day" or "within two business days" are stronger.
3. What does the success state say about Helena as a person? One sentence that sustains the voice of "I'm available." would complete the loop the headline opened.
