'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { careerEvents } from '@/data/careerEvents';

export default function WorkTimeline() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-16 text-balance">Work</h1>

        {/* Timeline */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 bottom-8 w-px bg-border-subtle" />

          <div className="space-y-12">
            {careerEvents.map((event, idx) => {
              const isBreak = event.company === 'Learning & Growth';
              const isExpanded = expandedJob === idx;

              return (
                <div
                  key={idx}
                  className="relative animate-list-item"
                  style={{ "--stagger": `${idx * 60}ms` } as CSSProperties}
                >
                  <div
                    className={`absolute -left-10 top-[0.375rem] w-2 h-2 rounded-full ${
                      isBreak ? 'bg-border-subtle' : 'bg-accent'
                    }`}
                    style={{ transform: 'translateX(-50%)' }}
                  />

                  <p className="text-ink-muted text-xs mb-2">{event.year}</p>

                  <button
                    onClick={() => setExpandedJob(isExpanded ? null : idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`job-detail-${idx}`}
                    className="w-full text-left"
                  >
                    <div
                      className={`border border-border-subtle p-5 hover:border-white/40 transition-colors duration-200 ${
                        isExpanded ? 'border-white/40' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h2 className="text-lg font-bold text-white text-balance">
                            {event.company}
                          </h2>
                          <p
                            className={`text-sm mt-0.5 ${
                              isBreak
                                ? 'text-ink-muted italic'
                                : 'text-accent font-semibold'
                            }`}
                          >
                            {event.role}
                          </p>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 mt-1 text-accent transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <p className="text-ink-muted text-sm mt-3">
                        {event.highlight}
                      </p>

                      <div
                        id={`job-detail-${idx}`}
                        className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                        aria-hidden={!isExpanded}
                      >
                        <div className="overflow-hidden min-h-0">
                          <div className="mt-4 pt-4 border-t border-border-subtle">
                            <p className="text-ink-muted text-sm leading-relaxed text-pretty">
                              {event.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* PDF download */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <p className="text-ink-muted text-sm mb-4">Full resume as PDF</p>
          <a
            href="/helena-lucia-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[var(--bg)] font-semibold text-sm hover:bg-accent-deep transition-colors duration-200"
          >
            <Download size={16} />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
