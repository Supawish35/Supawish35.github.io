import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-12 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Supawish Hanmontree. {t.ui.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
            {t.navItems.map((item) => (
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
