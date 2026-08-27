import React from 'react';
import { Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Goals: React.FC = () => {
  const { careerInterest } = portfolioData;

  return (
    <section id="goals" className="py-20 bg-body-light dark:bg-body-dark text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light dark:bg-surface-dark p-8 sm:p-12 rounded-3xl shadow-card dark:shadow-card-dark border border-black/5 dark:border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-brand/10 dark:bg-brand-dark/10 text-brand dark:text-brand-dark flex items-center justify-center mx-auto mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-typography-light dark:text-typography-dark">
            ความสนใจในสายอาชีพ (Career Interest)
          </h2>
          <p className="text-lg sm:text-xl text-typography-light/80 dark:text-typography-dark/80 max-w-2xl mx-auto leading-relaxed">
            {careerInterest}
          </p>
        </div>
      </div>
    </section>
  );
};

