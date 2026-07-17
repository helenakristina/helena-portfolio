import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helena Lucia – Senior Engineer",
  description:
    "Senior software engineer building AI tools for the billion women whose doctors don't understand menopause. A decade of data engineering experience, LLM and RAG expertise.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 animate-fade-in">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-accent text-balance mb-8">
            &ldquo;For the billion women whose doctors don&apos;t understand
            menopause.&rdquo;
          </h1>

          <p className="text-[clamp(1.125rem,2vw,1.75rem)] font-semibold text-white leading-snug mb-5">
            I built something about it.
          </p>

          <p className="text-ink-muted text-sm tracking-wide mb-14">
            &ndash; Helena Lucia &middot; Senior Engineer
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/meno"
              className="px-6 py-3 bg-accent text-[var(--bg)] font-semibold text-sm tracking-wide hover:bg-accent-deep transition-colors duration-200"
            >
              See Meno →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/25 text-white font-semibold text-sm tracking-wide hover:border-white transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">The work</h2>
            <p className="text-ink-muted leading-relaxed text-[0.9375rem] max-w-prose">
              A decade of data engineering across Intel, Cylance, Cox
              Automotive, and Flashpoint – 35 billion records, 20+ APIs,
              real-time breach detection at scale. In 2021 I stepped away with
              intention. I came back building{" "}
              <Link
                href="/meno"
                className="text-accent hover:text-white transition-colors duration-200"
              >
                Meno
              </Link>
              , and everything I learned along the way.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-4">The approach</h2>
            <p className="text-ink-muted leading-relaxed text-[0.9375rem] max-w-prose">
              Agentic engineering: AI accelerates the implementation, human
              judgment owns the design and the code review. Three Coursera AI
              specializations. Claude Certified Architect. Every PR I merge, I
              can explain.{" "}
              <Link
                href="/process"
                className="inline-block mt-4 px-5 py-2.5 bg-accent text-[var(--bg)] text-sm font-semibold tracking-wide hover:bg-accent-deep transition-colors duration-200"
              >
                See the process →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
