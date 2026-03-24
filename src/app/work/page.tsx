'use client';

import { useState, useEffect } from 'react';

const careerEvents = [
  {
    year: '2012-2016',
    company: 'Intel',
    role: 'Software Engineer',
    color: 'from-blue-500 to-cyan-500',
    highlight: 'Started as intern, worked across data infrastructure',
    detail: 'Started as intern, worked across data infrastructure and ecosystem mapping with Neo4J and Elasticsearch.',
  },
  {
    year: '2016-2017',
    company: 'Cylance',
    role: 'Software Engineer',
    color: 'from-purple-500 to-pink-500',
    highlight: 'Built security systems & forensics analytics',
    detail: 'Built highly-available async API and security forensics analytics tools protecting enterprise endpoints.',
  },
  {
    year: '2017-2019',
    company: 'Cox Automotive',
    role: 'Senior Engineer – Data Solutions',
    color: 'from-orange-500 to-yellow-500',
    highlight: 'Maryland MVA safety recalls, vehicle valuations AI',
    detail: 'Led Maryland MVA vehicle recall integration (20+ APIs), designed neural networks for vehicle valuations, served 6+ subsidiaries.',
  },
  {
    year: '2019-2021',
    company: 'Flashpoint',
    role: 'Senior Engineer / Tech Lead',
    color: 'from-teal-500 to-green-500',
    highlight: 'Compromised credentials monitoring at scale',
    detail: 'Owned Compromised Credentials Monitoring (35B+ records), led data warehouse cleansing (40TB), founded company DEI committee.',
  },
  {
    year: '2021-2025',
    company: 'Learning & Growth',
    role: 'Taking Care of Myself',
    color: 'from-gray-400 to-gray-500',
    highlight: '3 Coursera specializations, built Meno, 14+ courses',
    detail: 'Completed 3 Coursera specializations with 14+ advanced courses (9 perfect scores). Built Meno, a full-stack healthcare application with Claude API integration and RAG pipelines.',
  },
  {
    year: '2025+',
    company: 'Return to Tech',
    role: 'Senior Engineer with LLM Expertise',
    color: 'from-teal-400 to-blue-400',
    highlight: 'Ready to build ethical AI solutions',
    detail: 'Ready to contribute ethical AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology.',
  },
];

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
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
                key={idx}
                className={`flex md:even:flex-row-reverse gap-8 items-center ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
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
      </div>
    </section>
  );
}
