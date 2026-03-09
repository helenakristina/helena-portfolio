import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function PortfolioSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which sections are visible
      const sections = ['home', 'about', 'meno', 'learning', 'work', 'resume', 'contact'];
      const newVisibleSections = {};

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Element is visible when its top is less than 75% down the viewport
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
              {['home', 'about', 'meno', 'work', 'resume', 'contact'].map((item) => (
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
              {['home', 'about', 'meno', 'work', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-orange-400 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-teal-400 bg-clip-text text-transparent">
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
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 font-semibold hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-105"
              >
                See My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg border-2 border-teal-400 text-white font-semibold hover:bg-teal-400/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="pt-12 flex justify-center">
              <ChevronDown size={32} className="animate-bounce text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
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
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">The Journey</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-500/10 to-gray-500/10 border border-teal-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-gray-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-400">Before</h3>
              <p className="text-gray-300 leading-relaxed">
                Senior software engineer at companies like Flashpoint and Cox Automotive, building data solutions and leading technical teams. BS in Computer Science, Grace Hopper Scholar, experienced across the full stack—Python, cloud infrastructure, distributed systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Now</h3>
              <p className="text-gray-300 leading-relaxed">
                Took time for mental health—and came back intentional. Completed Coursera AI/ML courses, dove deep into LLM architectures, and built Meno, a full-stack healthcare app. Ready to contribute to ethical, sustainable engineering cultures.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-500/5 to-teal-500/5 border border-gray-400/30 rounded-lg p-8">
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="font-bold text-gray-400">Why this matters:</span> Mental health challenges taught me what sustainable work actually means. I care about building in environments where people can do their best work without burning out. I value ethics deeply—especially in AI, healthcare, and data. That's reflected in everything I build.
            </p>
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
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">Meno</span>
            <span className="text-2xl text-gray-400 block mt-2">A passion project solving a real problem</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-400/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-teal-400 mb-2">The Problem</h3>
              <p className="text-gray-300">Women navigating menopause are frequently dismissed by healthcare providers. Meno bridges that gap with education and tracking.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-gray-500/10 border border-teal-400/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-teal-400 mb-2">The Solution</h3>
              <p className="text-gray-300">Full-stack web app with symptom tracking, evidence-based AI chat (Retrieval Augmented Generation pipeline), and provider directory.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-gray-400/10 border border-gray-400/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-teal-400 mb-2">The Impact</h3>
              <p className="text-gray-300">Help women arrive at appointments prepared, informed, and empowered to advocate for themselves.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/50 border border-teal-400/30 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-teal-300">Tech Stack</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 font-semibold mb-2">Frontend</p>
                <p className="text-gray-300">SvelteKit + TypeScript, shadcn-svelte, Vercel hosting</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold mb-2">Backend</p>
                <p className="text-gray-300">FastAPI (Python), Railway hosting</p>
              </div>
              <div>
                <p className="text-teal-400 font-semibold mb-2">Data</p>
                <p className="text-gray-300">Supabase (PostgreSQL + pgvector + Auth)</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold mb-2">AI</p>
                <p className="text-gray-300">Claude API (production), OpenAI (dev), RAG pipeline</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-400">Main Demo Video</h3>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-orange-400/30 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Demo video coming soon</p>
                <p className="text-sm text-gray-500">Recording local instance with OBS</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/30 border border-teal-400/20 rounded-lg p-4">
              <h4 className="font-semibold text-teal-300 mb-1">Feature Reel 1</h4>
              <p className="text-gray-400 text-sm">Onboarding & symptom logging</p>
            </div>
            <div className="bg-slate-800/30 border border-teal-400/20 rounded-lg p-4">
              <h4 className="font-semibold text-gray-300 mb-1">Feature Reel 2</h4>
              <p className="text-gray-400 text-sm">Ask Meno AI chat</p>
            </div>
            <div className="bg-slate-800/30 border border-teal-400/20 rounded-lg p-4">
              <h4 className="font-semibold text-teal-300 mb-1">Feature Reel 3</h4>
              <p className="text-gray-400 text-sm">Dashboard & export</p>
            </div>
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

          <div className="mb-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-400/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-teal-300 mb-3">Coursera Specializations (2025-2026)</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>✓ <strong>Real-World AI for Everyone</strong> (Anthropic)</li>
              <li>✓ <strong>Generative AI Software Engineering</strong> (Vanderbilt University)</li>
              <li>✓ <strong>AI Agent Developer</strong> (Vanderbilt University)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-400/30 rounded-lg p-6 hover:border-blue-400/50 transition-all">
              <h3 className="font-bold text-lg text-teal-300 mb-2">14+ Advanced Courses (Perfect Scores)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Claude Code: Software Engineering with Generative AI Agents (100%) • AI Fundamentals with Claude (100%) • Trustworthy Generative AI (100%) • Introduction to Model Context Protocol (100%) • Vibe Coding with Claude Code (100%) • OpenAI GPTs: Custom AI Assistants (100%) • AI Agents & Agentic AI Architecture (100%) • Plus 7 additional courses at 90%+ grades</p>
            </div>

            <div className="bg-gradient-to-r from-gray-500/10 to-gray-400/10 border border-gray-400/30 rounded-lg p-6 hover:border-gray-400/50 transition-all">
              <h3 className="font-bold text-lg text-gray-300 mb-2">Focus Areas</h3>
              <p className="text-gray-300 text-sm">LLM architectures • Agentic AI • Prompt engineering • Claude API integration • Responsible AI • Model Context Protocol • Modern AI development practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Work Section */}
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">Selected Work</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-teal-500/5 to-gray-500/5 border border-teal-400/30 rounded-lg p-8 hover:border-gray-400/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Flashpoint | Senior Engineer & Tech Lead</h3>
                  <p className="text-gray-400 font-semibold">Nov 2019 – Oct 2021</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Led mission-critical infrastructure for enterprise security. Owned the Compromised Credentials Monitoring system (alerts to 35B+ breach records). Led data warehouse cleansing initiative across 40TB of data.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">GCP</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Elasticsearch</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">BigQuery</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">K8s</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border border-teal-400/30 rounded-lg p-8 hover:border-cyan-400/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Cox Automotive | Senior Engineer – Data Solutions</h3>
                  <p className="text-gray-400 font-semibold">May 2017 – May 2019</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Built integrative data solutions across 6+ subsidiaries (Kelly Blue Book, Manheim, AutoTrader). Enabled Maryland MVA to reduce safety recall rates by uniting fragmented data sources. Designed neural networks for vehicle valuations achieving superior accuracy.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Plotly</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-500/5 to-gray-400/5 border border-gray-400/30 rounded-lg p-8 hover:border-gray-400/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Intel | Software Engineer – Data & Analytics</h3>
                  <p className="text-gray-400 font-semibold">2012 – 2016</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Started as intern, grew into data specialist. Mapped Intel's entire ecosystem using graph databases for emergency planning. Worked across Hadoop, Elasticsearch, Neo4J, gaining breadth in data infrastructure.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Neo4J</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Hadoop</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">C#/.NET</span>
              </div>
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
            <span className="bg-gradient-to-r from-teal-400 to-gray-400 bg-clip-text text-transparent">Resume</span>
          </h2>

          <div className="bg-gradient-to-br from-slate-800/30 to-teal-900/30 border border-teal-400/30 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Helena Lucia</h3>
              <p className="text-gray-300 mb-2">Senior Software Engineer | Python Data Solutions | LLM/AI Systems</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>📧 helenalucia@fastmail.com</span>
                <span>📱 (952) 686-3189</span>
                <span>🔗 linkedin.com/in/helena-lucia</span>
              </div>
            </div>

            <div className="border-t border-teal-400/30 pt-6">
              <h4 className="text-lg font-bold text-gray-400 mb-3">Core Skills</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Python 3.9+ • Data Analysis & ML (Pandas, NumPy, TensorFlow, Keras) • LLM Systems (Claude API, RAG, vector embeddings) • Data Visualization (Plotly, Matplotlib, Bokeh) • Backend APIs (FastAPI, Flask) • Cloud Platforms (AWS, GCP, Supabase) • Infrastructure (Docker, Kubernetes, Terraform) • Databases (PostgreSQL, Elasticsearch, Neo4J) • Full-Stack Development (SvelteKit) • Leadership & Mentorship
              </p>
            </div>

            <div className="mt-6 border-t border-teal-400/30 pt-6">
              <h4 className="text-lg font-bold text-gray-400 mb-3">Education</h4>
              <p className="text-gray-300 font-semibold">BS Computer Science, Washington State University (2014)</p>
              <p className="text-gray-400 text-sm">Chancellor's Award | Grace Hopper Scholar | Cum Laude</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-4">View detailed resume as PDF or scroll up for full career timeline</p>
              <a href="/helena-lucia-resume.pdf" download className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 font-semibold hover:shadow-lg hover:shadow-gray-500/50 transition-all inline-flex items-center gap-2">
                <Download size={18} />
                Download Full Resume
              </a>
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
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-teal-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>

          <p className="text-gray-300 text-lg mb-12">
            Interested in discussing LLMs, healthcare tech, sustainable engineering cultures, or just want to chat? I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:helenalucia@fastmail.com"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 font-semibold hover:shadow-lg hover:shadow-gray-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/helena-lucia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-gray-400 font-semibold hover:bg-gray-400/10 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/helenakristina"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-teal-400 font-semibold hover:bg-teal-400/10 transition-all flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Currently looking for interesting engineering problems in ethical organizations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-500/20 py-8 px-4 text-center text-gray-400">
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
          animation: fade-in 0.8s ease-out;
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
