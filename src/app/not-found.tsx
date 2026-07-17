import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helena Lucia – Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
      <p className="text-ink-muted text-xl mb-8">Page not found.</p>
      <Link
        href="/"
        className="px-8 py-3 bg-accent text-[var(--bg)] font-semibold hover:bg-accent-deep transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
