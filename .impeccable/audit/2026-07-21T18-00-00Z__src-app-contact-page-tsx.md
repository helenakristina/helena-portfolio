# Audit: src/app/contact/

**Date**: 2026-07-21  
**Target**: `src/app/contact/page.tsx` + `src/app/contact/ContactForm.tsx`  
**Detector**: 0 findings

---

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Two touch-target violations (P1) |
| 2 | Performance | 4/4 | — |
| 3 | Theming | 4/4 | Minor `text-white` literal drift (P3) |
| 4 | Responsive Design | 3/4 | Touch targets echo a11y; layout is solid |
| 5 | Anti-Patterns | 4/4 | Detector 0. Manual 0. No tells. |
| **Total** | | **18/20** | **Excellent (minor polish)** |

---

## Anti-Patterns Verdict

**PASS. Does not look AI-generated.**

Detector: 0 findings. Manual scan: clean. The headline "I'm available." and success copy "You'll hear from me." both break from AI-template register. No gradient text, no glassmorphism, no eyebrows, no teal, no numbered section scaffolding, no rounded-xl cards, no hero metrics. The pale-pink accent on near-black is intentional and distinctive, not default. Voice is first-person and declarative throughout.

---

## Executive Summary

- **Audit Health Score: 18/20 — Excellent**
- Issues found: P0 0, P1 2, P2 0, P3 3
- The contact page is in very good technical shape. The form itself is the most robust element: fully labeled, ARIA-correct, server/client split clean, all animations GPU-composited, AbortController in place, CSP configured.
- The two P1 issues are touch-target failures on secondary CTAs ("Send another message" button and LinkedIn link) — both fail WCAG 2.5.5 AA minimum 44×44px.
- Three P3 polish items round out the list; none affect users in practice.

---

## Detailed Findings by Severity

### P1 Issues

**[P1] "Send another message" button — undersized touch target**
- **Location**: `ContactForm.tsx:96–102` (success state return)
- **Category**: Accessibility + Responsive
- **Impact**: Mobile users who've submitted the form and want to send another can't reliably tap this button. Measured height ≈ 18px (`text-xs` = 12px × 1.5 line-height = 18px, no padding).
- **WCAG**: SC 2.5.5 Target Size (Level AA) — minimum 44×44 CSS px
- **Recommendation**: Add `py-2 px-3` (or at minimum `py-2`) to the button. Also add `type="button"` explicitly (see P3 below).
- **Suggested command**: `/impeccable adapt contact`

---

**[P1] LinkedIn link — undersized touch target**
- **Location**: `page.tsx:46–55`
- **Category**: Accessibility + Responsive
- **Impact**: Mobile users cannot reliably tap the LinkedIn link. Measured height ≈ 21px (`text-sm` = 14px × 1.5 = 21px, no vertical padding).
- **WCAG**: SC 2.5.5 Target Size (Level AA) — minimum 44×44 CSS px
- **Recommendation**: Add `py-2 inline-flex` (already inline-flex) to the `<a>` tag. The extra padding extends the tap zone without changing the visual layout since it's already in a centered column with natural whitespace above/below.
- **Suggested command**: `/impeccable adapt contact`

---

### P3 Issues

**[P3] `focus:outline-none` suppresses global accent focus outline on form inputs**
- **Location**: `ContactForm.tsx:11` (`fieldClass` constant)
- **Category**: Accessibility
- **Impact**: Tailwind's `focus:outline-none` has higher specificity than the global `:focus-visible` rule in `globals.css:29–32`, overriding the accent outline for keyboard users. The fallback (border color shift from `border-subtle` to `border-accent/50`) does provide a visible change (~4:1 contrast between states, passes WCAG 2.2 SC 2.4.11), so this is not a blocking failure — just a missed opportunity for a sharper keyboard affordance.
- **WCAG**: SC 2.4.11 Focus Appearance (WCAG 2.2 AA) — passes via border change alone, but the intent of the global rule is not reaching these elements.
- **Recommendation**: Replace `focus:outline-none` with `focus-visible:outline-none` (removes outline only on pointer focus, preserving keyboard ring). Then add `focus-visible:ring-2 focus-visible:ring-accent/50` for an opaque-enough ring. This restores the global rule for mouse clicks while keeping a strong ring for keyboard.
- **Suggested command**: `/impeccable polish contact`

---

**[P3] Missing `type="button"` on reset button in success state**
- **Location**: `ContactForm.tsx:96`
- **Category**: Accessibility
- **Impact**: No form ancestor exists in the success state (early return replaces the `<form>`), so the missing `type` does not cause accidental submission today. But the component is a client component and the tree could change. Explicit `type="button"` is a robustness standard.
- **WCAG**: HTML spec best practice
- **Recommendation**: `<button type="button" onClick={...}>`
- **Suggested command**: `/impeccable polish contact`

---

**[P3] `text-white` and `bg-white/5` literal values instead of design tokens**
- **Location**: `ContactForm.tsx:11, 85, 170` and `page.tsx:20`
- **Category**: Theming
- **Impact**: `--ink: #ffffff` maps to `text-foreground` in the theme. `text-white` is Tailwind's literal `#ffffff` — same value today, but if the ink token ever changes (e.g. for a warm-white variant), these elements won't update. No visible impact currently since this is a dark-only site.
- **Recommendation**: `text-white` → `text-foreground`. `bg-white/5` has no token equivalent (it's a transparency affordance) — acceptable as-is.
- **Suggested command**: `/impeccable polish contact`

---

## Patterns & Systemic Issues

None. The two touch-target failures are isolated to secondary/tertiary CTAs in the footer and success state — not a systemic spacing problem. All primary interactive elements (form fields, submit button) are properly sized.

---

## Positive Findings

- **Correct server/client split**: `page.tsx` stays a server component for `export const metadata`; client interactivity is isolated to `ContactForm.tsx`. No accidental client bundling.
- **Bulletproof ARIA**: `role="alert"` on error, `role="status"` on success, `aria-label` on form, `aria-hidden="true"` on every decorative icon. Pattern is consistent and correct.
- **All form inputs properly labeled**: `<label htmlFor>` + matching `id` on every field. `autoComplete` on name + email. `maxLength` constraints present.
- **Error visibility engineered thoughtfully**: `scrollIntoView` on error mount catches below-fold cases on mobile. `border-accent/40` distinguishes error from neutral form fields without false alarm styling.
- **AbortController + cleanup**: Timeout (10s) and unmount abort are both handled. No dangling network requests.
- **All animations compositor-only**: `opacity + transform` in fade-in, `scale` property in scale-in, `rotate` for spinner. No layout-triggering transitions. `prefers-reduced-motion` handled in both CSS and inline motion-reduce utilities.
- **CSP in production shape**: `connect-src` explicitly allows `https://formspree.io`. Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) all present.
- **Contrast**: All text passes WCAG AA. `--ink-muted` (oklch 65%) on near-black (oklch 5%) ≈ 7.3:1, exceeds AAA. Submit button: near-black text on pale-pink bg ≈ 14:1. Placeholder text ≈ 6.4:1 on input surface.
- **Voice and copy**: No AI-template copy. "I'm available." / "You'll hear from me." / "I respond within a day or two." — all first-person, declarative, proportional to the context.

---

## Recommended Actions

1. **[P1] `/impeccable adapt contact`** — Fix both touch-target failures: add `py-2` to "Send another message" button and `py-2` to LinkedIn `<a>` tag
2. **[P3] `/impeccable polish contact`** — Fix focus ring (`focus:outline-none` → `focus-visible:outline-none`), add `type="button"` to reset button, swap `text-white` → `text-foreground`
