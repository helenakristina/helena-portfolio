import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helena Lucia – How I Work",
  description:
    "Agentic engineering: AI accelerates implementation, human judgment owns design and code review. Seven-stage process from collaborative design through merge and memorialize.",
};

const stages = [
  {
    title: "Collaborative Design",
    subtitle: "Define what to build before touching code",
    ceCommand: null as string | null,
    description:
      'Every feature starts with a conversation. I brainstorm with Claude Opus, going back and forth until the scope is clear, the edge cases are covered, and we both agree on what "done" looks like. The artifact that comes out is a PRD that guides implementation and serves as the reference for code review.',
  },
  {
    title: "Structured Planning",
    subtitle: "Implementation plan reviewed before any code is written",
    ceCommand: "ce:plan",
    description:
      "The PRD becomes a concrete implementation plan with defined steps, file-level changes, and dependency ordering. I review and approve the plan before a single line of code gets written. No plan, no code.",
  },
  {
    title: "Test-Driven Development",
    subtitle: "Tests first, each annotated with the bug they prevent",
    ceCommand: "ce:work",
    description:
      "Tests get written first. Every test includes a CATCHES annotation describing the specific bug it prevents — no tests that just exercise the mock library. The implementation follows the tests, not the other way around.",
  },
  {
    title: "Manual Testing",
    subtitle: "Hands-on walkthrough to catch what automated tests miss",
    ceCommand: null,
    description:
      "Once the tests pass, I do a hands-on walkthrough of the feature to catch the things automated tests miss: visual issues, workflow gaps, edge cases that only surface when you actually use the thing.",
  },
  {
    title: "Automated Review",
    subtitle: "Prioritized bug and quality report, triaged by hand",
    ceCommand: "ce:review",
    description:
      "An automated review surfaces bugs, security issues, and code quality problems. It generates prioritized todos that I triage — deciding what gets fixed now, what gets deferred, and what gets dismissed.",
  },
  {
    title: "Human Code Review",
    subtitle: "Read every line of code and every test in the PR",
    ceCommand: null,
    description:
      "This is the other stage where I invest the most time. I read every line of code and every test in the PR. Even when the implementation is complex, I can grasp what each test asserts, and if the tests make sense, the code has a contract I can verify.",
  },
  {
    title: "Merge & Memorialize",
    subtitle: "Capture learnings to improve the next cycle",
    ceCommand: "ce:compound",
    description:
      "After merge, I capture what worked, what didn't, and what the system learned. These learnings feed directly into the next feature cycle, so the process gets better over time.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-balance">How I Work</h1>
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

        {/* Timeline */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 bottom-8 w-px bg-border-subtle" />

          <div className="space-y-8">
            {stages.map((stage) => (
              <div key={stage.title} className="relative">
                <div className="absolute -left-10 top-[0.375rem] w-2 h-2 rounded-full -translate-x-1/2 bg-accent" />
                <div className="border border-border-subtle p-5 hover:border-white/40 transition-colors duration-200">
                  <h3 className="text-white font-bold text-balance">{stage.title}</h3>
                  <p className="text-ink-muted text-sm mt-0.5">
                    {stage.subtitle}
                    {stage.ceCommand && (
                      <code className="ml-2 font-mono text-xs text-accent">
                        {stage.ceCommand}
                      </code>
                    )}
                  </p>
                  <p className="text-ink-muted text-sm leading-relaxed mt-3 text-pretty">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="h-px w-8 bg-border-subtle" />
            <span className="text-ink-muted text-sm italic">
              Learnings feed the next cycle
            </span>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <h3 className="text-lg font-bold text-white mb-4 text-balance">
            Why this is my philosophy
          </h3>
          <p className="text-ink-muted leading-relaxed mb-4 max-w-prose text-pretty">
            AI can write code faster than I can, but writing code is not the
            hard part. The difficult part is knowing what to build and being
            confident that what ships actually works, is high quality, and is
            maintainable. My process puts human judgment where it counts.
          </p>
          <p className="text-ink-muted leading-relaxed max-w-prose text-pretty">
            Every PR I merge, I can explain. Every test I approve, I understand
            what it catches. Every feature I ship, I know why it exists.
          </p>
        </div>
      </div>
    </section>
  );
}
