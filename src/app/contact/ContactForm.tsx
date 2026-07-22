"use client";

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const ENDPOINT = "https://formspree.io/f/mykrpnyl";

const fieldClass =
  "w-full bg-white/5 border border-border-subtle px-4 py-2.5 text-foreground placeholder:text-ink-muted focus:border-accent/50 focus-visible:outline-none focus:ring-2 focus:ring-accent/40 transition-[border-color,box-shadow] duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (status === "error" && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [status]);

  useEffect(() => () => { abortRef.current?.abort(); }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    if (String(data.get("message") ?? "").trim().length < 10) {
      setErrorMsg("Tell me a bit more about what you're working on.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const controller = new AbortController();
    abortRef.current = controller;
    const timeoutId = setTimeout(() => controller.abort(), 10_000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        setStatus("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          res.status === 429
            ? "Too many messages sent. Please try again in a few minutes."
            : (json.error ?? "Couldn't send your message. Please try again.")
        );
        setStatus("error");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setErrorMsg("Took too long to send. Check your connection and try again.");
      } else {
        setErrorMsg("Could not connect. Check your internet and try again.");
      }
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <>
      <p aria-live="polite" className="sr-only">
        {isSubmitting ? "Sending your message…" : ""}
      </p>

      {status === "success" ? (
        <div
          role="status"
          className="animate-fade-in flex flex-col items-center gap-3 py-12"
        >
          <CheckCircle
            className="text-accent animate-[scale-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none motion-reduce:[scale:1]"
            size={32}
            aria-hidden="true"
          />
          <p
            className="text-foreground font-semibold animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            Got it.
          </p>
          <p
            className="text-ink-muted text-sm animate-fade-in"
            style={{ animationDelay: "250ms" }}
          >
            I&apos;ll read it and reply.
          </p>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setErrorMsg(""); }}
            className="animate-fade-in min-h-[44px] px-4 inline-flex items-center justify-center text-xs text-ink-muted hover:text-foreground transition-colors duration-200"
            style={{ animationDelay: "350ms" }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-8 text-left space-y-4"
          aria-label="Contact Helena Lucia"
        >
          <div>
            <label htmlFor="cf-name" className="block text-sm text-ink-muted mb-1.5">
              Name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoFocus
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="cf-email" className="block text-sm text-ink-muted mb-1.5">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="cf-message" className="block text-sm text-ink-muted mb-1.5">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              placeholder="What are you working on?"
              className={`${fieldClass} resize-none`}
              disabled={isSubmitting}
              onKeyDown={(e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                  e.currentTarget.form?.requestSubmit();
                }
              }}
            />
            <p className="text-xs text-ink-muted text-right mt-1 select-none hidden sm:block">
              ⌘↵ to send
            </p>
          </div>

          {status === "error" && errorMsg && (
            <div
              ref={errorRef}
              role="alert"
              className="animate-fade-in flex items-start gap-3 text-sm text-foreground bg-white/8 border border-error/40 px-4 py-2.5"
            >
              <AlertCircle
                size={16}
                className="text-error mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <p>{errorMsg}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-accent text-background font-semibold hover:bg-accent-deep hover:-translate-y-px hover:shadow-[0_4px_20px_oklch(87%_0.055_8_/_0.25)] active:scale-[0.98] active:shadow-none disabled:translate-y-0 disabled:shadow-none transition duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" />
                  Send it
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
