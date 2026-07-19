---
date: 2026-07-18T23:00:00Z
file: src/app/page.tsx
slug: src-app-page-tsx
score: 63
p0: 2
p1: 2
p2: 1
p3: 1
detector: clean
---

# Critique: Home Page (`src/app/page.tsx`)

**Score: 63/100** — Strong voice, conventional bones. The opening is genuinely arresting; the structure after it is generic and the page stops rather than closes.

---

## Detector

Clean. Zero hits. Exit 0.

---

## Browser Evidence

**Desktop (1280px):** Renders correctly. Hero fills ~55% of viewport. H1 at ~4.5rem, wraps cleanly across 4 lines. CTAs side by side, no clipping. Two-column About grid correct. Dev badge (N) visible — production artifact, not a ship issue.

**Mobile (375px):** H1 at 2.25rem (clamp floor), 5 lines, no overflow. Both CTAs wrap with `flex-wrap`, fit cleanly. `min-h-[90vh]` leaves ~200px of dead vertical space below CTAs on mobile when hero content doesn't fill the forced height — structural/intentional but notable. About section drops to single column, correct stacking order.

**globals.css:** `animate-fade-in` correct — opacity + translateY, `fill-mode: both`. `prefers-reduced-motion` handled properly (opacity:1 + transform:none, not just `animation:none`). No issues.

**layout.tsx:** Viewport meta injected by Next.js App Router. Geist fonts load via `next/font/google`, CSS vars wired correctly, no FOUT risk. `lang="en"` present. Missing: Open Graph tags.

---

## Nielsen Heuristics

| # | Heuristic | Score |
|---|-----------|-------|
| 1 | Visibility of System Status | 2/4 — No active nav state |
| 2 | Match System / Real World | 4/4 — Language is direct and human |
| 3 | User Control and Freedom | 3/4 — Clear paths, no traps |
| 4 | Consistency and Standards | 3/4 — Three CTAs, inconsistent placement/weight |
| 5 | Error Prevention | 3/4 — Low-risk surface |
| 6 | Recognition Rather Than Recall | 4/4 — All navigation explicit |
| 7 | Flexibility and Efficiency of Use | 2/4 — No skip links; fast-deciding visitor has no strong signal |
| 8 | Aesthetic and Minimalist Design | 2/4 — Not cluttered, but flat. Minimalist ≠ inert |
| 9 | Error Recovery | 3/4 — N/A surface |
| 10 | Help and Documentation | 2/4 — Meno is never described on the page |

**Total: 28/40 (70%)**

---

## Cognitive Load

| Check | Result |
|-------|--------|
| Single focus | PASS |
| Chunking | PARTIAL — About section treats unequal content as equal |
| Grouping | FAIL — Three CTAs with no visual grouping logic |
| Visual hierarchy | PARTIAL — Hero strong; About section both headers same size/weight/color |
| One thing at a time | PASS |
| Minimal choices | PARTIAL — Two accent-colored "primary" buttons; neither dominates |
| Working memory | PASS |
| Progressive disclosure | FAIL — Reader asked to click Meno with no hook to motivate it |

**Failures: 2 full, 3 partial**

---

## Emotional Journey

**Peak:** Opening quote — genuinely arresting. Passes the "AI-slop" test on voice.

**Valley:** About section. Energy drops from "striking" to "competent." The copy in "The approach" reads like a resume bullet: "Agentic engineering: AI accelerates the implementation" is a phrase now appearing on portfolios written by people using AI, and it's starting to read that way. "Claude Certified Architect" lands as credential-dropping rather than proof to a hiring manager who doesn't know what it means.

**End:** "Every PR I merge, I can explain." This is the best line in the About section and it's buried as a kicker. The page ends on a quiet, defensive note — not a close that creates energy or desire.

**The hiring manager's anxiety:** "Did she actually build this, or did AI build it while she watched?" The page addresses this obliquely but never directly. The buried best line needs more weight.

---

## Strengths

1. **The opening quote is legitimately good.** "For the billion women whose doctors don't understand menopause." answers *why* she came back before explaining *what* she built. That ordering is correct and distinctive. Most portfolios lead with the person; this one leads with the mission.

2. **"The work" copy is the right kind of specific.** Intel, Cylance, Cox Automotive, Flashpoint. 35 billion records, 20+ APIs, real-time breach detection. These are numbers a senior engineer can evaluate. Not vague.

3. **The palette is restrained and defensible.** Near-black + pale pink is unusual for a tech portfolio. Using accent color *only* on hero heading and CTAs is disciplined. Most portfolios overuse their accent.

---

## Issues

### P0 — Meno is never described on the home page
The entire portfolio's purpose is to make someone care about Meno. The home page teases "I built something about it" and then asks for the click with zero evidence of what's on the other side. Even a single sentence ("Meno is an AI-powered menopause companion built with RAG and real clinical sources") would change conversion. Right now this is a promise the page can't keep until after the click — backwards.

### P0 — Three CTAs, no hierarchy
"See Meno →" (accent fill), "Get In Touch" (ghost), "See the process →" (accent fill, mid-page). Two accent-colored buttons both claiming primary status. The business goal per PRODUCT.md is contact — but contact is the *weakest*-looking button. A fast-scanning hiring manager doesn't know which action matters most.

### P1 — Two-column About treats asymmetric content as equal
"The work" (a decade of track record) and "The approach" (a philosophy) are not equal in weight. Equal columns say they are. If the belief ladder matters — credibility before trust in process — the layout should reflect that hierarchy. One column should dominate, or they should stack with different visual treatments.

### P1 — Emotional register collapses after the hero
The hero creates genuine energy. The About section switches to explanation mode. The copy in "The approach" reads like someone justifying AI use rather than declaring a point of view. The page doesn't close — it just stops.

### P2 — "Claude Certified Architect" reads as consumption, not creation
To a hiring manager unfamiliar with Anthropic certifications, this signals "got good at using the AI tool she uses." That's not the intended signal. Either add a line about what the certification required, or move it to /learning where it has context, or remove it from the home page entirely.

### P3 — "Get In Touch" is the primary business goal but visually weakest
Ghost/border button vs. solid accent fill. Business priority inverted by visual hierarchy.

---

## Persona Red Flags

**Jordan (Hiring Manager, 90 seconds):** Gets engaged by the quote. Reads "The work" — trusts it. Hits "Claude Certified Architect" — small alarm. Sees no description of what Meno actually is. Reaches page end without enough momentum to click into an unknown page. Leaves. Not because the portfolio is bad, but because it built interest and then stalled.

**Casey (Mobile):** Renders cleanly. Body copy at `oklch(65% 0 0)` on near-black is at minimum WCAG AA threshold (~4.5:1) — mobile sunlight/glare conditions push this toward failure. "See the process →" mid-section button looks like an accident in single-column view.

**The Hiring Manager (Senior, Mission-Driven, Scanning 20 Portfolios):** Filter is "assembled vs. lived." Quote passes. Specific company names pass. "Three Coursera AI specializations" trips the filter — these signal effort, not depth. "Every PR I merge, I can explain" is the best line and it's buried. Page ends without a close. Persona is now unsure whether to click Meno, process, or leave. No strong signal given.

---

## Minor Observations

- `text-balance` on the h2s ("The work", "The approach") is inert — they're single-line headings with no reflow risk.
- `max-w-prose` inside `md:grid-cols-2` inside `max-w-4xl`: the grid column constrains the paragraph before `max-w-prose` kicks in. That class is doing nothing on this page.
- `pt-24` hardcodes an assumption that the navbar is 64px tall. Silent breakage if navbar height ever changes.
- `animate-fade-in` applied to the whole hero as one unit — no stagger. All content appears as a single block. Not broken, but a stagger pass (hero heading → subhead → attribution → buttons) would add presence without cost.
- No Open Graph tags anywhere in the site (not page-specific, but worth noting).
- No `aria-label` on the nav hamburger (in Navbar component, not page.tsx scope).

---

## Provocative Questions

1. **The opening is the strongest thing on the page. Why does everything after it explain the quote instead of deepen it?** The About section's job isn't to say who Helena is — it's to make the hiring manager certain she's the real thing. Does the current copy do that, or is it résumé content wearing portfolio clothes?

2. **Read only the heading layer aloud:** "For the billion women whose doctors don't understand menopause." / "The work." / "The approach." / "See Meno →" / "Get In Touch" / "See the process →." A scan-mode user gets this heading story. There's no thesis in the heading layer alone. Is the page designed for readers or scanners?

3. **The page is confident about everything except the most important thing: what did she build?** The home page never describes Meno. Is that restraint or avoidance? Has the reader's curiosity survived to the point of a click, or has it already dissipated by the time they reach the end of the page?
