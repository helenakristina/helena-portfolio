import type { Metadata } from 'next';
import { Mail, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Helena Lucia — Contact',
  description: 'Get in touch with Helena Lucia — open to full-time, contract, or project-based engineering work.',
};

export default function Contact() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
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
  );
}
