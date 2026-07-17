import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Helena Lucia – Learning",
  description:
    "AI and LLM specializations, certifications, and coursework. Claude Certified Architect. Three Coursera specializations across Anthropic and Vanderbilt University.",
};

export default function Learning() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-16">Learning</h1>

        <div className="space-y-16">
          {/* Credentials */}
          <div>
            <h2 className="text-lg font-bold text-white mb-8">Credentials</h2>
            <a
              href="https://www.credly.com/badges/40623774-dfb5-480a-93e1-520611cfc61c/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 group"
            >
              <Image
                src="/claude-certified-architect-foundations.png"
                alt="Claude Certified Architect Foundations badge"
                width={96}
                height={96}
                className="shrink-0 object-contain"
              />
              <div>
                <p className="text-white font-semibold group-hover:text-accent transition-colors duration-200">
                  Claude Certified Architect Foundations
                </p>
                <p className="text-ink-muted text-sm mt-1">Anthropic · 2025</p>
                <p className="text-accent text-xs mt-2 tracking-wide">
                  Verify on Credly →
                </p>
              </div>
            </a>
          </div>

          {/* Coursera Specializations */}
          <div className="border-t border-border-subtle pt-12">
            <h2 className="text-lg font-bold text-white mb-2">
              Coursera Specializations
            </h2>
            <p className="text-ink-muted text-sm mb-8">2025–2026</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent shrink-0 mt-px">•</span>
                <span className="text-white">
                  <strong>Real-World AI for Everyone</strong>
                  <span className="text-ink-muted"> · Anthropic</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0 mt-px">•</span>
                <span className="text-white">
                  <strong>Generative AI Software Engineering</strong>
                  <span className="text-ink-muted">
                    {" "}
                    · Vanderbilt University
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0 mt-px">•</span>
                <span className="text-white">
                  <strong>AI Agent Developer</strong>
                  <span className="text-ink-muted">
                    {" "}
                    · Vanderbilt University
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Coursework */}
          <div className="border-t border-border-subtle pt-12">
            <h2 className="text-lg font-bold text-white mb-2">Coursework</h2>
            <p className="text-ink-muted text-sm mb-8">
              18 courses – Coursera and Anthropic
            </p>
            <ul className="space-y-4">
              {[
                { name: "Building with the Claude API", org: "Anthropic" },
                {
                  name: "AI Agents & Agentic AI Architecture",
                  org: "Vanderbilt University",
                },
                { name: "Introduction to Agent Skills", org: "Anthropic" },
                { name: "Claude Code in Action", org: "Anthropic" },
                {
                  name: "Introduction to Model Context Protocol",
                  org: "Anthropic",
                },
                { name: "AI Fundamentals with Claude", org: "Anthropic" },
                {
                  name: "Trustworthy Generative AI",
                  org: "Vanderbilt University",
                },
              ].map(({ name, org }) => (
                <li key={name} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-px">•</span>
                  <span className="text-white">
                    <strong>{name}</strong>
                    <span className="text-ink-muted"> · {org}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="border-t border-border-subtle pt-12">
            <h2 className="text-lg font-bold text-white mb-8">Focus Areas</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "LLM architectures",
                "Agentic AI",
                "Prompt engineering",
                "Claude API integration",
                "Responsible AI",
                "Model Context Protocol",
              ].map((area) => (
                <span
                  key={area}
                  className="text-sm text-white border border-border-subtle px-4 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
