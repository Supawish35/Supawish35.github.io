import React from 'react';
import { navItems } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-12 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Supawish Hanmontree. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
