import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { revealDelay } from '../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const { education } = t.portfolioData;

  return (
    <section id="education" className="py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-slate-900 dark:text-slate-100 mb-3">
            {t.ui.education.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.ui.education.sectionSubtitle}
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              style={revealDelay(idx)}
              className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-card dark:shadow-card-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:-translate-y-0.5 hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex-shrink-0 mt-0.5 sm:mt-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="sm:text-right pl-14 sm:pl-0">
                <span className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
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
