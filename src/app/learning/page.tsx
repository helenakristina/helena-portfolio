import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helena Lucia – Learning",
  description:
    "AI and LLM specializations, certifications, and coursework. Claude Certified Architect. Two Coursera specializations and selected courses from Anthropic and Vanderbilt University.",
};

const specializations = [
  {
    name: "Generative AI Software Engineering",
    org: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/specialization/OHV0WS3FIL7N",
  },
  {
    name: "AI Agent Developer",
    org: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/specialization/COE1GB5Y33DD",
  },
];

const coursework = [
  {
    name: "Building with the Claude API",
    org: "Anthropic",
    url: "https://verify.skilljar.com/c/egoztfya8gqu",
  },
  {
    name: "AI Agents & Agentic AI Architecture in Python",
    org: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/verify/1IAMZWQ6UWVO",
  },
  {
    name: "Introduction to Agent Skills",
    org: "Anthropic",
    url: "https://verify.skilljar.com/c/b5tjfstt3rvt",
  },
  {
    name: "Claude Code in Action",
    org: "Anthropic",
    url: "https://verify.skilljar.com/c/63bjd6obgs5h",
  },
  {
    name: "Introduction to Model Context Protocol",
    org: "Anthropic",
    url: "https://verify.skilljar.com/c/zvx4yokj755g",
  },
  {
    name: "Claude Code: Software Engineering with Generative AI Agents",
    org: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/verify/QF2F4LSCHNMH",
  },
  {
    name: "Trustworthy Generative AI",
    org: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/verify/AQCTF39SYJ0D",
  },
];

export default function Learning() {
  return (
    <section
      aria-labelledby="learning-title"
      className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in"
    >
      <div className="max-w-3xl mx-auto">
        <h1
          id="learning-title"
          className="text-4xl font-bold text-white mb-6 text-balance"
        >
          Learning
        </h1>

        <div className="text-ink-muted leading-relaxed space-y-4 mb-16 max-w-prose">
          <p>
            I didn&rsquo;t want to use AI as a black box. Building Meno meant
            making real decisions about LLM architecture, RAG pipelines, and
            agentic systems. I needed to understand how they actually work.
          </p>
          <p className="text-white">Everything here is pointed at that question.</p>
        </div>

        <div className="space-y-16">
          {/* Credentials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-balance">
              Credentials
            </h2>
            <div className="border border-border-subtle p-6">
              <a
                href="https://www.credly.com/badges/40623774-dfb5-480a-93e1-520611cfc61c/public_url"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claude Certified Architect Foundations, verify on Credly (opens in new tab)"
                className="inline-flex items-center gap-4 sm:gap-6 group"
              >
                <Image
                  src="/claude-certified-architect-foundations.png"
                  alt="Claude Certified Architect Foundations badge"
                  width={96}
                  height={96}
                  className="shrink-0 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div>
                  <p className="text-white font-semibold group-hover:text-accent transition-colors duration-200">
                    Claude Certified Architect Foundations
                  </p>
                  <p className="text-ink-muted text-sm mt-1">Anthropic · 2026</p>
                  <p className="text-accent text-xs mt-2 tracking-wide">
                    Verify on Credly <span aria-hidden="true" className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">→</span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Coursera Specializations */}
          <div className="border-t border-border-subtle pt-12">
            <h2 className="text-2xl font-bold text-white mb-2 text-balance">
              Coursera Specializations
            </h2>
            <p className="text-ink-muted text-sm mb-8">2025–2026</p>
            <ul className="space-y-5">
              {specializations.map(({ name, org, url }) => (
                <li key={name} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <p className="text-white flex-1">
                    <strong>{name}</strong>
                    <span className="text-ink-muted text-sm"> · {org}</span>
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${name} certificate (opens in new tab)`}
                    className="text-accent text-sm font-semibold shrink-0 hover:text-white transition-colors duration-200 group"
                  >
                    Verify <span aria-hidden="true" className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coursework */}
          <div className="border-t border-border-subtle pt-12">
            <h2 className="text-2xl font-bold text-white mb-2 text-balance">
              Coursework
            </h2>
            <p className="text-ink-muted text-sm mb-8">
              Selected courses &middot; Coursera and Anthropic, 2025&ndash;2026
            </p>
            <ul className="space-y-5">
              {coursework.map(({ name, org, url }, index) => (
                <li
                  key={name}
                  className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6 animate-list-item"
                  style={{ "--stagger": `${index * 50}ms` } as CSSProperties}
                >
                  <p className="text-white flex-1">
                    <strong>{name}</strong>
                    <span className="text-ink-muted text-sm"> · {org}</span>
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${name} certificate (opens in new tab)`}
                    className="text-accent text-sm font-semibold shrink-0 hover:text-white transition-colors duration-200 group"
                  >
                    Verify <span aria-hidden="true" className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="border-t border-border-subtle pt-8">
            <p className="text-sm text-ink-muted">
              This is what it looks like to not use AI as a black box.{" "}
              <Link
                href="/process"
                className="text-accent hover:text-white font-semibold transition-colors duration-200 whitespace-nowrap group"
              >
                See how I work <span aria-hidden="true" className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
