import type { Metadata } from "next";
import { Mail, Linkedin, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Helena Lucia – Contact",
  description: "Get in touch with Helena Lucia – open to engineering work.",
};

export default function Contact() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6 text-balance">Let&apos;s Connect</h1>

        <p className="text-ink-muted text-lg mb-12 text-pretty">
          Interested in discussing LLMs, healthcare tech, sustainable
          engineering cultures, or just want to chat? I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:helenalucia@fastmail.com"
            className="px-8 py-3 bg-accent text-[var(--bg)] font-semibold hover:bg-accent-deep transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/helena-lucia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="px-8 py-3 border border-white/25 text-white font-semibold hover:border-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/helenakristina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
            className="px-8 py-3 border border-white/25 text-white font-semibold hover:border-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <p className="text-ink-muted text-sm">
          Currently looking for interesting engineering problems in purposeful
          organizations.
        </p>
      </div>
    </section>
  );
}
