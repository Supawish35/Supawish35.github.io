import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="glass mx-3 sm:mx-5 mb-4 mt-6 rounded-3xl py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            &copy; {new Date().getFullYear()} Supawish Hanmontree. {t.ui.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-stone-500 dark:text-stone-400">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
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
