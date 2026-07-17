---
target: work
total_score: 19
p0_count: 1
p1_count: 2
timestamp: 2026-07-17T03-20-35Z
slug: src-app-work-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Expand/collapse has no affordance — no chevron, no `+`, no cursor signal. Users can't tell cards are interactive until they click. |
| 2 | Match System / Real World | 2 | "Learning & Growth / Taking Care of Myself" as a company/role breaks the mental model. Hiring managers pattern-match job entries; this reads as an awkward gap explanation dressed as a credential. |
| 3 | User Control and Freedom | 3 | Click-to-toggle works correctly; no real traps. |
| 4 | Consistency and Standards | 1 | Design system defines `--ink-muted` and `--border-subtle`, but the component uses raw Tailwind `gray-300`, `gray-400`, `slate-950`. Two color systems coexisting. `border-slate-950` on a near-black background makes the dot border disappear. |
| 5 | Error Prevention | 2 | PDF download link has no fallback or feedback if file is missing. Contact PII hardcoded directly in JSX. |
| 6 | Recognition Rather Than Recall | 1 | Zigzag alternating layout forces constant reorientation. Interactive expand is entirely undiscoverable — no affordance whatsoever. Best content is hidden behind an invisible interaction. |
| 7 | Flexibility and Efficiency | 2 | No keyboard navigation for accordion, no anchor links to employers, no way to reveal all details at once. |
| 8 | Aesthetic and Minimalist Design | 1 | Inline resume block creates two competing information architectures on one page. Timeline tells the narrative; resume re-tells it as a document. Page does too much. |
| 9 | Error Recovery | 2 | Mount animation applies `opacity: 0 / translateY(40px)` via inline style props — the globals.css `prefers-reduced-motion` override doesn't suppress it. Flash of invisible content possible on slow connections. |
| 10 | Help and Documentation | 3 | Self-explanatory enough; no docs needed. |
| **Total** | | **19/40** | **Acceptable (barely) — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment: PARTIAL FAIL**

The page correctly avoids the banned list — no gradient text, no glassmorphism, no teal/cyan, no uppercase eyebrow kickers. But it fails on second-order slop:

- **Alternating zigzag timeline**: One of the most overused resume visualization patterns in AI-generated portfolio templates. No human art director would choose this without a specific reason.
- **Rainbow gradient timeline dots**: `from-blue-500 to-cyan-500`, `from-purple-500 to-pink-500`, `from-orange-500 to-yellow-500` — color-by-category reflex, with no legend, no semantic meaning, and dots too small (~5px) to decode anyway. Zero of these colors come from the design system.
- **"Career Journey" as the page title**: Emotionally safe, generically inspirational. Every portfolio generator uses this phrase.
- **Inline resume below the timeline**: The stock free Next.js portfolio starter pattern, exactly. Timeline on top, inline resume below, PDF download at the bottom.
- **Emoji contact icons** (📧📱🔗): Informal visual language inside a formal resume block — a hallmark of AI-generated content.

**Deterministic scan: CLEAN**

Detector returned `[]` with exit code 0. No deterministic HTML/CSS pattern violations detected. The issues here are structural and semantic — not catchable by a rule-based scanner. The detector correctly confirms there's no gradient text, no glassmorphism, no color from the banned list leaking in. This is consistent with Assessment A's finding that the violations are subtler (template pattern, color-by-category, split IA).

**Browser visualization**: Both desktop and mobile screenshots confirmed. No overlay injection; findings are from the source review and screenshots.

**Desktop confirms**: Large dead-space columns on the dot side, colored gradient dots visible but tiny, emoji contact glyphs rendering as colored characters against the monochromatic design.  
**Mobile confirms**: Timeline completely loses its visual structure. Dots hidden (`hidden md:flex`), center line hidden (`hidden md:block`). On 375px, this page is just a plain vertical list of bordered boxes with large black voids between them — the timeline idea is entirely absent.

## Overall Impression

The content is genuinely strong — the career arc is differentiated and impressive. But the page is fighting itself: it tries to tell a narrative (timeline) and present a document (resume) simultaneously, and does neither well. The best technical content (35 billion records, 40TB data warehouse, 20+ API integrations) is buried behind an invisible expand interaction. The page's most distinctive structural idea — the zigzag timeline — collapses completely on mobile and reads as a template on desktop. A hiring manager leaves this page thinking "she seems experienced" without ever feeling "I need to talk to her."

## What's Working

**1. Card interaction pattern**: The `border-border-subtle → border-white/40` hover transition is clean and restrained. The border is doing real work as an interactive signal. This is the best-executed UI element on the page.

**2. Career arc content**: Intel → Cylance → Cox Automotive → Flashpoint is a rare and genuinely compelling combination of domains (infrastructure, security, automotive ML, threat intelligence). The raw data is differentiated. The content problems are presentation problems, not content problems.

**3. Font consistency and sharp corners**: No border-radius anywhere, consistent with the "Deliberate Edge" design system. The page doesn't drift aesthetically.

## Priority Issues

**[P0] Two pages in one: timeline + inline resume**
The page simultaneously tells a narrative story (timeline) and presents a credential document (inline resume). These have different reading modes, different information densities, and different hiring manager contexts. The inline resume duplicates content already present in the timeline (same companies, same roles), then adds a skills bullet wall with 15 technologies, contact PII, and an education block. This structure is the canonical free portfolio starter pattern — it's not a design decision, it's a template default. The resume section should either be its own route (`/resume`) or removed entirely in favor of a single clean PDF download link at the bottom of the timeline. The current dual-IA structure is the largest single design failure on the page.  
**Fix**: Remove or extract the inline resume section. Keep the PDF download. One page, one job.  
**Suggested command**: `/impeccable distill work`

**[P1] Zigzag timeline is a cognitive liability and a slop signal**
The alternating left/right layout burdens working memory (the eye constantly re-orients), breaks gestalt grouping, and is the most recognizable "I saw a timeline demo" pattern in AI portfolio generation. On mobile it collapses to a plain vertical card list with no dots, no line, and no temporal structure — the central design idea evaporates entirely. A left-aligned timeline (all cards flush to the right, a persistent date rail on the left) would be more readable, more original, and more honest.  
**Fix**: Left-align all cards. Move years to a consistent left rail. Keep the accent-colored dot as a punctuation mark, not a rainbow.  
**Suggested command**: `/impeccable layout work`

**[P1] Expand interaction has zero affordance**
Cards are buttons but look like static containers. No chevron, no `+`, no color change on the label, no visual signal that detail text exists. The best content on the page (35B records, 40TB, real-time breach detection) lives behind an invisible interaction. Most hiring managers will read the `highlight` text and move on, never knowing more exists.  
**Fix**: Add a persistent `▾` chevron (accent-colored) that rotates to `▴` on expand. Explicitly set `cursor: pointer`. The `aria-expanded` attribute and `aria-controls` linkage are also missing — required for accessibility.  
**Suggested command**: `/impeccable audit work`

**[P2] Colored gradient timeline dots are incoherent decoration**
Six dots, six gradient color schemes, no legend, no semantic meaning. `from-teal-500 to-green-500` (Flashpoint) and `from-teal-400 to-blue-400` (Return to Tech) are nearly indistinguishable. `border-slate-950` on a near-black background means the dot border disappears. None of these colors exist in the design system. The dots are ~5px rendered — too small to carry any decoding function.  
**Fix**: Single `bg-accent` dot for all entries. Consider a filled vs. outlined variant for "current" (Return to Tech) vs. past. Remove the `color` field from `careerEvents.ts` entirely.  
**Suggested command**: `/impeccable polish work`

**[P2] Mobile: the timeline concept vanishes entirely**
On a 375px viewport, `hidden md:flex` hides all dots and `hidden md:block` hides the center line. The zigzag reversal (`md:even:flex-row-reverse`) no longer applies. What remains is a plain vertical list of bordered boxes with large black voids between them and no chronological structure. The `space-y-12` gaps between cards (designed to accommodate the dot column) become pure dead space.  
**Fix**: Redesign the mobile layout as a left-bordered timeline (1px accent border on the left, dot overlaid on the border, card to the right). This preserves the temporal narrative on narrow screens.  
**Suggested command**: `/impeccable adapt work`

## Persona Red Flags

**Jordan (Confused First-Timer / hiring manager, first visit)**
Jordan lands on `/work` expecting to understand who Helena is and what she wants next. The page opens with "Career Journey" — no thesis, no framing, no positioning. Jordan begins reading from Intel (2012) and must scroll through five entries to reach the present-day context. By then Jordan may have already formed a "gap resume" mental model and is looking for red flags rather than being pulled forward by narrative. The "Taking Care of Myself" role title (as a job entry) is particularly jarring — Jordan doesn't know whether to treat it as a career entry or a personal disclosure. There is no opening statement that frames what kind of engineer Helena is becoming, or what she wants next.

**Casey (Distracted Mobile User)**
Casey opens this on a phone during a commute. The timeline disappears — no dots, no line, just cards stacked vertically with large empty gaps. Casey can't orient temporally. The inline resume below the cards requires significant scrolling — all the skill bullet text, contact details, education, certifications are dense and require deliberate reading effort. Casey will reach the PDF download button after scrolling through ~1200px of content and will likely close the tab before finding it.

**Sam (Accessibility-Dependent User)**
The timeline cards are `<button>` elements — correct — but they lack `aria-expanded`, `aria-controls`, and distinguishing `aria-label` attributes. A screen reader announces them as generic "button" elements with no indication that they expand or what they expand to. Emoji contact icons (📧📱🔗) are read aloud by VoiceOver as "envelope emoji, helenalucia@fastmail.com" — redundant and jarring. Most critically: the mount animation uses inline `style` props to set `opacity: 0` and `transform`, which means the `@media (prefers-reduced-motion)` override in `globals.css` (which targets `.animate-fade-in`) does not suppress this animation. Sam gets the full motion treatment regardless of system preference.

## Minor Observations

- `h2` "Career Journey" and `h3` "Resume" render at nearly the same visual weight. The hierarchy is semantically correct but visually flat — they compete rather than subordinate.
- The `color` field in `careerEvents.ts` is a presentation concern living in data. Color logic belongs in the view layer.
- Intel's `highlight` and `detail` text are nearly identical — the expand reveals almost nothing new for the first entry.
- The `Download Full Resume` button correctly uses `bg-accent text-[var(--bg)]` — the one place the design system token is used correctly for interaction.
- `max-w-5xl` (1024px) on a wide viewport creates dead space on both sides. Given the "Deliberate Edge" aesthetic, this reads as tentative.
- Raw `gray-300`, `gray-400`, `text-gray-400`, `text-gray-300` throughout the component — should be `text-ink-muted` or `text-foreground` to maintain design system coherence.

## Questions to Consider

1. **If you removed the entire inline resume section, would anything important be lost?** The timeline covers the career arc. The PDF covers the credentials. The skills bullet wall, education block, and certifications are already on the Learning and Work pages. Does the resume section serve the hiring manager, or does it reassure Helena that "everything is there"?

2. **What if "Taking Care of Myself" was the opening frame instead of a gap entry?** If Helena owned the 2021 break as the *thesis* — "I left tech in 2021. Here's what I built instead, and why I'm back" — would the whole page feel less defensive and more like a declaration?

3. **Why does the timeline exist if the Meno case study already tells the best story?** A hiring manager who reads the Meno page knows Helena can ship. Does the `/work` page need to be a timeline, or should it be a positioning statement with the timeline as a supporting artifact?
