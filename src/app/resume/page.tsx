import type { Metadata } from 'next';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Helena Lucia — Resume',
  description: 'Senior Software Engineer with 12+ years experience in data solutions, LLM systems, and full-stack development.',
};

export default function Resume() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
        </h2>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Helena Lucia</h3>
              <p className="text-gray-300 mb-2">Senior Software Engineer | Data Solutions | LLM/AI Systems</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>📧 helenalucia@fastmail.com</span>
                <span>📱 (952) 686-3189</span>
                <span>🔗 linkedin.com/in/helena-lucia</span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-teal-400 mb-3">Core Skills</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Python 3.9+ • Data Analysis & ML (Pandas, NumPy, TensorFlow, Keras) • LLM Systems (Claude API, RAG, vector embeddings) • Data Visualization (Plotly, Matplotlib, Bokeh) • Backend APIs (FastAPI, Flask) • Cloud Platforms (AWS, GCP, Supabase) • Infrastructure (Docker, Kubernetes, Terraform) • Databases (PostgreSQL, Elasticsearch, Neo4J) • Full-Stack Development (SvelteKit, Typescript) • Leadership & Mentorship
              </p>
            </div>

            <div className="mt-6 border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-3">Education</h4>
              <p className="text-gray-300 font-semibold">BS Computer Science, Washington State University (2014)</p>
              <p className="text-gray-400 text-sm">Chancellor's Award | Grace Hopper Scholar | Cum Laude</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-4">View detailed resume as PDF</p>
              <a href="/helena-lucia-resume.pdf" download className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all inline-flex items-center gap-2">
                <Download size={18} />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
