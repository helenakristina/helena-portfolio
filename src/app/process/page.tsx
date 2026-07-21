import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helena Lucia – How I Work",
  description:
    "Agentic engineering: AI accelerates implementation, human judgment owns design and code review. Seven-stage process from collaborative design through merge and memorialize.",
};

const stages = [
  {
    title: "Collaborative Design",
    description:
      'Every feature starts with a conversation. I brainstorm with Claude Opus, going back and forth until the scope is clear, the edge cases are covered, and we both agree on what "done" looks like. The output is a Product Requirements Document (PRD) that guides implementation and serves as the reference for code review.',
  },
  {
    title: "Structured Planning",
    description:
      "The PRD becomes a concrete implementation plan with defined steps, file-level changes, and dependency ordering. I review and approve the plan before a single line of code gets written. No plan, no code.",
  },
  {
    title: "Test-Driven Development",
    description:
      "Tests get written first. Every test includes a CATCHES annotation describing the specific bug it prevents. No tests that just exercise the mock library. The implementation follows the tests, not the other way around.",
  },
  {
    title: "Manual Testing",
    description:
      "Once the tests pass, I walk through the feature as a user, not a developer. The test suite catches logic errors; it can't tell me whether output reads naturally, whether a layout holds at an unexpected viewport, or whether an edge case surfaces a confusing result. That gap is what this step closes.",
  },
  {
    title: "Automated Review",
    description:
      "An automated review surfaces bugs, security issues, and code quality problems. It generates prioritized todos that I triage: what gets fixed now, what gets deferred, and what gets dismissed.",
  },
  {
    title: "Human Code Review",
    description:
      "This is where I invest the most time. I read every line of code and every test in the PR. Even when the implementation is complex, I can grasp what each test asserts. If the tests make sense, the code has a contract I can verify.",
  },
  {
    title: "Merge & Memorialize",
    description:
      "After merge, I capture what worked, what didn't, and what the system learned. These learnings feed directly into the next feature cycle. The next feature starts smarter than the last one did.",
  },
];

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 id="process-title" className="text-4xl font-bold text-white mb-6 text-balance">How I Work</h1>
        <p className="text-ink-muted leading-relaxed mb-16 max-w-prose text-pretty">
          I practice agentic engineering: AI accelerates the implementation,
          human judgment owns the design and the code review. The process runs
          on{" "}
          <a
            href="https://every.to/guides/compound-engineering"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compound Engineering (opens in new tab)"
            className="text-accent hover:text-white transition-colors duration-200"
          >
            Compound Engineering
          </a>
          , where every feature becomes an input to the next.
        </p>

        <div className="relative pl-10">
          <div aria-hidden="true" className="absolute left-0 top-2 bottom-8 w-px bg-border-subtle timeline-line-draw" />

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="relative animate-list-item"
                style={{ "--stagger": `${index * 80}ms` } as CSSProperties}
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-10 top-[0.375rem] w-2 h-2 rounded-full bg-accent timeline-dot"
                  style={{ transform: "translateX(-50%)", "--stagger": `${index * 80}ms` } as CSSProperties}
                />
                <div className="border border-border-subtle p-5 hover:border-white/40 transition-colors duration-200">
                  <h2 className="text-lg font-bold text-white text-balance">{stage.title}</h2>
                  <p className="text-ink-muted text-sm leading-relaxed mt-3 text-pretty">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 flex items-center gap-3 animate-list-item"
            style={{ "--stagger": "0ms" } as CSSProperties}
          >
            <div aria-hidden="true" className="h-px w-8 bg-border-subtle" />
            <span className="text-ink-muted text-sm italic">
              Learnings feed the next cycle
            </span>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border-subtle">
          <p
            className="text-ink-muted leading-relaxed mb-4 max-w-prose text-pretty animate-list-item"
            style={{ "--stagger": "0ms" } as CSSProperties}
          >
            AI can write code faster than I can, but writing code is not the
            hard part. The difficult part is knowing what to build and being
            confident that what ships is correct, high quality, and maintainable.
            My process puts human judgment where it counts.
          </p>
          <p
            className="text-ink-muted leading-relaxed max-w-prose text-pretty animate-list-item"
            style={{ "--stagger": "100ms" } as CSSProperties}
          >
            Every PR I merge, I can explain. Every test I approve, I understand
            what it catches. Every feature I ship, I know why it exists.
          </p>
          <div
            className="mt-8 pt-8 border-t border-border-subtle animate-list-item"
            style={{ "--stagger": "200ms" } as CSSProperties}
          >
            <p className="text-sm text-ink-muted">
              See what this process produces.{" "}
              <Link
                href="/work"
                className="text-accent hover:text-white font-semibold transition-colors duration-200 whitespace-nowrap group"
              >
                View the work{" "}
                <span aria-hidden="true" className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
