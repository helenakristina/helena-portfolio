---
status: pending
priority: p2
issue_id: "005"
tags: [code-review, security]
---

# No Security Headers Configured in `next.config.ts`

## Problem Statement

`next.config.ts` contains no HTTP security headers. The site has no Content Security Policy, no clickjacking protection (`X-Frame-Options`), and no content-type sniffing prevention. While the attack surface of a static portfolio is small, these headers are low-effort and provide meaningful defense-in-depth — particularly clickjacking protection for the resume PDF download link.

## Findings

**File:** `next.config.ts` (currently empty / default config)

Missing headers:
- **`Content-Security-Policy`** — No restriction on script sources. The site loads Google Fonts via `next/font/google` (`src/app/layout.tsx:6–13`), which requires `fonts.googleapis.com` and `fonts.gstatic.com` to be explicitly permitted.
- **`X-Frame-Options: DENY`** — Without this, the portfolio can be embedded in an `<iframe>` on an attacker-controlled page (clickjacking). An attacker could overlay the site over deceptive UI to trick a visitor into clicking the resume PDF download.
- **`X-Content-Type-Options: nosniff`** — Prevents MIME-type sniffing on the `/helena-lucia-resume.pdf` response.
- **`Referrer-Policy`** — Without it, the full URL is sent as a `Referer` header on outbound links (LinkedIn, GitHub).
- **`Permissions-Policy`** — No camera/microphone/geolocation restrictions declared.

Confirmed by: Security reviewer (Finding 2).

## Proposed Solutions

### Option A — Add `headers()` to `next.config.ts` (recommended, effort: Small)

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",  // Next.js requires unsafe-inline
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "font-src 'self' fonts.gstatic.com",
              "img-src 'self' data:",
              "connect-src 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Pros:** Standard Next.js pattern, well-documented. Covers all key security headers. Can be tested with `npm run build && npm start`.
**Cons:** `unsafe-inline` in CSP is required for Next.js inline scripts (it injects hydration scripts inline). This is a known Next.js constraint.
**Effort:** Small | **Risk:** Low (test in staging before deploying — CSP misconfigurations can break font loading)

## Recommended Action

_[ Option A — add security headers to next.config.ts. Test that Google Fonts still load after adding the CSP. ]_

## Technical Details

- **File to modify:** `next.config.ts`
- **Note:** Next.js App Router requires `'unsafe-inline'` in `script-src` for hydration scripts. This is unavoidable without a nonce-based CSP (much more complex).
- **Test:** After adding, run `npm run build && npm start`, visit the site, open DevTools Network tab, confirm Fonts load and no CSP violations in console.

## Acceptance Criteria

- [ ] `next.config.ts` exports a config with `headers()` function
- [ ] `X-Frame-Options: DENY` present on all routes
- [ ] `X-Content-Type-Options: nosniff` present
- [ ] `Referrer-Policy` present
- [ ] `Content-Security-Policy` present (with `font-src` allowing Google Fonts)
- [ ] Google Fonts still load correctly after adding CSP
- [ ] No CSP violations in browser console
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by Security reviewer (Finding 2)
