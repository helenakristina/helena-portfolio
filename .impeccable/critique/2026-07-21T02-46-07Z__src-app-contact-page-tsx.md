---
target: contact
total_score: 54
p0_count: 2
p1_count: 2
p2_count: 1
p3_count: 0
timestamp: 2026-07-21T02-46-07Z
slug: src-app-contact-page-tsx
---
Method: dual-agent

## AI Slop Verdict

**Mild slop. Not visual — verbal.**

The design tokens are correct, banned patterns are absent, and the sharp-corner system is consistent. The failure is entirely in the copy.

"Let's Connect" is the single most generic headline in portfolio design. It is the default LinkedIn connection request. A portfolio that opens with a mission statement about a billion women whose doctors fail them does not earn the right to end with "Let's Connect."

The body copy compounds this: "Interested in discussing LLMs, healthcare tech, sustainable engineering cultures, or just want to chat?" This is three different conversations with no hierarchy, closed with a hedge that undercuts everything before it. The final line — "Currently looking for interesting engineering problems in purposeful organizations" — uses adjective hedges that communicate preference without communicating anything a recruiter can act on.

**Detector: CLEAN.** Exit code 0. No findings.

## Browser Evidence

**Heading hierarchy:** One `<h1>` "Let's Connect." No h2 or h3. Appropriate for a single-purpose page.

**`aria-labelledby`:** The root `<section>` has no `aria-labelledby` or `aria-label`. The h1 is present but the section is unlabeled as a landmark.

**Interactive elements:**
- `<a href="mailto:helenalucia@fastmail.com">` — text says "Email Me." **Email address not visible as text, only in href.** Mail icon has no `aria-hidden`; link has no `aria-label`. Screen reader announces both "Email Me" and whatever Lucide renders for the Mail icon.
- `<a href="https://linkedin.com/in/helena-lucia">` — has `aria-label="LinkedIn (opens in new tab)"`. Correct.
- `<a href="https://github.com/helenakristina">` — has `aria-label="GitHub (opens in new tab)"`. Correct.

**Email address visibility:** `helenalucia@fastmail.com` appears **only in the `mailto:` href**. Not present as selectable text anywhere on the page.

**No form elements.** Contact is entirely link-based.

**Animation:** `animate-fade-in` on root `<section>`. Correct.

**Word count:** ~48 words total visible text. Shortest page on the site.

**Nav:** Contact is the last item in the nav routes array — present and correctly linked.

## Nielsen Heuristics

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | `mailto:` is unambiguous. No form, no spinner, no hidden state. |
| 2 | Match System / Real World | 2 | "Let's Connect" is LinkedIn language. "Purposeful organizations" is corporate jargon. Neither sounds like Helena. |
| 3 | User Control and Freedom | 4 | No traps. External links have `rel="noopener noreferrer"`. Clean. |
| 4 | Consistency and Standards | 3 | Home page CTA: "Get In Touch." Contact page button: "Email Me." Same action, different label — minor funnel friction. |
| 5 | Error Prevention | 3 | No form means no validation errors. But email address is not visible — a recruiter using a CRM must fire the `mailto:` to get the address. |
| 6 | Recognition Rather Than Recall | 2 | No availability signal, no role type, no timezone. A hiring manager must recall context from other pages to know what to write. |
| 7 | Flexibility and Efficiency | 2 | GitHub and LinkedIn presented at equal secondary weight. GitHub is a detour on a conversion page — it sends the reader away from the email action. |
| 8 | Aesthetic and Minimalist Design | 3 | Clean. No clutter. But also no tension, no hook to carry momentum from the rest of the site. |
| 9 | Help Users Recover from Errors | 4 | N/A — no form, no error states. Not applicable; not penalized. |
| 10 | Help and Documentation | 2 | No signal about what kind of email to send, what opportunity fits, or what response to expect. |
| **Total** | | **29/40** | Acceptable |

## What's Working

1. **`mailto:` CTA is direct and frictionless.** No contact form, no Calendly embed, no Zapier chain. One button, one email. This is the right choice for a portfolio. Most sites hide behind a form that eventually reaches a Gmail address — this one doesn't.

2. **Accessibility foundations on external links are solid.** `aria-label` names both the destination and "opens in new tab" on LinkedIn and GitHub. Focus ring defined globally with accent color. These required deliberate choices.

3. **Visual hierarchy is correct.** Email Me is pink (accent, solid fill), LinkedIn and GitHub are bordered secondaries. The primary action is visually distinct. The page does not bury the CTA.

## Priority Issues

**[P0] "Let's Connect" headline must be replaced**
This is the most generic headline in portfolio design — it resets to zero all the earned interest from the rest of the site. The contact page has one job: spend the momentum the work page and process page built. The headline should name the intent.
Fix: Replace with something specific to Helena's actual situation. "Ready to talk." or "Looking for the right engineering problem." or simply "Get In Touch" (consistent with the home page CTA that leads here). Anything that doesn't perform sociability at the expense of saying something.
Suggested: `/impeccable clarify`

**[P0] Email address is not visible as selectable text**
`helenalucia@fastmail.com` appears only in the `mailto:` href. A recruiter using a CRM, a hiring manager on mobile who doesn't have a configured mail client, or anyone who wants to copy the address before clicking must fire the mailto link or inspect the DOM. On some setups, a mailto with no default client does nothing. This is a conversion-blocking bug for the Taylor persona (recruiter, copy-pastes into Salesforce).
Fix: Render the email address as plain selectable text — either as a second line under the button, or replace "Email Me" with the address itself as the button label. Even a small `<p>helenalucia@fastmail.com</p>` below the button fixes this completely.
Suggested: `/impeccable clarify`

**[P1] Body copy presents three conversations with no commitment**
"LLMs, healthcare tech, sustainable engineering cultures, or just want to chat" — a menu is not a message. "Or just want to chat" undercuts everything before it. The closing line ("Currently looking for interesting engineering problems in purposeful organizations") uses two adjective hedges that communicate preference without letting a recruiter qualify the opportunity.
Fix: Pick one conversation and say it with conviction. Drop the hedge. State something concrete about availability: "I'm looking for a full-time IC or lead role in healthcare AI." A hiring manager who reads that knows immediately whether to proceed.
Suggested: `/impeccable clarify`

**[P1] GitHub on a contact page is a detour**
GitHub is a portfolio artifact. It belongs on the work page or resume. On the contact page, equal-weight secondary styling means a hiring manager may click away to read code repositories instead of emailing. GitHub's only function here is to remove the visitor from the conversion path.
Fix: Remove the GitHub button from the contact page. It's already linked in the resume PDF. If a social presence is needed, LinkedIn alone suffices here.
Suggested: `/impeccable clarify`

**[P2] Mail icon not `aria-hidden`; Email link missing `aria-label`**
LinkedIn and GitHub links correctly suppress their icons with `aria-label` on the `<a>`. The Email link has no `aria-label`, leaving the Mail icon exposed to AT alongside "Email Me." Screen readers may announce both.
Fix: Add `aria-label="Send an email to Helena Lucia"` to the email `<a>`, and `aria-hidden="true"` to the Mail icon — matching the pattern already used on LinkedIn and GitHub.
Suggested: `/impeccable audit`

## Persona Red Flags

**Jordan (hiring manager, 5s scan)**
Scans "Let's Connect" — gets nothing new. Reads the three-topic list — unsure which one is the pitch for their role. Clicks Email Me. Mail client opens. Stares at a blank compose window with no prompt for what to write. Closes it to think about it later. Never sends it. The page provided the mechanism but not the motivation. Jordan needed one more push.

**Sam (screen reader / keyboard)**
Tab order correct: h1 → paragraph → Email Me → LinkedIn → GitHub → closing text. External link `aria-label` implemented correctly on LinkedIn and GitHub. Focus ring visible. The Email Me link announces "Email Me" plus the Mail icon's accessible name (likely "Mail" from Lucide) — redundant. Section has no landmark label. Minor issues, no blockers. Cleanest a11y page on the site otherwise.

**Casey (mobile)**
Flex row collapses to column correctly. Three full-width buttons. Short page, no scroll needed. No overflow. `text-balance` and `text-pretty` applied. No issues.

**Taylor (technical recruiter, copy-pastes email into CRM)**
Cannot find the email address as text. Clicks Email Me — Outlook opens (or nothing happens if no default client is configured). Looks for the address in Outlook's To: field. Copies it from there. Or gives up and searches LinkedIn instead. The page fails this persona entirely. Rendering the email as text would fix it in one line.

---

## Score

| Category | Max | Score |
|----------|-----|-------|
| AI Slop Test / Voice Authenticity | 20 | 8 |
| Narrative Arc and Structure | 20 | 12 |
| Copy Quality and Persona Fit | 20 | 9 |
| Visual Hierarchy and CTA Logic | 15 | 10 |
| Nielsen Heuristics (normalized) | 15 | 11 |
| Cognitive Load and Skim Path | 10 | 4 |
| **Total** | **100** | **54** |
