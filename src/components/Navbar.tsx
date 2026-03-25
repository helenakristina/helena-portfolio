'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const routes = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'meno', path: '/meno' },
  { label: 'learning', path: '/learning' },
  { label: 'work', path: '/work' },
  { label: 'process', path: '/process' },
  { label: 'resume', path: '/resume' },
  { label: 'contact', path: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-teal-400 bg-clip-text text-transparent"
          >
            Helena Lucia
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {routes.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`capitalize font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-teal-500/20 pt-4 space-y-2">
            {routes.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-teal-400 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
