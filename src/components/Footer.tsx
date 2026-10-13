import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-12 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Supawish Hanmontree. {t.ui.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
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
