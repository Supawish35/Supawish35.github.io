import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { revealDelay } from '../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const { education } = t.portfolioData;

  return (
    <section id="education" className="py-24 border-b border-stone-900/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-stone-900 dark:text-stone-100 mb-3">
            {t.ui.education.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
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
              className="p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:-translate-y-0.5 transition-all duration-200 glass glass-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl text-stone-700 dark:text-stone-300 flex-shrink-0 mt-0.5 sm:mt-0 glass-soft">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-stone-900 dark:text-stone-100">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="sm:text-right pl-14 sm:pl-0">
                <span className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium text-stone-700 dark:text-stone-300 glass-soft">
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
