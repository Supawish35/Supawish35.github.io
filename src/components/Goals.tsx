import React from 'react';
import { Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Goals: React.FC = () => {
  const { t } = useLanguage();
  const { careerInterest } = t.portfolioData;

  return (
    <section id="goals" className="py-24 border-b border-stone-900/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="relative overflow-hidden p-7 sm:p-10 lg:p-12 rounded-3xl glass">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="p-3 rounded-xl text-stone-700 dark:text-stone-300 glass-soft">
              <Target className="w-6 h-6 text-brand-ink" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-heading text-stone-900 dark:text-stone-100">
              {t.ui.goals.sectionTitle}
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
            {careerInterest}
          </p>
        </div>
      </div>
    </section>
  );
};
