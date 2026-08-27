import React from 'react';
import { Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Goals: React.FC = () => {
  const { t } = useLanguage();
  const { careerInterest } = t.portfolioData;

  return (
    <section id="goals" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-card dark:shadow-card-dark">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              <Target className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100">
              {t.ui.goals.sectionTitle}
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            {careerInterest}
          </p>
        </div>
      </div>
    </section>
  );
};
