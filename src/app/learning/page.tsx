'use client';

import { useState, useEffect } from 'react';

export default function Learning() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    courses: 0,
    specializations: 0,
    years: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCounters(prev => ({
        courses: Math.min(prev.courses + 1, 14),
        specializations: Math.min(prev.specializations + 1, 3),
        years: Math.min(prev.years + 1, 12),
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Learning & Growth</span>
        </h2>

        {/* Counter Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
              <div className="text-5xl font-bold text-teal-400 mb-2">{counters.specializations}</div>
              <p className="text-gray-300">Specializations</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">{counters.courses}+</div>
              <p className="text-gray-300">Advanced Courses</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-2">{counters.years}+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="mb-8 group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <h3 className="text-xl font-bold text-teal-300 mb-3">Coursera Specializations (2025-2026)</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>✓ <strong>Real-World AI for Everyone</strong> (Anthropic)</li>
              <li>✓ <strong>Generative AI Software Engineering</strong> (Vanderbilt University)</li>
              <li>✓ <strong>AI Agent Developer</strong> (Vanderbilt University)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <h3 className="font-bold text-lg text-teal-300 mb-2">9 Perfect Score Courses (100%)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Claude Code: Software Engineering with Generative AI Agents • AI Fundamentals with Claude • Trustworthy Generative AI • Introduction to Model Context Protocol • Vibe Coding with Claude Code • OpenAI GPTs • AI Agents & Agentic AI Architecture • Plus more at 90%+ grades</p>
            </div>
          </div>

          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <h3 className="font-bold text-lg text-cyan-300 mb-2">Focus Areas</h3>
              <p className="text-gray-300 text-sm">LLM architectures • Agentic AI • Prompt engineering • Claude API integration • Responsible AI • Model Context Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
