import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meno – Healthcare App by Helena Lucia",
  description:
    "A full-stack healthcare app for women navigating menopause — symptom tracking, evidence-based AI, provider directory, and appointment prep.",
};

export default function Meno() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* 1. Page Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Meno</h1>
          <p className="text-ink-muted mb-8">
            A full-stack healthcare app for women navigating menopause — provider directory, evidence-based appointment prep, and RAG-powered clinical Q&amp;A.
          </p>
          <a
            href="https://meno-hazel.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live app (opens in new tab)"
            className="inline-block px-5 py-2.5 bg-accent text-[var(--bg)] text-sm font-semibold tracking-wide hover:bg-accent-deep transition-colors duration-200"
          >
            View live app →
          </a>
        </div>

        {/* 2. The Problem Is Personal */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">
            The Problem Is Personal
          </h2>
          <div className="text-ink-muted leading-relaxed space-y-4">
            <p>
              I came prepared. I&rsquo;d done the research, written the email,
              gotten a yes. My doctor would discuss hormone therapy at my next
              visit. I let myself feel hopeful about it.
            </p>
            <p>
              The appointment lasted ten minutes. She had never prescribed an
              estrogen patch and progesterone: the gold standard of care
              I&rsquo;d asked about by name. She offered birth control instead.
              When I asked about vaginal estrogen for the dryness and urgency
              I&rsquo;d been managing with a pelvic floor physical therapist,
              she suggested lube. I asked for a referral to a specialist.
            </p>
            <p>She seemed a little irked when I found one myself.</p>
            <p>
              She wasn&rsquo;t an outlier. Fewer than one in five OB-GYN
              residents receives formal training in menopause management. The
              system wasn&rsquo;t failing me specifically; it was failing by
              design.
            </p>
            <p>
              I went home, found a NAMS-certified menopause specialist in my
              area who took my insurance, and scheduled directly. I also emailed
              my urologist, who prescribed vaginal estrogen without hesitation.
              Within a month of seeing the specialist (who did prescribe the
              patch and micronized progesterone) my sleep was better, my hot
              flashes were easing, and my bladder was improving.
            </p>
            <p>
              One appointment with someone who actually knew menopause changed
              everything. I had to navigate around my own doctor to get the care
              I needed. Most women don&rsquo;t know they can do that, or
              don&rsquo;t have the energy to try.
            </p>
          </div>
        </div>

        {/* 3. The Insight */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">The Insight</h2>
          <div className="text-ink-muted leading-relaxed space-y-4">
            <p>
              Before my specialist appointment, I spent hours researching the
              evidence, logging my symptoms, and preparing a document:
              prioritized symptom list, scripted opening statement, questions
              grouped by topic, and responses ready if things went sideways. I
              walked in knowing exactly what I wanted to ask for and why.
            </p>
            <p>It worked. I left with a plan.</p>
            <p>
              But I&rsquo;m a software engineer with time, research skills, and
              the stubbornness to go around a system that wasn&rsquo;t working
              for me. Most women don&rsquo;t have those resources. They have ten
              minutes with a doctor who may not be trained in menopause (most
              aren&rsquo;t), no data to back up what they&rsquo;re feeling, and
              no language for what&rsquo;s happening to them.
            </p>
            <p>That&rsquo;s what Meno is for.</p>
          </div>
        </div>

        {/* 4. What Meno Does */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">What Meno Does</h2>
          <p className="text-ink-muted leading-relaxed text-pretty">
            Finding a menopause specialist isn&rsquo;t a one-call process. You
            search, you filter by insurance, you leave voicemails, you wait.
            Meno holds that process: a searchable directory of NAMS-certified
            providers, filterable by state, provider type, and insurance plan,
            with a shortlist where you track who you&rsquo;ve called, who called
            back, and who you&rsquo;ve booked.
          </p>

          <div className="mt-6">
            <Image
              src="/image_1.png"
              alt="Provider directory showing NAMS-certified specialists with a shortlist tracking call status"
              width={900}
              height={643}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="border border-border-subtle w-full h-auto"
            />
            <p className="text-sm text-ink-muted text-center mt-2 mb-8">
              Provider directory with shortlist; track every call in one place
            </p>
          </div>

          <p className="text-ink-muted leading-relaxed text-pretty">
            When you&rsquo;re ready to call, Meno generates a script
            personalized to that provider and your insurance: the
            provider&rsquo;s name, your specific plan, and the right questions
            to ask before you book. The number is right there. You don&rsquo;t
            have to go search for it.
          </p>

          <div className="mt-6">
            <Image
              src="/image_2.png"
              alt="Calling script modal personalized with provider name and insurance plan"
              width={900}
              height={709}
              sizes="(max-width: 768px) 100vw, 768px"
              className="border border-border-subtle w-full h-auto"
            />
            <p className="text-sm text-ink-muted text-center mt-2 mb-8">
              Calling script generated for this provider and this insurance plan
            </p>
          </div>

          <p className="text-ink-muted leading-relaxed text-pretty">
            Once you have an appointment, the preparation starts. Meno asks a
            few questions: new provider or established relationship, what
            you&rsquo;re hoping to get out of the visit, and whether
            you&rsquo;ve been dismissed before. Then it reads your symptom logs
            and your medication history, and it writes your story back to you in
            your own words. (First person.) Your symptoms, your patterns, your
            medications. You read it, you edit it, and what you approve goes
            directly into your provider summary... verbatim, unchanged.
          </p>

          <div className="mt-6">
            <Image
              src="/image_3.png"
              alt="Appointment prep step 2: narrative health picture edit screen in first-person voice"
              width={900}
              height={608}
              sizes="(max-width: 768px) 100vw, 768px"
              className="border border-border-subtle w-full h-auto"
            />
            <p className="text-sm text-ink-muted text-center mt-2 mb-8">
              Your health picture, written in your voice, edited by you,
              delivered to your provider word for word
            </p>
          </div>

          <p className="text-ink-muted leading-relaxed text-pretty">
            The rest of the appointment prep builds from there. You prioritize
            your concerns in the order you want to raise them. You answer two
            questions: what have you already tried, and what specifically do you
            want to leave with today. Then Meno pulls from 10,000+ curated
            research documents to surface the dismissals most likely to come up
            in your appointment, and gives you evidence-based language to
            respond to each one.
          </p>

          <div className="mt-6">
            <Image
              src="/image_4.png"
              alt="Practice scenarios for navigating dismissal, with RAG-backed source citations"
              width={900}
              height={651}
              sizes="(max-width: 768px) 100vw, 768px"
              className="border border-border-subtle w-full h-auto"
            />
            <p className="text-sm text-ink-muted text-center mt-2 mb-8">
              Practice scenarios backed by real research so you&rsquo;re ready
              if things go sideways
            </p>
          </div>

          <p className="text-ink-muted leading-relaxed text-pretty">
            You walk in — prepared — with two documents: a provider summary your
            doctor can read in two minutes, and a personal cheatsheet
            that&rsquo;s yours to hold in the room. Prioritized concerns.
            Questions grouped by topic. And a section called &ldquo;If Things Go
            Sideways&rdquo;, because sometimes they do.
          </p>
        </div>

        {/* 5. The Mental Health Dimension */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">
            The Mental Health Dimension
          </h2>
          <div className="text-ink-muted leading-relaxed space-y-4">
            <p>
              Menopause doesn&rsquo;t just change your body. It changes your
              brain.
            </p>
            <p>
              The cognitive and psychiatric symptoms are the ones nobody warns
              women about, and the ones most likely to be misattributed,
              misdiagnosed, or dismissed entirely. Brain fog that interferes
              with work and daily life. New-onset anxiety in the late forties
              with no prior history. Depression that travels with hot flashes
              and cognitive cloudiness so consistently that the pattern shows up
              in the data. Sleep disruption that compounds everything.
            </p>
            <p>
              These symptoms don&rsquo;t get talked about because they&rsquo;re
              harder to name, harder to measure, and easier to explain away.
              Stress. Aging. Depression. Anxiety disorder. The hormonal
              connection gets missed, not because the research doesn&rsquo;t
              exist, but because most providers haven&rsquo;t read it and most
              tools aren&rsquo;t looking for it.
            </p>
            <p>
              Meno is one of the few tools that takes the mental health
              dimension of menopause seriously. Ask Meno answers questions about
              the cognitive and psychiatric symptoms, because the research
              exists and women deserve access to it. The appointment prep flow
              surfaces dismissal scenarios specific to mental health
              presentations, because &ldquo;that sounds like anxiety, you need
              an antidepressant&rdquo; is one of the most common things a
              perimenopausal woman hears, and there is evidence-based language
              available to respond to it. The dots exist. Meno connects them.
            </p>
          </div>
        </div>

        {/* 6. How It's Built */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">
            How It&rsquo;s Built
          </h2>
          <div className="text-ink-muted leading-relaxed space-y-4">
            <p>
              Meno is a full-stack application built with SvelteKit and
              TypeScript on the frontend, Python/FastAPI on the backend, and
              Supabase for PostgreSQL storage and authentication with row-level
              security. The AI layer currently uses the OpenAI API for LLM
              calls, with the architecture designed from the start for a clean
              migration to Claude API in production; dependency injection
              throughout means swapping providers requires changing one file.
              pgvector handles semantic search across 10,000+ curated research
              documents: PubMed papers and clinical references are curated for
              relevance to menopause and perimenopause, with special emphasis on
              mental health topics.
            </p>
            <p>
              The RAG pipeline is the core of Ask Meno. When a user asks a
              question, it&rsquo;s embedded and matched against the document
              index using cosine similarity with an hnsw vector index, then
              passed to the LLM with a five-layer prompt system that controls
              voice, citation format, and medical safety boundaries. The result
              is a response that cites its sources at the paragraph level that
              reads like a knowledgeable friend who happens to have done the
              research.
            </p>
            <p>
              The appointment prep flow makes six structured LLM calls:
              narrative generation, symptom summary, provider questions,
              scenario suggestions backed by RAG retrieval, and two structured
              PDF outputs validated by Pydantic models. It will hard fail on
              parse errors. A partial or empty clinical document is worse than
              none.
            </p>
            <p>
              The entire application was built using a disciplined agentic
              engineering workflow: PRD-first, TDD with CATCHES annotations,
              Claude Code with custom skills/rules files enforcing architectural
              conventions, and line-by-line human code review before every
              merge.
            </p>
          </div>

          {/* Tech stack */}
          <div className="border border-border-subtle p-6 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-accent font-semibold">Frontend</p>
                <p className="text-ink-muted">SvelteKit + TypeScript, Vercel</p>
              </div>
              <div>
                <p className="text-accent font-semibold">Backend</p>
                <p className="text-ink-muted">FastAPI + Python, Render</p>
              </div>
              <div>
                <p className="text-accent font-semibold">Database</p>
                <p className="text-ink-muted">
                  Supabase (PostgreSQL + pgvector)
                </p>
              </div>
              <div>
                <p className="text-accent font-semibold">AI</p>
                <p className="text-ink-muted">
                  OpenAI API &rarr; Claude API (production), hnsw vector index
                </p>
              </div>
              <div>
                <p className="text-accent font-semibold">Auth</p>
                <p className="text-ink-muted">
                  Supabase RLS (row-level security)
                </p>
              </div>
              <div>
                <p className="text-accent font-semibold">PDF</p>
                <p className="text-ink-muted">
                  ReportLab (structured, Pydantic-validated)
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-accent font-semibold">Process</p>
                <p className="text-ink-muted">
                  Claude Code, Compound Engineering, PRD-first
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8">
            <Link
              href="/process"
              className="inline-block px-5 py-2.5 bg-accent text-[var(--bg)] text-sm font-semibold tracking-wide hover:bg-accent-deep transition-colors duration-200"
            >
              How I work →
            </Link>
          </p>
        </div>

        {/* 7. Where It's Going */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-balance">
            Where It&rsquo;s Going
          </h2>
          <div className="text-ink-muted leading-relaxed space-y-4">
            <p>Meno is designed to grow with the data it collects.</p>
            <p>
              The next juncture is mobile: a native app with Apple Watch
              integration for passive data collection. HRV, sleep quality, skin
              temperature. The hypothesis is that wearable data can surface
              patterns before a woman logs them: a drop in heart rate
              variability in the days before a symptom cluster, an early warning
              that something is coming. The nervous system often knows before
              the conscious mind does.
            </p>
            <p>
              From there, predictive analytics. Not &ldquo;here are your
              patterns&rdquo; but &ldquo;here&rsquo;s what&rsquo;s likely coming
              and when.&rdquo; Symptom forecasting based on individual history,
              with alerts that give a woman time to prepare rather than react.
            </p>
            <p>
              On the provider side, an anonymized dashboard: aggregate symptom
              patterns across a patient population, dose adjustment tracking
              over time, the kind of longitudinal data that a menopause
              specialist currently has no systematic way to collect. Eventually,
              research partnerships built on consented, anonymized data, with
              explicit opt-in from every user. That data doesn&rsquo;t exist
              anywhere else at scale.
            </p>
          </div>

        </div>

        {/* 8. Closing */}
        <div className="pt-12 max-w-prose">
          <div className="text-lg text-white leading-relaxed space-y-4 text-pretty">
            <p>
              Menopause affects every woman who lives long enough. And yet for
              most of us, it arrives as a surprise, our mothers didn&rsquo;t
              warn us, our doctors aren&rsquo;t prepared for us, and the culture
              has spent decades treating it as something to endure quietly
              rather than understand clearly. That&rsquo;s starting to change.
              Gen X is finally talking. Millennials are paying attention and
              promising to do it differently.
            </p>
            <p>
              Meno is part of that conversation. Because every woman navigating
              this deserves information, language, and someone in her corner,
              even if that someone is an app.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-accent text-[var(--bg)] text-sm font-semibold tracking-wide hover:bg-accent-deep transition-colors duration-200"
            >
              Get in touch →
            </Link>
            <Link
              href="/work"
              className="px-5 py-2.5 border border-white/25 text-white text-sm font-semibold tracking-wide hover:border-white transition-colors duration-200"
            >
              See the work →
            </Link>
          </div>
        </div>

        {/* 9. Footnotes */}
        <div className="border-t border-border-subtle mt-16 pt-8 text-xs text-ink-muted">
          <p className="mb-1">Sources</p>
          <p>
            1. Allen JT et al. Menopause. 2023;30(10):1002-1005.
            doi:10.1097/GME.0000000000002234
          </p>
        </div>
      </div>
    </section>
  );
}
