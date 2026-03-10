import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function PortfolioSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState({});
  const [counters, setCounters] = useState({
    courses: 0,
    specializations: 0,
    years: 0,
  });
  const [expandedJob, setExpandedJob] = useState(null);

  // Counter animation effect
  useEffect(() => {
    if (visibleSections['learning']) {
      const interval = setInterval(() => {
        setCounters(prev => ({
          courses: Math.min(prev.courses + 1, 14),
          specializations: Math.min(prev.specializations + 1, 3),
          years: Math.min(prev.years + 1, 12),
        }));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [visibleSections['learning']]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'meno', 'learning', 'work', 'resume', 'contact'];
      const newVisibleSections = {};

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisibleSections[sectionId] = rect.top < window.innerHeight * 0.75;
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Career timeline data
  const careerEvents = [
    {
      year: '2012-2016',
      company: 'Intel',
      role: 'Software Engineer',
      color: 'from-blue-500 to-cyan-500',
      highlight: 'Started as intern, worked across data infrastructure'
    },
    {
      year: '2016-2017',
      company: 'Cylance',
      role: 'Software Engineer',
      color: 'from-purple-500 to-pink-500',
      highlight: 'Built security systems & forensics analytics'
    },
    {
      year: '2017-2019',
      company: 'Cox Automotive',
      role: 'Senior Engineer – Data Solutions',
      color: 'from-orange-500 to-yellow-500',
      highlight: 'Maryland MVA safety recalls, vehicle valuations AI'
    },
    {
      year: '2019-2021',
      company: 'Flashpoint',
      role: 'Senior Engineer / Tech Lead',
      color: 'from-teal-500 to-green-500',
      highlight: 'Compromised credentials monitoring at scale'
    },
    {
      year: '2021-2025',
      company: 'Learning & Growth',
      role: 'Taking Care of Myself',
      color: 'from-gray-400 to-gray-500',
      highlight: '3 Coursera specializations, built Meno, 14+ courses'
    },
    {
      year: '2025+',
      company: 'Return to Tech',
      role: 'Senior Engineer with LLM Expertise',
      color: 'from-teal-400 to-blue-400',
      highlight: 'Ready to build ethical AI solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-500 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-teal-400 bg-clip-text text-transparent">
              Helena Lucia
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'meno', 'learning', 'work', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-teal-500/20 pt-4 space-y-2">
              {['home', 'about', 'meno', 'learning', 'work', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-teal-400 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Building Better
              </span>
              <br />
              <span className="text-white">with Ethics & Code</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Senior software engineer returning to tech with fresh perspective. Passionate about LLMs, healthcare innovation, and building products that actually help people.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={() => scrollToSection('meno')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                See My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg border-2 border-teal-400 text-white font-semibold hover:bg-teal-400/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>

            <div className="pt-12 flex justify-center">
              <ChevronDown size={32} className="animate-bounce text-teal-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['about'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['about'] ? 'translateY(0)' : 'translateY(40px)'
        }}
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

      {/* Meno Section */}
      <section
        id="meno"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['meno'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['meno'] ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Meno</span>
            <span className="text-2xl text-gray-400 block mt-2">A passion project solving a real problem</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-lg font-bold text-cyan-300 mb-2">The Problem</h3>
                <p className="text-gray-300">Women navigating menopause are frequently dismissed by healthcare providers. Meno bridges that gap with education and tracking.</p>
              </div>
            </div>

            <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-lg font-bold text-purple-300 mb-2">The Solution</h3>
                <p className="text-gray-300">Full-stack web app with symptom tracking, evidence-based AI chat (Claude API), and provider directory.</p>
              </div>
            </div>

            <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-lg font-bold text-teal-300 mb-2">The Impact</h3>
                <p className="text-gray-300">Help women arrive at appointments prepared, informed, and empowered to advocate for themselves.</p>
              </div>
            </div>
          </div>

          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 group-hover:border-teal-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-teal-300">Tech Stack</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-teal-400 font-semibold mb-2">Frontend</p>
                  <p className="text-gray-300">SvelteKit + TypeScript, shadcn-svelte, Vercel</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold mb-2">Backend</p>
                  <p className="text-gray-300">FastAPI (Python), Railway</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold mb-2">Data</p>
                  <p className="text-gray-300">Supabase (PostgreSQL + pgvector)</p>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold mb-2">AI</p>
                  <p className="text-gray-300">Claude API, RAG pipeline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-300">Main Demo Video</h3>
            <div className="relative group backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl aspect-video flex items-center justify-center hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-center">
                <p className="text-gray-300 mb-2 font-semibold">Demo videos coming soon</p>
                <p className="text-sm text-gray-500">Recording local instance with OBS</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {['Onboarding & symptom logging', 'Ask Meno AI chat', 'Dashboard & export'].map((title, idx) => (
              <div key={idx} className="group relative backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h4 className="font-semibold text-teal-300 mb-1">Reel {idx + 1}</h4>
                  <p className="text-gray-400 text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section
        id="learning"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['learning'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['learning'] ? 'translateY(0)' : 'translateY(40px)'
        }}
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

      {/* Career Timeline Section */}
      <section
        id="work"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['work'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['work'] ? 'translateY(0)' : 'translateY(40px)'
        }}
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
                    visibleSections['work'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                    transition: 'opacity 0.6s ease-out'
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
                          <div className="mt-4 pt-4 border-t border-white/20 text-gray-300 text-sm animate-fade-in">
                            {idx === 0 && <p>Started as intern, worked across data infrastructure and ecosystem mapping with Neo4J and Elasticsearch.</p>}
                            {idx === 1 && <p>Built highly-available async API and security forensics analytics tools protecting enterprise endpoints.</p>}
                            {idx === 2 && <p>Led Maryland MVA vehicle recall integration (20+ APIs), designed neural networks for vehicle valuations, served 6+ subsidiaries.</p>}
                            {idx === 3 && <p>Owned Compromised Credentials Monitoring (35B+ records), led data warehouse cleansing (40TB), founded company DEI committee.</p>}
                            {idx === 4 && <p>Completed 3 Coursera specializations with 14+ advanced courses (9 perfect scores). Built Meno, a full-stack healthcare application with Claude API integration and RAG pipelines.</p>}
                            {idx === 5 && <p>Ready to contribute ethical AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology.</p>}
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

      {/* Resume Section */}
      <section
        id="resume"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['resume'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['resume'] ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
          </h2>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Helena Lucia</h3>
                <p className="text-gray-300 mb-2">Senior Software Engineer | Data Solutions | LLM/AI Systems</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>📧 helenalucia@fastmail.com</span>
                  <span>📱 (952) 686-3189</span>
                  <span>🔗 linkedin.com/in/helena-lucia</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-bold text-teal-400 mb-3">Core Skills</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Python 3.9+ • Data Analysis & ML (Pandas, NumPy, TensorFlow, Keras) • LLM Systems (Claude API, RAG, vector embeddings) • Data Visualization (Plotly, Matplotlib, Bokeh) • Backend APIs (FastAPI, Flask) • Cloud Platforms (AWS, GCP, Supabase) • Infrastructure (Docker, Kubernetes, Terraform) • Databases (PostgreSQL, Elasticsearch, Neo4J) • Full-Stack Development (SvelteKit, Typescript) • Leadership & Mentorship
                </p>
              </div>

              <div className="mt-6 border-t border-white/20 pt-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-3">Education</h4>
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
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 scroll-mt-16 ${
          visibleSections['contact'] ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: visibleSections['contact'] ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-12">
            Interested in discussing LLMs, healthcare tech, sustainable engineering cultures, or just want to chat? I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:helenalucia@fastmail.com"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/helena-lucia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-teal-400 font-semibold hover:bg-teal-400/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/helenakristina"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Currently looking for interesting engineering problems in ethical organizations. Open to full-time, contract, or project-based work.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-teal-500/20 py-8 px-4 text-center text-gray-400">
        <p>Built with React, Tailwind, and ❤️ | Deployed on Vercel</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
