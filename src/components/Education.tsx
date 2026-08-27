import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-subtle-light dark:bg-subtle-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight text-typography-light dark:text-typography-dark">
          การศึกษา (Education)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-card dark:shadow-card-dark border border-black/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand-dark/10 text-brand dark:text-brand-dark flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-typography-light dark:text-typography-dark">
                  {item.degree}
                </h3>
                <p className="text-sm text-typography-light/70 dark:text-typography-dark/70 leading-relaxed">
                  {item.institution} ({item.years})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

