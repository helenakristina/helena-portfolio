'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">The Journey</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-teal-300">Before</h3>
              <p className="text-gray-300 leading-relaxed">
                Senior software engineer at companies like Flashpoint and Cox Automotive, building data solutions and leading technical teams. BS in Computer Science, Grace Hopper Scholar, experienced across the full stack.
              </p>
            </div>
          </div>

          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">Now</h3>
              <p className="text-gray-300 leading-relaxed">
                Took time for mental health—and came back intentional. Completed 3 Coursera specializations with 14+ courses, built Meno, a full-stack healthcare app. Ready for ethical, sustainable engineering cultures.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 group-hover:border-teal-400/50 transition-all duration-300">
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="font-bold text-teal-300">Why this matters:</span> Mental health challenges taught me what sustainable work actually means. I care about building in environments where people can do their best work without burning out. I value ethics deeply—especially in AI and healthcare. That's reflected in everything I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
