import type { Metadata } from "next";
import { Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Helena Lucia – Contact",
  description:
    "Helena Lucia is a senior engineer in healthcare AI and agentic systems, open to the right full-time role.",
};

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1
          id="contact-title"
          className="text-4xl font-bold text-white mb-6 text-balance"
        >
          Get In Touch
        </h1>

        <p className="text-ink-muted text-lg mb-12 text-pretty max-w-prose mx-auto">
          I&apos;m looking for a full-time engineering role in healthcare AI or
          agentic systems. If you&apos;re building something serious in that
          space and need an engineer who can ship and explain the work, reach
          out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
          <a
            href="mailto:helenalucia@fastmail.com"
            aria-label="Email Helena Lucia"
            className="px-8 py-3 bg-accent text-[var(--bg)] font-semibold hover:bg-accent-deep transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Mail size={20} aria-hidden="true" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/helena-lucia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="px-8 py-3 border border-white/25 text-white font-semibold hover:border-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Linkedin size={20} aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <p className="text-ink-muted text-sm select-all">
          helenalucia@fastmail.com
        </p>
      </div>
    </section>
  );
}
