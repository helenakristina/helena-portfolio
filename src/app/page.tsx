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
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-28 animate-fade-in">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-accent text-balance mb-8">
            For the billion women whose doctors don&apos;t understand
            menopause.
          </h1>

          <p className="text-[clamp(1.125rem,2vw,1.75rem)] font-semibold text-white leading-snug mb-8">
            I built something about it.
          </p>

          <p className="text-white text-sm leading-relaxed mb-8 max-w-md">
            Meno gives women the research-grounded answers their doctors don&apos;t have time to find.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/meno"
              className="px-6 py-3 bg-accent text-black font-semibold text-sm tracking-wide hover:bg-accent-deep transition-colors duration-200"
            >
              See Meno<span aria-hidden="true"> →</span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/50 text-white font-semibold text-sm tracking-wide hover:border-white transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 text-balance">The work</h2>
            <p className="text-ink-muted leading-relaxed text-[0.9375rem] max-w-prose text-pretty">
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
            <Link
              href="/work"
              className="inline-block mt-4 text-accent hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              See my work<span aria-hidden="true"> →</span>
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 text-balance">The approach</h2>
            <p className="text-ink-muted leading-relaxed text-[0.9375rem] max-w-prose text-pretty">
              Every PR I merge, I can explain. Every test I ship, I understand
              what it catches. I use AI to move faster, not to skip the
              judgment that makes code worth maintaining. Three Coursera AI
              specializations. Claude Certified Architect – Foundations.
            </p>
            <Link
              href="/process"
              className="inline-block mt-4 text-accent hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              See how I work<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white leading-snug mb-8 text-balance">
            Healthcare is being rebuilt. I want to be in the room.
          </h2>
          <Link
            href="/contact"
            className="px-6 py-3 bg-accent text-black font-semibold text-sm tracking-wide hover:bg-accent-deep transition-colors duration-200"
          >
            Get In Touch<span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
