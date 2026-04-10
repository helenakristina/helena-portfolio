import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meno — Healthcare App by Helena Lucia',
  description:
    'A full-stack healthcare app for women navigating menopause — symptom tracking, evidence-based AI, provider directory, and appointment prep.',
};

export default function Meno() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* 1. Page Header */}
        <div className="text-center">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Case Study
          </p>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Meno
            </span>
          </h1>
          <p className="text-gray-400 text-xl">
            &ldquo;Building What Matters: for the billion women whose doctors don&rsquo;t understand menopause&rdquo;
          </p>
        </div>

        {/* 2. The Problem Is Personal */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">The Problem Is Personal</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              I came prepared. I&rsquo;d done the research, written the email, gotten a yes. My doctor would discuss hormone therapy at my next visit. I let myself feel hopeful about it.
            </p>
            <p>
              The appointment lasted ten minutes. She had never prescribed an estrogen patch and progesterone: the gold standard of care I&rsquo;d asked about by name. She offered birth control instead. When I asked about vaginal estrogen for the dryness and urgency I&rsquo;d been managing with a pelvic floor physical therapist, she suggested lube. My heart was in my throat. I asked for a referral to a specialist.
            </p>
            <p>
              She seemed a little irked when I found one myself.
            </p>
            <p>
              She wasn&rsquo;t an outlier. Fewer than one in five OB-GYN residents receives formal training in menopause management. The system wasn&rsquo;t failing me specifically; it was failing by design.
            </p>
            <p>
              I went home, found a NAMS-certified menopause specialist in my area who took my insurance, and scheduled directly. I also emailed my urologist, who prescribed vaginal estrogen without hesitation. Within a month of seeing the specialist (who did prescribe the patch and micronized progesterone) my sleep was better, my hot flashes were easing, and my bladder was improving.
            </p>
            <p>
              One appointment with someone who actually knew menopause changed everything. I had to navigate around my own doctor to get the care I needed. Most women don&rsquo;t know they can do that, or don&rsquo;t have the energy to try.
            </p>
          </div>
        </div>

        {/* 3. The Insight */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">The Insight</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Before my specialist appointment, I did something most women don&rsquo;t have the resources to do. I spent hours researching the evidence, logging my symptoms, and preparing a document: prioritized symptom list, scripted opening statement, questions grouped by topic, and responses ready if things went sideways. I walked in knowing exactly what I wanted to ask for and why.
            </p>
            <p>
              It worked. I left with a plan.
            </p>
            <p>
              But I&rsquo;m a software engineer with time, research skills, and the stubbornness to go around a system that wasn&rsquo;t working for me. Most women don&rsquo;t have that combination. They have ten minutes with a doctor who may not be trained in menopause, no data to back up what they&rsquo;re feeling, and no language for what&rsquo;s happening to them.
            </p>
            <p>
              That&rsquo;s what Meno is for.
            </p>
          </div>
        </div>

        {/* 4. What Meno Does */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">What Meno Does</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">

            <p>
              Finding a menopause specialist isn&rsquo;t a one-call process. You search, you filter by insurance, you leave voicemails, you wait. Meno holds that process &mdash; a searchable directory of NAMS-certified providers, filterable by state, provider type, and insurance plan, with a shortlist where you track who you&rsquo;ve called, who called back, and who you&rsquo;ve booked.
            </p>
          </div>

          <div className="mt-6">
            <Image
              src="/image_1.png"
              alt="Provider directory showing NAMS-certified specialists with a shortlist tracking call status"
              width={900}
              height={643}
              className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
            />
            <p className="text-sm text-gray-500 text-center mt-2 mb-8">
              Provider directory with shortlist; track every call in one place
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              When you&rsquo;re ready to call, Meno generates a script personalized to that provider and your insurance: the provider&rsquo;s name, your specific plan, and the right questions to ask before you book. The number is right there. You don&rsquo;t have to go search for it.
            </p>
          </div>

          <div className="mt-6">
            <Image
              src="/image_2.png"
              alt="Calling script modal personalized with provider name and insurance plan"
              width={900}
              height={709}
              className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
            />
            <p className="text-sm text-gray-500 text-center mt-2 mb-8">
              Calling script generated for this provider and this insurance plan
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Once you have an appointment, the preparation starts. Meno asks a few questions: new provider or established relationship, what you&rsquo;re hoping to get out of the visit, and whether you&rsquo;ve been dismissed before. Then it does something most tools don&rsquo;t: it reads your symptom logs and your medication history, and it writes your story back to you in your own words. First person. Your symptoms, your patterns, your medications, in the order that matters. You read it, you edit it, and what you approve goes directly into your provider summary... verbatim, unchanged. Your doctor reads your words, not a generated report about you.
            </p>
          </div>

          <div className="mt-6">
            <Image
              src="/image_3.png"
              alt="Appointment prep step 2: narrative health picture edit screen in first-person voice"
              width={900}
              height={608}
              className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
            />
            <p className="text-sm text-gray-500 text-center mt-2 mb-8">
              Your health picture, written in your voice, edited by you, delivered to your provider word for word
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The rest of the appointment prep builds from there. You prioritize your concerns in the order you want to raise them. You answer two questions: what have you already tried, and what specifically do you want to leave with today. Then Meno pulls from 10,000 curated research documents to surface the dismissals most likely to come up in your appointment, and gives you evidence-based language to respond to each one.
            </p>
          </div>

          <div className="mt-6">
            <Image
              src="/image_4.png"
              alt="Practice scenarios for navigating dismissal, with RAG-backed source citations"
              width={900}
              height={651}
              className="rounded-xl border border-white/20 shadow-xl w-full h-auto"
            />
            <p className="text-sm text-gray-500 text-center mt-2 mb-8">
              Practice scenarios backed by real research so you&rsquo;re ready if things go sideways
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              You walk in with two documents: a provider summary your doctor can read in two minutes, and a personal cheatsheet that&rsquo;s yours to hold in the room. Prioritized concerns. Questions grouped by topic. And a section called &ldquo;If Things Go Sideways&rdquo;, because sometimes they do.
            </p>
          </div>
        </div>

        {/* 5. The Mental Health Dimension */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">The Mental Health Dimension</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Menopause doesn&rsquo;t just change your body. It changes your brain.
            </p>
            <p>
              The cognitive and psychiatric symptoms are the ones nobody warns you about, and the ones most likely to be misattributed, misdiagnosed, or dismissed entirely. Brain fog that makes technical work feel impossible. Anxiety that emerges in your late forties with no prior history and no obvious cause. Depression that travels with hot flashes and cognitive cloudiness so consistently that the pattern shows up in the data. Sleep disruption that compounds everything.
            </p>
            <p>
              These symptoms don&rsquo;t get talked about because they&rsquo;re harder to name, harder to measure, and easier to explain away. Stress. Aging. Depression. Anxiety disorder. The hormonal connection gets missed, not because the research doesn&rsquo;t exist, but because most providers haven&rsquo;t read it and most tools aren&rsquo;t looking for it.
            </p>
            <p>
              Meno is one of the few tools that takes the mental health dimension of menopause seriously. Ask Meno can answer questions about the cognitive and psychiatric symptoms most apps won&rsquo;t touch because the research exists, and women deserve access to it. The appointment prep flow surfaces dismissal scenarios specific to mental health presentations, because &ldquo;that sounds like anxiety, you need an antidepressant&rdquo; is one of the most common things a perimenopausal woman hears, and there is evidence-based language available to respond to it.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-teal-400 pl-6 my-8 text-xl md:text-2xl text-teal-300 italic">
            &ldquo;The dots exist. Meno connects them.&rdquo;
          </blockquote>
        </div>

        {/* 6. How It's Built */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">How It&rsquo;s Built</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Meno is a full-stack application built with SvelteKit and TypeScript on the frontend, FastAPI and Python on the backend, and Supabase for PostgreSQL storage and authentication with row-level security. The AI layer currently uses the OpenAI API for LLM calls, with the architecture designed from the start for a clean migration to Claude API at production; dependency injection throughout means swapping providers requires changing one file. pgvector handles semantic search across 10,000 curated research documents: PubMed papers and clinical references selected for relevance to menopause and perimenopause, not just dumped in bulk.
            </p>
            <p>
              The RAG pipeline is the core of Ask Meno. When a user asks a question, it&rsquo;s embedded and matched against the document index using cosine similarity with an hnsw vector index, then passed to the LLM with a five-layer prompt system that controls voice, citation format, and medical safety boundaries. The result is a response that cites its sources at the paragraph level that reads like a knowledgeable friend who happens to have read the research.
            </p>
            <p>
              The appointment prep flow makes six structured LLM calls: narrative generation, symptom summary, provider questions, scenario suggestions backed by RAG retrieval, and two structured PDF outputs validated by Pydantic models. Hard fail on parse errors. A partial or empty clinical document is worse than none.
            </p>
            <p>
              The entire application was built using a disciplined agentic engineering workflow... PRD-first, TDD with CATCHES annotations, Claude Code with custom skill files enforcing architectural conventions, and line-by-line human code review before every merge.
            </p>
          </div>

          <p className="mt-8 text-sm">
            <a
              href="/process"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              &rarr; How I work: helena-lucia.vercel.app/process
            </a>
          </p>

          {/* Tech stack callout */}
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 mt-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-teal-400 font-semibold">Frontend</p>
                <p className="text-gray-300">SvelteKit + TypeScript, Vercel</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold">Backend</p>
                <p className="text-gray-300">FastAPI + Python, Railway</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold">Database</p>
                <p className="text-gray-300">Supabase (PostgreSQL + pgvector)</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold">AI</p>
                <p className="text-gray-300">OpenAI API &rarr; Claude API (production), hnsw vector index</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold">Auth</p>
                <p className="text-gray-300">Supabase RLS (row-level security)</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold">PDF</p>
                <p className="text-gray-300">ReportLab (structured, Pydantic-validated)</p>
              </div>
              <div className="col-span-2">
                <p className="text-teal-400 font-semibold">Process</p>
                <p className="text-gray-300">Claude Code, Compound Engineering, PRD-first</p>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Where It's Going */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Where It&rsquo;s Going</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Meno is designed to grow with the data it collects.
            </p>
            <p>
              The next juncture is mobile: a native app with Apple Watch integration for passive data collection. HRV, sleep quality, skin temperature. The hypothesis is that wearable data can surface patterns before a woman logs them: a drop in heart rate variability in the days before a symptom cluster, an early warning that something is coming. The nervous system often knows before the conscious mind does.
            </p>
            <p>
              From there, predictive analytics. Not &ldquo;here are your patterns&rdquo; but &ldquo;here&rsquo;s what&rsquo;s likely coming and when.&rdquo; Symptom forecasting based on individual history, with alerts that give a woman time to prepare rather than react.
            </p>
            <p>
              On the provider side, an anonymized dashboard: aggregate symptom patterns across a patient population, dose adjustment tracking over time, the kind of longitudinal data that a menopause specialist currently has no systematic way to collect. Research partnerships built on consented, anonymized data that doesn&rsquo;t exist anywhere else at scale.
            </p>
          </div>

          {/* Roadmap icon row */}
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 mt-8">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {/* Mobile App */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
                </svg>
                <p className="text-gray-400 text-sm text-center">Mobile App</p>
              </div>
              {/* Apple Watch Integration */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="7" y="7" width="10" height="10" rx="2" />
                  <path d="M7 10H4M7 14H4M17 10h3M17 14h3" strokeLinecap="round" />
                  <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M9 17v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" strokeLinecap="round" />
                </svg>
                <p className="text-gray-400 text-sm text-center">Apple Watch Integration</p>
              </div>
              {/* Predictive Analytics */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
                  <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
                  <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
                  <line x1="3" y1="20" x2="21" y2="20" strokeLinecap="round" />
                </svg>
                <p className="text-gray-400 text-sm text-center">Predictive Analytics</p>
              </div>
              {/* Provider Dashboard */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7v4M10 9h4" strokeLinecap="round" />
                </svg>
                <p className="text-gray-400 text-sm text-center">Provider Dashboard</p>
              </div>
            </div>

            {/* Market stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { stat: '$63B', label: 'Femtech market 2025' },
                { stat: '$600B', label: 'Menopause market by 2030' },
                { stat: '7%', label: 'of femtech focused on menopause' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="text-teal-400 text-3xl font-bold">{stat}</p>
                  <p className="text-gray-400 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. Closing */}
        <div className="pt-12 max-w-2xl mx-auto text-center">
          <div className="text-lg text-gray-200 leading-relaxed space-y-4">
            <p>
              Menopause affects every woman who lives long enough. And yet for most of us, it arrives as a surprise, our mothers didn&rsquo;t warn us, our doctors aren&rsquo;t prepared for us, and the culture has spent decades treating it as something to endure quietly rather than understand clearly. That&rsquo;s starting to change. Gen X is finally talking. Millennials are paying attention and promising to do it differently.
            </p>
            <p>
              Meno is part of that conversation. Because every woman navigating this deserves information, language, and someone in her corner, even if that someone is an app.
            </p>
          </div>
        </div>

        {/* 9. Footnotes */}
        <div className="border-t border-white/10 mt-16 pt-8 text-xs text-gray-600">
          <p className="mb-1">Sources</p>
          <p>1. Allen JT et al. Menopause. 2023;30(10):1002-1005. doi:10.1097/GME.0000000000002234</p>
          <p>2. Astute Analytica. FemTech Market Report. January 2026. astuteanalytica.com</p>
          <p>3. PreScouter. The $600 Billion Menopause Market. 2024. prescouter.com</p>
        </div>

      </div>
    </section>
  );
}
