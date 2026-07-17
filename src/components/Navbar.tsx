'use client';

import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const routes = [
  { label: 'home', path: '/' },
  { label: 'meno', path: '/meno' },
  { label: 'learning', path: '/learning' },
  { label: 'work', path: '/work' },
  { label: 'process', path: '/process' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-white tracking-tight">
            Helena Lucia
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {routes.map(({ label, path }, idx) => (
              <Fragment key={path}>
                {idx > 0 && (
                  <span className="text-accent select-none" aria-hidden="true">/</span>
                )}
                <Link
                  href={path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? 'text-accent'
                      : 'text-ink-muted hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </Fragment>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-ink-muted hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border-subtle pt-4 space-y-1">
            {routes.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-2 py-2 text-sm transition-colors ${
                  isActive(path)
                    ? 'text-accent font-medium'
                    : 'text-ink-muted hover:text-white'
                }`}
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
