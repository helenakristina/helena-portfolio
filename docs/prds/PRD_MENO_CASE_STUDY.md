# PRD: Meno Case Study Page

**File:** `src/app/meno/page.tsx`  
**Type:** Full page replacement  
**Risk:** Medium — replaces existing page entirely, but page is currently a placeholder with no user-critical functionality  
**Commit strategy:** Single commit. This is a complete replacement of one file plus image additions.

---

## Background

The current `/meno` page is a placeholder with three short cards, a tech stack grid, and empty video slots. It is being replaced with a full case study — long-form prose interleaved with screenshots — that tells the story of what Meno is, why it exists, and how it was built. This is the primary portfolio artifact for the Meno project.

---

## Goals

1. Replace the current `src/app/meno/page.tsx` with a full case study page
2. Maintain visual consistency with the existing portfolio — dark theme, teal/cyan accents, same type scale and spacing conventions
3. Interleave four screenshots at specific points in the prose
4. Include a pull quote, tech stack callout block, roadmap icon row, and footnotes section
5. Fix the tech stack description (currently says "Claude API" — should say "OpenAI API (production migration to Claude API planned)")

---

## Images

Four screenshots are located in `public/`:
- `public/image_1.png` — Provider directory with shortlist (Called, Left Voicemail, Booked Appointment)
- `public/image_2.png` — Calling script modal (personalized with provider name and insurance plan)
- `public/image_3.png` — Appointment prep Step 2: Your health picture (narrative edit screen)
- `public/image_4.png` — Practice scenarios (If Things Go Sideways, with RAG source citations)

Use Next.js `<Image>` component for all screenshots. All images should have:
- `rounded-xl` corners
- `border border-white/20` 
- `shadow-xl`
- `w-full` width within their container
- Appropriate `alt` text describing what's shown

---

## Page Structure

The page is a single long-form document. Do NOT use the three-card grid pattern from the current page — this is prose, not cards. Use `max-w-3xl mx-auto` for the prose container to keep line length readable.

Sections in order:

### 1. Page Header
- Section label in small caps or uppercase tracking: `CASE STUDY`  in `text-teal-400 text-sm font-semibold tracking-widest`
- Title: `Meno` in large teal gradient text (same gradient pattern as current page: `bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent`)
- Subtitle below title: `"Building What Matters: for the billion women whose doctors don't understand menopause"` in `text-gray-400`

---

### 2. The Problem Is Personal

Section heading: `The Problem Is Personal` in `text-2xl font-bold text-white`

Prose content (render exactly as written, preserve paragraph breaks):

> I came prepared. I'd done the research, written the email, gotten a yes. My doctor would discuss hormone therapy at my next visit. I let myself feel hopeful about it.
>
> The appointment lasted ten minutes. She had never prescribed an estrogen patch and progesterone: the gold standard of care I'd asked about by name. She offered birth control instead. When I asked about vaginal estrogen for the dryness and urgency I'd been managing with a pelvic floor physical therapist, she suggested lube. My heart was in my throat. I asked for a referral to a specialist.
>
> She seemed a little irked when I found one myself.
>
> She wasn't an outlier. Fewer than one in five OB-GYN residents receives formal training in menopause management. The system wasn't failing me specifically; it was failing by design.
>
> I went home, found a NAMS-certified menopause specialist in my area who took my insurance, and scheduled directly. I also emailed my urologist, who prescribed vaginal estrogen without hesitation. Within a month of seeing the specialist (who did prescribe the patch and micronized progesterone) my sleep was better, my hot flashes were easing, and my bladder was improving.
>
> One appointment with someone who actually knew menopause changed everything. I had to navigate around my own doctor to get the care I needed. Most women don't know they can do that, or don't have the energy to try.

---

### 3. The Insight

Section heading: `The Insight`

Prose content:

> Before my specialist appointment, I did something most women don't have the resources to do. I spent hours researching the evidence, logging my symptoms, and preparing a document: prioritized symptom list, scripted opening statement, questions grouped by topic, and responses ready if things went sideways. I walked in knowing exactly what I wanted to ask for and why.
>
> It worked. I left with a plan.
>
> But I'm a software engineer with time, research skills, and the stubbornness to go around a system that wasn't working for me. Most women don't have that combination. They have ten minutes with a doctor who may not be trained in menopause, no data to back up what they're feeling, and no language for what's happening to them.
>
> That's what Meno is for.

---

### 4. What Meno Does

Section heading: `What Meno Does`

This section interleaves prose with screenshots. The pattern is: prose paragraph → screenshot → prose paragraph → screenshot, etc.

**Prose block 1** (before image_1):
> Finding a menopause specialist isn't a one-call process. You search, you filter by insurance, you leave voicemails, you wait. Meno holds that process — a searchable directory of NAMS-certified providers, filterable by state, provider type, and insurance plan, with a shortlist where you track who you've called, who called back, and who you've booked.

**Image:** `image_1.png`  
**Caption:** `Provider directory with shortlist; track every call in one place`  
Caption style: `text-sm text-gray-500 text-center mt-2 mb-8`

**Prose block 2** (before image_2):
> When you're ready to call, Meno generates a script personalized to that provider and your insurance: the provider's name, your specific plan, and the right questions to ask before you book. The number is right there. You don't have to go search for it.

**Image:** `image_2.png`  
**Caption:** `Calling script generated for this provider and this insurance plan`

**Prose block 3** (before image_3):
> Once you have an appointment, the preparation starts. Meno asks a few questions: new provider or established relationship, what you're hoping to get out of the visit, and whether you've been dismissed before. Then it does something most tools don't: it reads your symptom logs and your medication history, and it writes your story back to you in your own words. First person. Your symptoms, your patterns, your medications, in the order that matters. You read it, you edit it, and what you approve goes directly into your provider summary... verbatim, unchanged. Your doctor reads your words, not a generated report about you.

**Image:** `image_3.png`  
**Caption:** `Your health picture, written in your voice, edited by you, delivered to your provider word for word`

**Prose block 4** (before image_4):
> The rest of the appointment prep builds from there. You prioritize your concerns in the order you want to raise them. You answer two questions: what have you already tried, and what specifically do you want to leave with today. Then Meno pulls from 10,000 curated research documents to surface the dismissals most likely to come up in your appointment, and gives you evidence-based language to respond to each one.

**Image:** `image_4.png`  
**Caption:** `Practice scenarios backed by real research so you're ready if things go sideways`

**Prose block 5** (after image_4, no image follows):
> You walk in with two documents: a provider summary your doctor can read in two minutes, and a personal cheatsheet that's yours to hold in the room. Prioritized concerns. Questions grouped by topic. And a section called "If Things Go Sideways", because sometimes they do.

---

### 5. The Mental Health Dimension

Section heading: `The Mental Health Dimension`

Prose content:

> Menopause doesn't just change your body. It changes your brain.
>
> The cognitive and psychiatric symptoms are the ones nobody warns you about, and the ones most likely to be misattributed, misdiagnosed, or dismissed entirely. Brain fog that makes technical work feel impossible. Anxiety that emerges in your late forties with no prior history and no obvious cause. Depression that travels with hot flashes and cognitive cloudiness so consistently that the pattern shows up in the data. Sleep disruption that compounds everything.
>
> These symptoms don't get talked about because they're harder to name, harder to measure, and easier to explain away. Stress. Aging. Depression. Anxiety disorder. The hormonal connection gets missed, not because the research doesn't exist, but because most providers haven't read it and most tools aren't looking for it.
>
> Meno is one of the few tools that takes the mental health dimension of menopause seriously. Ask Meno can answer questions about the cognitive and psychiatric symptoms most apps won't touch because the research exists, and women deserve access to it. The appointment prep flow surfaces dismissal scenarios specific to mental health presentations, because "that sounds like anxiety, you need an antidepressant" is one of the most common things a perimenopausal woman hears, and there is evidence-based language available to respond to it.

**Pull quote** — render after the final prose paragraph above, before the next section:

> "The dots exist. Meno connects them."

Pull quote styling: large text, `text-xl md:text-2xl`, `text-teal-300`, `italic`, centered, with a left border accent — `border-l-4 border-teal-400 pl-6` — or centered with no border, your judgment on which fits better with the existing portfolio aesthetic.

---

### 6. How It's Built

Section heading: `How It's Built`

Prose content:

> Meno is a full-stack application built with SvelteKit and TypeScript on the frontend, FastAPI and Python on the backend, and Supabase for PostgreSQL storage and authentication with row-level security. The AI layer currently uses the OpenAI API for LLM calls, with the architecture designed from the start for a clean migration to Claude API at production; dependency injection throughout means swapping providers requires changing one file. pgvector handles semantic search across 10,000 curated research documents: PubMed papers and clinical references selected for relevance to menopause and perimenopause, not just dumped in bulk.
>
> The RAG pipeline is the core of Ask Meno. When a user asks a question, it's embedded and matched against the document index using cosine similarity with an hnsw vector index, then passed to the LLM with a five-layer prompt system that controls voice, citation format, and medical safety boundaries. The result is a response that cites its sources at the paragraph level that reads like a knowledgeable friend who happens to have read the research.
>
> The appointment prep flow makes six structured LLM calls: narrative generation, symptom summary, provider questions, scenario suggestions backed by RAG retrieval, and two structured PDF outputs validated by Pydantic models. Hard fail on parse errors. A partial or empty clinical document is worse than none.
>
> The entire application was built using a disciplined agentic engineering workflow... PRD-first, TDD with CATCHES annotations, Claude Code with custom skill files enforcing architectural conventions, and line-by-line human code review before every merge.

**Tech stack callout block** — render after the prose, before the next section:

A visually distinct block using the existing glassmorphism pattern (`backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6`). Two-column grid inside. Content:

| Label | Value |
|---|---|
| Frontend | SvelteKit + TypeScript, Vercel |
| Backend | FastAPI + Python, Railway |
| Database | Supabase (PostgreSQL + pgvector) |
| AI | OpenAI API → Claude API (production), hnsw vector index |
| Auth | Supabase RLS (row-level security) |
| PDF | ReportLab (structured, Pydantic-validated) |
| Process | Claude Code, Compound Engineering, PRD-first |

Label color: `text-teal-400 font-semibold`  
Value color: `text-gray-300`

After the callout block, add a link:
`→ How I work: helena-lucia.vercel.app/process`  
Style as a teal text link: `text-teal-400 hover:text-teal-300 underline`

---

### 7. Where It's Going

Section heading: `Where It's Going`

Prose content:

> Meno is designed to grow with the data it collects.
>
> The next juncture is mobile: a native app with Apple Watch integration for passive data collection. HRV, sleep quality, skin temperature. The hypothesis is that wearable data can surface patterns before a woman logs them: a drop in heart rate variability in the days before a symptom cluster, an early warning that something is coming. The nervous system often knows before the conscious mind does.
>
> From there, predictive analytics. Not "here are your patterns" but "here's what's likely coming and when." Symptom forecasting based on individual history, with alerts that give a woman time to prepare rather than react.
>
> On the provider side, an anonymized dashboard: aggregate symptom patterns across a patient population, dose adjustment tracking over time, the kind of longitudinal data that a menopause specialist currently has no systematic way to collect. Research partnerships built on consented, anonymized data that doesn't exist anywhere else at scale.

**Roadmap icon row** — render after the prose as a horizontal row of 4 items. Use simple SVG icons:

- 📱 Mobile App
- ⌚ Apple Watch Integration  
- 📊 Predictive Analytics
- 🏥 Provider Dashboard

Each item: icon centered above label, `text-gray-400 text-sm text-center`. Container: `grid grid-cols-4 gap-4` inside the glassmorphism block pattern.

**Market stats** — render after the icon row as a three-stat row:

- `$63B` / `Femtech market 2025`
- `$600B` / `Menopause market by 2030`
- `7%` / `of femtech focused on menopause`

Each stat: large number in `text-teal-400 text-3xl font-bold`, label below in `text-gray-400 text-sm`. Three-column grid.

---

### 8. Closing

Section heading: none — this section has no heading, it stands alone.

Render with extra top padding (`pt-12`) and generous line height. No glassmorphism card — plain text on the dark background.

Prose content:

> Menopause affects every woman who lives long enough. And yet for most of us, it arrives as a surprise, our mothers didn't warn us, our doctors aren't prepared for us, and the culture has spent decades treating it as something to endure quietly rather than understand clearly. That's starting to change. Gen X is finally talking. Millennials are paying attention and promising to do it differently.
>
> Meno is part of that conversation. Because every woman navigating this deserves information, language, and someone in her corner, even if that someone is an app.

Style the closing differently from the body — slightly larger text (`text-lg`), `text-gray-200` instead of `text-gray-300`, centered, `max-w-2xl mx-auto`.

---

### 9. Footnotes

Small text block at the very bottom, `text-xs text-gray-600`, separated from the closing by a `border-t border-white/10 mt-16 pt-8`:

```
Sources
1. Allen JT et al. Menopause. 2023;30(10):1002-1005. doi:10.1097/GME.0000000000002234
2. Astute Analytica. FemTech Market Report. January 2026. astuteanalytica.com
3. PreScouter. The $600 Billion Menopause Market. 2024. prescouter.com
```

---

## Spacing & Typography Conventions

Match the existing portfolio conventions:
- Section headings: `text-2xl font-bold text-white mb-6`
- Body text: `text-gray-300 leading-relaxed` with `space-y-4` between paragraphs
- Section spacing: `space-y-16` between major sections
- Consistent `py-20 px-4 sm:px-6 lg:px-8` outer padding (same as current page)
- `max-w-3xl mx-auto` for all prose content (narrower than current `max-w-5xl` — prose needs tighter line length)

Screenshots should be full-width within the prose container. No side-by-side image layouts.

---

## What NOT to Change

- The `<section>` wrapper and `animate-fade-in` class — keep these from the current page
- The `Metadata` export at the top — update description to: `"A full-stack healthcare app for women navigating menopause — symptom tracking, evidence-based AI, provider directory, and appointment prep."`
- Do not add any new npm packages
- Do not create separate component files — keep everything in `page.tsx`

---

## Verification

Before marking complete, CC should verify:

1. All four images render correctly using Next.js `<Image>` with appropriate `width` and `height` props (or `fill` with a sized container)
2. No TypeScript errors
3. All prose matches the content in this PRD exactly — no paraphrasing, no added language
4. The tech stack callout block says "OpenAI API" not "Claude API"
5. The footnotes section is present at the bottom
6. Page renders without console errors on `npm run dev`