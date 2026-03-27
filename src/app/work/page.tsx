'use client';

import { useState } from 'react';
import { careerEvents } from '@/data/careerEvents';
import { useMountAnimation } from '@/hooks/useMountAnimation';
import { Download } from 'lucide-react';

export default function Work() {
  const isVisible = useMountAnimation();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-[opacity,transform] duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Career Journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {careerEvents.map((event, idx) => (
              <div
                key={event.company}
                className="flex md:even:flex-row-reverse gap-8 items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${idx * 100}ms`,
                  transition: 'opacity 0.6s ease-out',
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center w-1/2">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${event.color} border-4 border-slate-950 relative z-10`}></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <button
                    onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                    className="w-full group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 cursor-pointer ${expandedJob === idx ? 'border-teal-400/50 bg-white/15' : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{event.company}</h3>
                          <p className={`text-sm font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>{event.year}</p>
                        </div>
                      </div>
                      <p className="text-teal-300 font-semibold mb-2">{event.role}</p>
                      <p className="text-gray-400 text-sm">{event.highlight}</p>

                      {expandedJob === idx && (
                        <div className="mt-4 pt-4 border-t border-white/20 text-gray-300 text-sm animate-fade-in text-left">
                          <p>{event.detail}</p>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
          </h3>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Helena Lucia</h4>
                <p className="text-gray-300 mb-2">Senior Software Engineer | Data Solutions | LLM/AI Systems</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>📧 helenalucia@fastmail.com</span>
                  <span>📱 (952) 686-3189</span>
                  <span>🔗 linkedin.com/in/helena-lucia</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h5 className="text-lg font-bold text-teal-400 mb-3">Core Skills</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Python 3.9+ • Data Analysis & ML (Pandas, NumPy, TensorFlow, Keras) • LLM Systems (Claude API, RAG, vector embeddings) • Data Visualization (Plotly, Matplotlib, Bokeh) • Backend APIs (FastAPI, Flask) • Cloud Platforms (AWS, GCP, Supabase) • Infrastructure (Docker, Kubernetes, Terraform) • Databases (PostgreSQL, Elasticsearch, Neo4J) • Full-Stack Development (SvelteKit, Typescript) • Leadership & Mentorship
                </p>
              </div>

              <div className="mt-6 border-t border-white/20 pt-6">
                <h5 className="text-lg font-bold text-cyan-400 mb-3">Education</h5>
                <p className="text-gray-300 font-semibold">BS Computer Science, Washington State University (2014)</p>
                <p className="text-gray-400 text-sm">Chancellor's Award | Grace Hopper Scholar | Cum Laude</p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">View detailed resume as PDF</p>
                <a href="/helena-lucia-resume.pdf" download className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all inline-flex items-center gap-2">
                  <Download size={18} />
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
