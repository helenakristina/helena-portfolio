'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-ink-muted mb-8">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-accent text-[var(--bg)] font-semibold hover:bg-accent-deep transition-colors duration-200"
      >
        Try again
      </button>
    </div>
  );
}
