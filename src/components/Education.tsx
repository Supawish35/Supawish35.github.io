import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const { education } = t.portfolioData;

  return (
    <section id="education" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100 mb-3">
            {t.ui.education.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t.ui.education.sectionSubtitle}
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-card dark:shadow-card-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5 sm:mt-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="sm:text-right pl-14 sm:pl-0">
                <span className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {item.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
