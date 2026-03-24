import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meno — Healthcare App by Helena Lucia',
  description: 'A full-stack healthcare app with symptom tracking, AI chat (Claude API), and provider directory.',
};

export default function Meno() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Meno</span>
          <span className="text-2xl text-gray-400 block mt-2">A passion project solving a real problem</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-cyan-300 mb-2">The Problem</h3>
              <p className="text-gray-300">Women navigating menopause are frequently dismissed by healthcare providers. Meno bridges that gap with education and tracking.</p>
            </div>
          </div>

          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-purple-300 mb-2">The Solution</h3>
              <p className="text-gray-300">Full-stack web app with symptom tracking, evidence-based AI chat (Claude API), and provider directory.</p>
            </div>
          </div>

          <div className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-teal-300 mb-2">The Impact</h3>
              <p className="text-gray-300">Help women arrive at appointments prepared, informed, and empowered to advocate for themselves.</p>
            </div>
          </div>
        </div>

        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 group-hover:border-teal-400/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-teal-300">Tech Stack</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-teal-400 font-semibold mb-2">Frontend</p>
                <p className="text-gray-300">SvelteKit + TypeScript, shadcn-svelte, Vercel</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold mb-2">Backend</p>
                <p className="text-gray-300">FastAPI (Python), Railway</p>
              </div>
              <div>
                <p className="text-purple-400 font-semibold mb-2">Data</p>
                <p className="text-gray-300">Supabase (PostgreSQL + pgvector)</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-2">AI</p>
                <p className="text-gray-300">Claude API, RAG pipeline</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-teal-300">Main Demo Video</h3>
          <div className="relative group backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl aspect-video flex items-center justify-center hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300">
            <div className="text-center">
              <p className="text-gray-300 mb-2 font-semibold">Demo videos coming soon</p>
              <p className="text-sm text-gray-500">Recording local instance with OBS</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {['Onboarding & symptom logging', 'Ask Meno AI chat', 'Dashboard & export'].map((title, idx) => (
            <div key={idx} className="group relative backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h4 className="font-semibold text-teal-300 mb-1">Reel {idx + 1}</h4>
                <p className="text-gray-400 text-sm">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
