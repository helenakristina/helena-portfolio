'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-8">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
      >
        Try again
      </button>
    </div>
  );
}
