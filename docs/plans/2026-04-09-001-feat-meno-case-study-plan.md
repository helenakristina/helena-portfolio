---
title: Replace Meno page with full case study
type: feat
status: completed
date: 2026-04-09
---

# feat: Replace Meno Page with Full Case Study

## Overview

Replace the placeholder `src/app/meno/page.tsx` (currently 92 lines: 3-card grid, stub video, stub reel) with a long-form case study. The new page is prose-first — nine sections interleaving narrative, four screenshots, a pull quote, a tech stack callout block, a roadmap icon row with market stats, and a footnotes section.

This is a complete rewrite of one file. No new packages. No new component files.

---

## Technical Pre-Decisions (from SpecFlow analysis)

### Image sizing

All four screenshots are 2500+ px wide with slightly different aspect ratios:
- `image_1.png`: ~1.40:1 (2568×1838)
- `image_2.png`: ~1.27:1 (2572×2022)
- `image_3.png`: ~1.48:1 (2536×1714)
- `image_4.png`: ~1.38:1 (2594×1882)

**Approach:** Use explicit `width` and `height` props (not `fill`) with `className="w-full h-auto"` so Next.js scales them responsively within the `max-w-3xl` prose container. Display dimensions should match each image's aspect ratio at ~900px wide:

| Image | `width` | `height` | Ratio |
|---|---|---|---|
| image_1 | 900 | 643 | 1.40:1 |
| image_2 | 900 | 709 | 1.27:1 |
| image_3 | 900 | 608 | 1.48:1 |
| image_4 | 900 | 651 | 1.38:1 |

### Alt text (derived from PRD image descriptions)

- `image_1`: `"Provider directory showing NAMS-certified specialists with a shortlist tracking call status"`
- `image_2`: `"Calling script modal personalized with provider name and insurance plan"`
- `image_3`: `"Appointment prep step 2: narrative health picture edit screen in first-person voice"`
- `image_4`: `"Practice scenarios for navigating dismissal, with RAG-backed source citations"`

### Layout

All images are stacked (not side-by-side). Each image is full-width within the `max-w-3xl` prose container, preceded by a prose paragraph and followed by a caption.

---

## Acceptance Criteria

- [x] `src/app/meno/page.tsx` is a server component (no `'use client'`)
- [x] `metadata` export is updated: description = `"A full-stack healthcare app for women navigating menopause — symptom tracking, evidence-based AI, provider directory, and appointment prep."`
- [x] Outer `<section>` wrapper retains `animate-fade-in` class
- [x] Prose container is `max-w-3xl mx-auto` (not `max-w-5xl`)
- [x] All four images render via `next/image` with correct `width`, `height`, `alt`, and styling (`rounded-xl border border-white/20 shadow-xl w-full h-auto`)
- [x] All prose matches the PRD verbatim — no paraphrasing, no added language
- [x] Tech stack callout says "OpenAI API → Claude API (production)" — NOT "Claude API"
- [x] Pull quote `"The dots exist. Meno connects them."` is present and styled per PRD
- [x] Roadmap icon row (4 items: Mobile App, Apple Watch, Predictive Analytics, Provider Dashboard) is present
- [x] Market stats row (3 stats: $63B / $600B / 7%) is present
- [x] Footnotes section present at very bottom with all three sources
- [x] No TypeScript errors
- [x] No new npm packages added
- [x] Everything in a single `page.tsx` file — no separate component files
- [ ] `npm run dev` — page renders without console errors

---

## Proposed Solution

Complete rewrite of `src/app/meno/page.tsx`. The file structure:

```tsx
// src/app/meno/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { ... }

export default function MenoPage() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* 1. Page Header */}
        {/* 2. The Problem Is Personal */}
        {/* 3. The Insight */}
        {/* 4. What Meno Does (prose + images interleaved) */}
        {/* 5. The Mental Health Dimension + pull quote */}
        {/* 6. How It's Built + tech stack callout */}
        {/* 7. Where It's Going + roadmap row + market stats */}
        {/* 8. Closing */}
        {/* 9. Footnotes */}
      </div>
    </section>
  )
}
```

---

## Technical Considerations

### Next.js Image (first use in codebase)

`next/image` is not currently used anywhere in this repo — this is the first import. Standard usage:

```tsx
import Image from 'next/image'

<Image
  src="/image_1.png"
  alt="Provider directory showing NAMS-certified specialists..."
  width={900}
  height={643}
  className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
/>
```

`w-full h-auto` makes the image responsive within the prose container. The `width`/`height` props set the intrinsic size for Next.js optimization but Tailwind overrides the display size.

### Tailwind v4

This project uses Tailwind v4 (`@import "tailwindcss"` in globals.css, not v3 directives). All classes used (`rounded-xl`, `border`, `border-white/20`, `shadow-xl`, `backdrop-blur-md`, `bg-white/5`, `rounded-2xl`, `grid-cols-4`, `text-teal-400`, etc.) are standard Tailwind utilities that work identically in v4.

### Glassmorphism callout blocks

Two callout blocks follow the established pattern:
```
backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6
```
- Tech stack block (section 6) — two-column grid inside
- Roadmap block (section 7) — four-column icon grid + three-column stat row inside

### Pull quote styling

PRD gives two options (centered no-border OR left-border). Recommended: left-border variant for visual rhythm in a long prose document:
```
border-l-4 border-teal-400 pl-6 text-xl md:text-2xl text-teal-300 italic my-8
```

### Section heading convention

Match `process/page.tsx` pattern:
```
text-2xl font-bold text-white mb-6
```

### Image caption convention

Per PRD: `text-sm text-gray-500 text-center mt-2 mb-8`

---

## System-Wide Impact

- **Interaction graph**: Server component only. No state, no hooks, no callbacks. Zero interaction graph complexity.
- **Error propagation**: `next/image` requires valid `width`/`height` — TypeScript will catch type errors at compile time. Runtime errors impossible for local `/public` images.
- **State lifecycle risks**: None — static render.
- **API surface parity**: No API changes. This is a presentation-only file.
- **Integration test scenarios**: `npm run dev` + visual review of all 9 sections.

---

## Dependencies & Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| `next/image` blurry / wrong size | Low | Use `w-full h-auto` + correct aspect-ratio height props |
| Prose drift from PRD | Medium | Copy-paste directly from PRD, no paraphrasing |
| Tech stack callout says "Claude API" | Low | Verification checklist item |
| TypeScript error on Image props | Low | Both `width` and `height` as numbers, `alt` as string |
| Tailwind v4 class incompatibility | Very low | All classes are standard utilities confirmed in existing pages |

---

## Implementation Steps

1. Read current `src/app/meno/page.tsx` in full
2. Write new `page.tsx` top-to-bottom following PRD section order:
   - Update `metadata` export
   - Section 1: Page Header (label, gradient title, subtitle)
   - Section 2: The Problem Is Personal (prose, 5 paragraphs)
   - Section 3: The Insight (prose, 4 paragraphs)
   - Section 4: What Meno Does (5 prose blocks + 4 images + captions)
   - Section 5: The Mental Health Dimension (prose + pull quote)
   - Section 6: How It's Built (prose + tech stack glassmorphism callout + process link)
   - Section 7: Where It's Going (prose + roadmap icon row + market stats)
   - Section 8: Closing (centered, `text-lg text-gray-200`, `max-w-2xl`)
   - Section 9: Footnotes (`text-xs text-gray-600`, `border-t border-white/10`)
3. Verify checklist (all 15 acceptance criteria)

---

## Sources & References

### Internal References

- Current meno page: `src/app/meno/page.tsx` (92 lines, server component)
- Glassmorphism pattern: `src/app/work/page.tsx:52-53`
- `animate-fade-in` definition: `src/app/globals.css:28-68`
- Tech stack callout (existing): `src/app/meno/page.tsx:43-66`
- Type scale examples: `src/app/process/page.tsx`

### PRD

- Full specification: `docs/prds/PRD_MENO_CASE_STUDY.md`
