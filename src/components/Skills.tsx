import React from 'react';
import { Code2, Cpu, Wrench, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  braces: Code2,
  cpu: Cpu,
  tools: Wrench,
  users: Users,
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-subtle-light dark:bg-subtle-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight text-typography-light dark:text-typography-dark">
          ทักษะ (Skills)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => {
            const IconComponent = iconMap[category.icon];

            return (
              <div
                key={category.title}
                className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-card dark:shadow-card-dark border border-black/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="p-4 rounded-2xl bg-brand/10 dark:bg-brand-dark/10 text-brand dark:text-brand-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-typography-light dark:text-typography-dark">
                  {category.title}
                </h3>

                <ul className="space-y-2 text-sm text-typography-light/80 dark:text-typography-dark/80 font-normal">
                  {category.skills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

