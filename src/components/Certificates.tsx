import React from 'react';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const { certificates } = portfolioData;

  return (
    <section id="activities" className="py-20 bg-body-light dark:bg-body-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight text-typography-light dark:text-typography-dark">
          ใบรับรอง (Certificate)
        </h2>

        <div className="max-w-3xl mx-auto">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-black/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 group"
            >
              <div className="overflow-hidden bg-gray-100 dark:bg-gray-800 p-2 sm:p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-6 text-center">
                <div className="inline-flex items-center gap-2 text-xl font-bold text-typography-light dark:text-typography-dark">
                  <Award className="w-6 h-6 text-brand dark:text-brand-dark" />
                  <span>{cert.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

