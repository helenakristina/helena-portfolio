# PRD: Portfolio Refactor — Single File to Multi-Page Architecture

## Summary

Refactor helena-lucia.vercel.app from a single monolithic JSX file (one scrolling page with section anchors) into a multi-page React app using React Router. Each nav item becomes its own route and page component. No content changes in this PR — just structural refactoring to enable future content additions.

## Problem

The entire portfolio lives in one 450-line JSX file (`helena-portfolio.jsx`). All sections — Home, About, Meno, Learning, Work, Resume, Contact — are stacked vertically in a single scrolling page. Navigation uses `scrollToSection()` with anchor IDs.

This makes it difficult to:
- Add new pages (like "How I Work" or a Dry Data case study) without the file growing unmanageably
- Edit one section's content without scrolling through unrelated code
- Give each page its own URL for sharing and SEO
- Add page-specific metadata or structured content

## Proposed Solution

Convert the single-page scroll layout to a multi-page React Router app. Each current section becomes its own page component in a `pages/` directory. Shared elements (navigation, footer, layout wrapper) become reusable components.

## Architecture

### File Structure

```
src/
├── App.jsx                    # Router setup, wraps all routes in Layout
├── components/
│   ├── Layout.jsx             # Nav + Footer + children (shared wrapper)
│   ├── Navbar.jsx             # Navigation bar (extracted from current file)
│   └── Footer.jsx             # Footer (extracted from current file)
├── pages/
│   ├── Home.jsx               # Hero section (current #home)
│   ├── About.jsx              # The Journey section (current #about)
│   ├── Meno.jsx               # Meno case study (current #meno)
│   ├── Learning.jsx           # Learning & Growth (current #learning)
│   ├── Work.jsx               # Selected Work / career history (current #work)
│   ├── Resume.jsx             # Resume section (current #resume)
│   └── Contact.jsx            # Contact section (current #contact)
└── styles/
    └── animations.css         # Extracted keyframe animations (blob, fade-in, bounce)
```

### Routing

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
// ... etc

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meno" element={<Meno />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
```

### Navigation Changes

The current nav uses `scrollToSection()` with `element.scrollIntoView()`. Replace with React Router `Link` components or `useNavigate()`.

**Current:**
```jsx
<button onClick={() => scrollToSection('about')}>About</button>
```

**New:**
```jsx
<Link to="/about">About</Link>
```

The nav items stay the same: Home, About, Meno, Learning, Work, Resume, Contact.

The mobile hamburger menu behavior stays the same — it just uses Links instead of scroll buttons.

Active section highlighting changes from scroll-position tracking to route matching:

**Current:**
```jsx
const [activeSection, setActiveSection] = useState('home');
// ... scroll listener to update activeSection
```

**New:**
```jsx
import { useLocation } from 'react-router-dom';
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

### Layout Component

The Layout component wraps every page with the shared elements:

```jsx
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      {/* Animated background elements */}
      {/* ... blob divs ... */}
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### Page Components

Each page component is a direct extraction of the current section content. For example:

**Home.jsx** gets the current `<section id="home">` content — the hero heading, subheading, CTA buttons, and chevron. The CTA buttons change from `scrollToSection('meno')` to `<Link to="/meno">`.

**About.jsx** gets the current `<section id="about">` content — the Before/Now cards and the "Why this matters" callout.

**Meno.jsx** gets the current `<section id="meno">` content — Problem/Solution/Impact cards, tech stack, demo video placeholder, feature reel placeholders.

And so on for each section. The content within each page stays exactly as-is for this PR.

### Animations

Extract the `<style jsx>` block at the bottom of the current file into a separate CSS file (`styles/animations.css`) and import it in `App.jsx`. The keyframes (blob, fade-in, bounce) are used by the background blobs and hero section.

### Vercel Configuration

Since this becomes a client-side SPA with React Router, Vercel needs a rewrite rule so that direct navigation to `/about` or `/meno` doesn't 404.

Add a `vercel.json` in the project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Implementation Notes

- **React Router:** Install `react-router-dom` if not already present
- **No content changes:** Every word, every class, every style stays identical. This is a pure structural refactor.
- **No design changes:** Colors, gradients, fonts, animations — all stay the same. Design refresh is a separate PR.
- **Scroll to top on navigation:** Add a scroll-to-top effect on route changes so users don't land in the middle of a page:

```jsx
// In Layout.jsx or App.jsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
```

## Future Pages (NOT in this PR, but this structure enables them)

These are the pages we plan to add after this refactor:

- `/process` — "How I Work" page with the agentic engineering workflow diagram and methodology narrative
- `/meno` — Will be expanded into a full case study with the problem narrative, screen recording, and the "why" behind Meno
- `/dry-data` — Dry Data case study once deployed

## Acceptance Criteria

- [ ] Each nav item navigates to its own URL route
- [ ] Direct navigation to any route (e.g. typing `/about` in the browser) loads the correct page
- [ ] Mobile hamburger menu works with the new routing
- [ ] Active nav item is highlighted based on current route
- [ ] All content is visually identical to the current site — no text changes, no style changes
- [ ] Background animations (blobs) persist across page navigation
- [ ] Vercel deployment works with client-side routing (no 404s on direct navigation)
- [ ] The old single-file component is deleted

## Out of Scope

- Content changes (tagline, copy, new sections)
- Design refresh (colors, fonts, removing "AI look")
- New pages (How I Work, Dry Data)
- SEO metadata per page