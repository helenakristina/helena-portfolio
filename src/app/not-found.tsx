import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helena Lucia — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-8xl font-bold text-teal-400 mb-4">404</h1>
      <p className="text-gray-300 text-xl mb-8">Page not found.</p>
      <Link
        href="/"
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
