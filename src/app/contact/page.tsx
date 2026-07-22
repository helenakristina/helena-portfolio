import type { Metadata } from "next";

import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Helena Lucia – Contact",
  description:
    "Helena Lucia is a senior engineer building AI-powered products, with deep interest in healthcare. Selective about what she builds and who she builds it with.",
};

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1
            id="contact-title"
            className="text-4xl font-bold text-foreground mb-6 text-balance animate-fade-in"
          >
            Let&apos;s see if this is a fit.
          </h1>

          <p
            className="text-ink-muted text-lg text-pretty max-w-prose mx-auto animate-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            I&apos;m looking for a full-time engineering role building AI-powered
            products. Healthcare is where I have the deepest interest, but any
            team doing serious, deliberate engineering has my attention. If you
            need someone who can ship and explain the work, reach out.
          </p>
        </div>

        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "180ms" }}
        >
          <p className="text-xs text-ink-muted mb-1.5">Or email me:</p>
          <a
            href="mailto:helenalucia@fastmail.com"
            className="min-h-[44px] inline-flex items-center text-ink-muted text-sm underline decoration-ink-muted/40 underline-offset-4 hover:text-foreground hover:decoration-foreground/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
          >
            helenalucia@fastmail.com
          </a>
        </div>

        <div className="animate-fade-in-place" style={{ animationDelay: "240ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
