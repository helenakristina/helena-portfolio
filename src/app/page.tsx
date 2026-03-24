import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Helena Lucia — Senior Engineer',
  description: 'Senior software engineer returning to tech with LLM expertise, building ethical AI solutions.',
};

export default function Home() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Building Better
            </span>
            <br />
            <span className="text-white">with Ethics & Code</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Senior software engineer returning to tech with fresh perspective. Passionate about LLMs, healthcare innovation, and building products that actually help people.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              href="/meno"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              See My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border-2 border-teal-400 text-white font-semibold hover:bg-teal-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>

          <div className="pt-12 flex justify-center">
            <ChevronDown size={32} className="animate-bounce text-teal-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
