import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Helena Lucia - Senior Engineer",
  description:
    "Senior software engineer returning to tech with LLM expertise, building AI solutions.",
};

export default function Home() {
  return (
    <>
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"></span>
            <br />
            <span className="text-white">Building What Matters</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Senior software engineer. Agentic engineering practitioner. Building
            AI tools for the billion women whose doctors don&apos;t understand
            menopause.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              href="/process"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              How I Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border-2 border-teal-400 text-white font-semibold hover:bg-teal-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>

          <div className="pt-12 flex justify-center">
            <ChevronDown size={32} className="animate-bounce text-teal-400" />
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a senior software engineer with a background in data
              engineering and large-scale systems. I started at Intel as an
              intern, built my way up through Cylance, Cox Automotive, and
              Flashpoint, and at every stop I was doing the same thing: unifying
              messy data sources, building pipelines, and making information
              usable. At Cox Automotive, I connected 20+ APIs to help the
              Maryland DMV identify unrepaired safety recalls. At Flashpoint, I
              built a real-time breach detection system spanning 35 billion
              records.
              <br />
              <br />
              In 2021, I stepped away from tech. I traveled, took care of
              myself, and eventually started rebuilding, this time with
              intention. I completed three Coursera AI specializations covering
              LLM architectures, agentic AI, and responsible AI development.
              Then I started building.
              <br />
              <br />
              Meno is a full-stack healthcare application that helps women
              navigate menopause, an experience that affects over a billion
              women worldwide, most of whom are dismissed by a healthcare system
              that doesn&apos;t understand them. Meno combines symptom tracking,
              appointment preparation, a provider directory, and an AI-powered
              Q&amp;A tool backed by a RAG pipeline searching 49,000 research
              documents. I built it using an agentic engineering workflow with
              Claude Code, and I&apos;m actively developing it toward
              launch.{" "}
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 group-hover:border-teal-400/50 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed">
              <span className="font-bold text-teal-300">
                What I&apos;m looking for:{" "}
              </span>
              I want to work on problems where technology genuinely helps
              people, especially in healthcare, where the gap between what AI
              can do and what patients actually receive is enormous. I bring a
              decade of data engineering experience, hands-on LLM and RAG
              expertise, and a disciplined process for building with AI without
              losing understanding of the codebase.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
