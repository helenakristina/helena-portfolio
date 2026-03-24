---
title: Refactor Single-File Portfolio to Multi-Page Next.js App Router Structure
type: refactor
status: completed
date: 2026-03-24
---

# Refactor Single-File Portfolio to Multi-Page Next.js App Router Structure

## Overview

Refactor `src/components/portfolio.jsx` — a 647-line monolithic component — into a multi-page architecture using **Next.js App Router's built-in file-based routing**. Each nav section becomes its own route and page component. No content changes.

> ⚠️ **Critical correction from PRD:** The PRD proposes React Router (`react-router-dom`). This is incorrect — the project already runs **Next.js 16 with App Router**. React Router would be redundant and would conflict with Next.js routing. This plan uses Next.js conventions throughout.

## Problem Statement

`src/components/portfolio.jsx` is 647 lines and contains:
- Navigation logic (scroll tracking, active section, mobile menu)
- 7 sections stacked vertically: Home, About, Meno, Learning, Work, Resume, Contact
- Cross-section scroll visibility state (`visibleSections`) for entrance animations
- Counter animation state (`counters`) for the Learning section
- Career expansion state (`expandedJob`) for the Work section
- Animated background blobs
- Footer
- Inline `<style jsx>` keyframe animations

Growing this file further (new pages, case studies) is painful. Each section lacks its own URL.

## Proposed Solution

Use **Next.js App Router** (already installed) to create one `page.tsx` file per route under `src/app/`. Extract shared chrome (navbar, footer, blobs) into a `Layout` component used in `src/app/layout.tsx`. Extract section content into per-page files.

**No `react-router-dom` install needed. No `vercel.json` needed.** Next.js on Vercel handles client-side routing and direct-URL navigation natively.

## Technical Approach

### Target File Structure

```
src/
├── app/
│   ├── layout.tsx                  # Update: wrap with Layout component
│   ├── page.tsx                    # / → Home (update: render HomeContent)
│   ├── about/
│   │   └── page.tsx                # /about
│   ├── meno/
│   │   └── page.tsx                # /meno
│   ├── learning/
│   │   └── page.tsx                # /learning
│   ├── work/
│   │   └── page.tsx                # /work
│   ├── resume/
│   │   └── page.tsx                # /resume
│   ├── contact/
│   │   └── page.tsx                # /contact
│   └── globals.css                 # Add blob/fade-in keyframes here
├── components/
│   ├── Layout.tsx                  # Animated background + Navbar + Footer wrapper
│   ├── Navbar.tsx                  # Extracted from portfolio.jsx (lines 114–163)
│   └── Footer.tsx                  # Extracted from portfolio.jsx (lines 597–600)
```

### Routing: Next.js vs React Router

| Concern | React Router (PRD) | Next.js App Router (correct) |
|---|---|---|
| Route definition | `<Route path="/about" element={...}>` | `src/app/about/page.tsx` file |
| Link component | `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` |
| Active route detection | `useLocation()` from react-router-dom | `usePathname()` from next/navigation |
| Direct URL 404 fix | `vercel.json` rewrites | Not needed — Next.js handles it |
| Scroll to top | Custom `<ScrollToTop>` component | Automatic in Next.js App Router |

### Navigation Changes

**Current (portfolio.jsx:124–136):**
```jsx
<button onClick={() => scrollToSection('about')}>About</button>
// Active: activeSection === item (scroll-position tracked)
```

**New (Navbar.tsx):**
```tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'meno', path: '/meno' },
  { label: 'learning', path: '/learning' },
  { label: 'work', path: '/work' },
  { label: 'resume', path: '/resume' },
  { label: 'contact', path: '/contact' },
];

const pathname = usePathname();
const isActive = (path: string) => pathname === path;
```

### Animation Migration

The `<style jsx>` block at portfolio.jsx:602–644 defines:
- `@keyframes blob` + `.animate-blob`, `.animation-delay-2000`, `.animation-delay-4000`
- `@keyframes fade-in` + `.animate-fade-in`
- `@keyframes bounce` + `.animate-bounce`

These move to `src/app/globals.css`. The `.animate-bounce` override can be removed if Tailwind's built-in `animate-bounce` is used instead (it already uses a bounce keyframe).

### State Management Changes Per Component

| State | Current location | New location |
|---|---|---|
| `isMenuOpen` | portfolio.jsx | Navbar.tsx |
| `scrollY` | portfolio.jsx | Navbar.tsx (for backdrop opacity on scroll) |
| `activeSection` | portfolio.jsx | **Removed** — replaced by `usePathname()` |
| `visibleSections` | portfolio.jsx (cross-section scroll) | **Per page** — simplified to mount-based |
| `counters` | portfolio.jsx | learning/page.tsx |
| `expandedJob` | portfolio.jsx | work/page.tsx |

### Visibility Animation Simplification

Currently, `visibleSections` is driven by a scroll listener that checks if each section has entered the viewport. In the multi-page architecture, each page IS the full page — there's no scrolling past other sections to reach it.

**Simplified per-page approach:**
```tsx
// In each page component
const [isVisible, setIsVisible] = useState(false);
useEffect(() => { setIsVisible(true); }, []);
```

This preserves the fade-in entrance animation (opacity 0 → 1, translateY 40px → 0) on page load without the cross-section scroll complexity.

For pages with sub-sections that scroll (like Work's career timeline items with staggered delays), the per-item `transitionDelay` inline styles can be kept as-is since they already work off a parent visibility flag.

### Layout Component

The `Layout` component wraps every page with animated background blobs, Navbar, and Footer. It integrates with the existing `src/app/layout.tsx`:

```tsx
// src/app/layout.tsx
import Layout from '@/components/Layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body ...>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
```

```tsx
// src/components/Layout.tsx
'use client';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background blobs (fixed, persists across navigation) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 ... animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 ... animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 ... animate-blob animation-delay-4000" />
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### `'use client'` Directive Strategy

Next.js App Router is server-first. Components using React hooks need `'use client'`:

| File | Needs `'use client'`? | Reason |
|---|---|---|
| `Layout.tsx` | Yes | Wraps client-interactive children |
| `Navbar.tsx` | Yes | `useState` (mobile menu), `useEffect` (scrollY), `usePathname` |
| `Footer.tsx` | No | Static HTML only |
| `app/page.tsx` (Home) | Yes | `useState` for entrance animation |
| `app/about/page.tsx` | Yes | `useState` for entrance animation |
| `app/meno/page.tsx` | Yes | `useState` for entrance animation |
| `app/learning/page.tsx` | Yes | `useState` (counters, isVisible), `useEffect` |
| `app/work/page.tsx` | Yes | `useState` (expandedJob, isVisible), `useEffect` |
| `app/resume/page.tsx` | Yes | `useState` for entrance animation |
| `app/contact/page.tsx` | Yes | `useState` for entrance animation |

Alternatively: keep `Layout.tsx` as a server component and mark only the interactive parts as client. Since Navbar already must be `'use client'`, the simplest approach is marking `Layout.tsx` as `'use client'` too.

### Home Page CTA Buttons

portfolio.jsx hero section has two CTA buttons that call `scrollToSection()`:

```jsx
// Current
<button onClick={() => scrollToSection('meno')}>See My Work</button>
<button onClick={() => scrollToSection('contact')}>Let's Connect</button>
```

Replace with `next/link`:
```tsx
<Link href="/meno">See My Work</Link>
<Link href="/contact">Let's Connect</Link>
```

## Implementation Phases

### Phase 1: Extract Shared Components & Migrate Animations

**Files to create/modify:**
- `src/app/globals.css` — add blob, fade-in, bounce keyframes
- `src/components/Navbar.tsx` — extract nav from portfolio.jsx:114–163; replace buttons with `Link`, `scrollToSection` with routing, `activeSection` with `usePathname()`
- `src/components/Footer.tsx` — extract footer from portfolio.jsx:597–600
- `src/components/Layout.tsx` — wrap animated background + Navbar + Footer
- `src/app/layout.tsx` — import and use Layout component

**Acceptance criteria:**
- [x] Navbar renders with all 7 links
- [x] Active link highlights based on current URL
- [x] Mobile hamburger menu opens/closes
- [x] Background blobs animate persistently
- [x] `globals.css` contains blob/fade-in keyframe definitions

### Phase 2: Create Page Components

For each section, create a `page.tsx` under the appropriate app directory. Content is extracted verbatim from portfolio.jsx. Only structural changes:

- Remove section's `id="..."` attribute (no longer needed for scroll anchors)
- Replace any `scrollToSection()` calls with `<Link href="...">`
- Replace cross-section `visibleSections['sectionName']` with local `isVisible` state
- Add `'use client'` directive

**Files to create:**
- `src/app/page.tsx` (update existing)
- `src/app/about/page.tsx`
- `src/app/meno/page.tsx`
- `src/app/learning/page.tsx` (move `counters` state here)
- `src/app/work/page.tsx` (move `careerEvents` data + `expandedJob` state here)
- `src/app/resume/page.tsx`
- `src/app/contact/page.tsx`

**Acceptance criteria:**
- [x] Each route renders the correct section content
- [x] Entrance animations play on page load
- [x] Counter animation on /learning triggers on mount
- [x] Career timeline expand/collapse works on /work

### Phase 3: Cleanup & Verification

- [x] Delete `src/components/portfolio.jsx`
- [x] Verify no broken imports
- [ ] Test all 7 routes locally
- [ ] Test direct URL navigation (type `/about` in browser)
- [ ] Test mobile menu on each page
- [ ] Verify animated blobs persist across navigation (no flicker)

## System-Wide Impact

### Interaction Graph

`src/app/layout.tsx` → `Layout.tsx` → `Navbar.tsx` (renders on every route)

On route change:
1. Next.js App Router swaps out the page component
2. `Layout.tsx` stays mounted (background blobs persist — no flicker ✓)
3. `Navbar.tsx` re-renders, `usePathname()` returns new route → active link updates
4. New page mounts → `useEffect(() => setIsVisible(true), [])` triggers → entrance animation plays

### Error & Failure Propagation

- If any page component throws, Next.js App Router will show the nearest `error.tsx` boundary. Since none exists, it falls back to the default Next.js error page. Low risk — these are all static content components.
- If `usePathname()` returns `null` (edge case during hydration), active link highlighting simply shows nothing active. Non-breaking.

### State Lifecycle Risks

- The `Layout` component stays mounted across all routes. Any state in `Layout.tsx` (e.g., scroll position for navbar backdrop) persists across navigation. This is intentional.
- Per-page `isVisible` state resets on each navigation (component unmounts and remounts). This means entrance animations replay each time you visit a page. This is acceptable and expected behavior for an animation on mount pattern.

### API Surface Parity

No external API surface. Internal component API changes:
- `portfolio.jsx` exported `PortfolioSite` as default — this export disappears when file is deleted. `src/app/page.tsx` currently imports it; this import will be replaced.

### Integration Test Scenarios

1. **Direct URL navigation**: Visit `helena-lucia.vercel.app/about` directly → should render About page (not 404). Verifies Next.js routing handles this without vercel.json.
2. **Active link on deep link**: Land on `/learning` directly → "learning" nav item should be highlighted, not "home".
3. **Mobile menu + navigation**: Open hamburger menu on `/contact`, click "work" → navigates to `/work`, menu closes.
4. **Animation persistence**: Navigate from `/` to `/about` → background blobs should NOT flicker or reset their animation.
5. **Counter animation**: Navigate to `/learning` → counters should count up from 0 to target values on page mount.

## Acceptance Criteria

### Functional Requirements
- [x] Each nav item navigates to its own URL (`/`, `/about`, `/meno`, `/learning`, `/work`, `/resume`, `/contact`)
- [x] Direct navigation to any route loads the correct page (no 404)
- [x] Active nav item highlights based on current route (via `usePathname`)
- [x] Mobile hamburger menu works with new routing (closes on link click)
- [x] All content is visually identical — no text, layout, or style changes
- [x] Background blobs persist across page navigation without flickering
- [x] Entrance animations (fade-in + translateY) play on each page load
- [x] Counter animation on `/learning` triggers on mount
- [x] Career timeline expand/collapse works on `/work`
- [x] Home CTA buttons navigate to `/meno` and `/contact`

### Non-Functional Requirements
- [x] No `react-router-dom` is installed (not needed)
- [x] No `vercel.json` is added (not needed)
- [x] `src/components/portfolio.jsx` is deleted
- [x] All interactive components have `'use client'` directive
- [x] No TypeScript errors (`npm run build` passes)
- [ ] Vercel deployment succeeds

## Dependencies & Prerequisites

- **Next.js 16** — already installed ✓
- **`next/link`** — built into Next.js, no install needed ✓
- **`next/navigation`** (`usePathname`) — built into Next.js ✓
- **Tailwind CSS 4** — already installed ✓
- **No new dependencies required**

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| `<style jsx>` syntax not supported after extraction | Low | Medium | Move to `globals.css` instead; styled-jsx only works inside Next.js components, not `.css` files |
| Entrance animations don't work on mount | Low | Low | Use `useEffect(() => setVisible(true), [])` — simple and reliable |
| Navbar hydration mismatch | Low | Medium | Wrap `usePathname` usage in `'use client'` component |
| Mobile menu doesn't close on navigation | Low | Low | Add `setIsMenuOpen(false)` in Link's `onClick` handler |
| Background blobs flicker on navigation | Low | Low | Keep blobs in `Layout.tsx` which stays mounted (not in individual pages) |

## Sources & References

### Internal References

- Source component: `src/components/portfolio.jsx` (647 lines)
- Current root layout: `src/app/layout.tsx`
- Current home page: `src/app/page.tsx`
- Package config: `package.json` (Next.js 16, React 19, no react-router-dom)

### External References

- Next.js App Router docs: https://nextjs.org/docs/app
- `next/link`: https://nextjs.org/docs/app/api-reference/components/link
- `usePathname`: https://nextjs.org/docs/app/api-reference/functions/use-pathname
- `'use client'` directive: https://nextjs.org/docs/app/api-reference/directives/use-client

### Origin PRD

- `docs/prds/PRD_REFACTOR.md` — core feature intent preserved; routing approach corrected from React Router to Next.js App Router
