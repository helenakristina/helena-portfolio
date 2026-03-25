import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helena Lucia — The Process",
  description:
    "How I approach agentic engineering, AI, and building products that actually help people.",
};

import React from "react";

const stages = [
  {
    title: "Collaborative design",
    subtitle: "PRD iterations with Opus until it's solid",
    description:
      'Every feature starts with a conversation. I brainstorm with Claude Opus to build a product requirements document, going back and forth until the scope is clear, the edge cases are covered, and we both agree on what "done" looks like. This is where the thinking happens — and it\'s where I spend the most time.',
    timeWidth: "w-full",
    color: "purple",
    humanIntensity: "high",
  },
  {
    title: "Structured planning",
    subtitle: "ce:plan — approve before any code is written",
    description:
      "The PRD becomes a concrete implementation plan with defined steps, file-level changes, and dependency ordering. I review and approve the plan before a single line of code gets written. No plan, no code.",
    timeWidth: "w-3/5",
    color: "purple",
    humanIntensity: "medium",
  },
  {
    title: "Test-driven development",
    subtitle: "ce:work with CATCHES annotations",
    description:
      "Tests get written first. Every test includes a CATCHES annotation describing the specific bug it prevents — no tests that just exercise the mock library. The implementation follows the tests, not the other way around.",
    timeWidth: "w-2/5",
    color: "teal",
    humanIntensity: "low",
  },
  {
    title: "Manual testing",
    subtitle: "Feature walkthrough",
    description:
      "Once the tests pass, I do a hands-on walkthrough of the feature to catch the things automated tests miss — visual issues, workflow gaps, edge cases that only surface when you actually use the thing.",
    timeWidth: "w-2/5",
    color: "teal",
    humanIntensity: "medium",
  },
  {
    title: "Automated review",
    subtitle: "ce:review + resolve todos",
    description:
      "An automated review surfaces bugs, security issues, and code quality problems. It generates prioritized todos that I triage — deciding what gets fixed now, what gets deferred, and what gets dismissed.",
    timeWidth: "w-2/5",
    color: "slate",
    humanIntensity: "low",
  },
  {
    title: "Human code review",
    subtitle: "Read every line of code and every test",
    description:
      "This is the other stage where I invest the most time. I read every line of code and every test in the PR. Even when the implementation code is complex, I can grasp what each test asserts — and if the tests make sense, the code has a contract I can verify. This is non-negotiable.",
    timeWidth: "w-full",
    color: "slate",
    humanIntensity: "high",
  },
  {
    title: "Merge + memorialize",
    subtitle: "ce:compound — learnings feed the next cycle",
    description:
      "After merge, I capture what worked, what didn't, and what the system learned. These learnings feed directly into the next feature cycle, so the process gets better over time.",
    timeWidth: "w-1/4",
    color: "gray",
    humanIntensity: "low",
  },
];

const colorMap = {
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-400/30",
    hoverBorder: "hover:border-purple-400/60",
    accent: "text-purple-400",
    bar: "bg-purple-400",
    dot: "bg-purple-400",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-400/30",
    hoverBorder: "hover:border-teal-400/60",
    accent: "text-teal-400",
    bar: "bg-teal-400",
    dot: "bg-teal-400",
  },
  slate: {
    bg: "bg-slate-500/10",
    border: "border-slate-400/30",
    hoverBorder: "hover:border-slate-400/60",
    accent: "text-slate-300",
    bar: "bg-slate-400",
    dot: "bg-slate-400",
  },
  gray: {
    bg: "bg-gray-500/10",
    border: "border-gray-400/30",
    hoverBorder: "hover:border-gray-400/60",
    accent: "text-gray-400",
    bar: "bg-gray-400",
    dot: "bg-gray-400",
  },
};

export default function Process() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page heading */}
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          How I Work
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          I practice agentic engineering — AI accelerates the implementation,
          but human judgment owns the beginning and the end. The longest stages
          in my process are the ones that require understanding: designing the
          right thing to build, and reading every line of code before it ships.
        </p>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          I also start with Claude Code skills. A skill for backend development
          that covers my design standards. A skill for frontend development that
          does the same. A skill for test-driven development. That way there are
          no questions about how to implement something — the code is
          consistent, and the file structure is predictable.
        </p>

        {/* Workflow stages */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-purple-400/40 via-teal-400/40 to-gray-400/40 hidden md:block" />

          <div className="space-y-6">
            {stages.map((stage, index) => {
              const colors = colorMap[stage.color as keyof typeof colorMap];
              return (
                <div key={index} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-6 w-4 h-4 rounded-full ${colors.dot} border-2 border-slate-900 hidden md:block z-10`}
                  />

                  {/* Stage card */}
                  <div
                    className={`${colors.bg} border ${colors.border} ${colors.hoverBorder} rounded-lg p-6 transition-all duration-300`}
                  >
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {stage.title}
                        </h3>
                        <p className={`text-sm ${colors.accent}`}>
                          {stage.subtitle}
                        </p>
                      </div>

                      {/* Time investment indicator */}
                      <div className="flex items-center gap-2 sm:min-w-[140px]">
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {stage.humanIntensity === "high"
                            ? "Deep focus"
                            : stage.humanIntensity === "medium"
                              ? "Moderate"
                              : "AI-driven"}
                        </span>
                        <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colors.bar} rounded-full ${stage.timeWidth} opacity-60`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback loop indicator */}
          <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
            <div className="h-px w-12 bg-gray-600" />
            <span className="text-sm italic">
              Learnings feed the next cycle
            </span>
            <div className="h-px w-12 bg-gray-600" />
          </div>
        </div>

        {/* Philosophy callout */}
        <div className="mt-16 border border-teal-400/20 rounded-lg p-8 bg-teal-500/5">
          <h3 className="text-xl font-bold text-teal-300 mb-4">
            Why this is my philosophy
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI can write code faster than I can. But writing code was never the
            hard part. The hard part is knowing what to build, understanding why
            it matters, and being confident that what shipped actually works. My
            process puts human judgment where it counts — at the design table
            and in the code review — while letting AI handle the implementation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every PR I merge, I can explain. Every test I approve, I understand
            what it catches. Every feature I ship, I know why it exists.
            That&apos;s not vibe coding. That&apos;s engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
