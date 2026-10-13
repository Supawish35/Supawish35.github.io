import React from 'react';
import { Code2, Cpu, Wrench, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { revealDelay } from '../hooks/useScrollReveal';

const iconMap = {
  braces: Code2,
  cpu: Cpu,
  tools: Wrench,
  users: Users,
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { skills } = t.portfolioData;

  const parseSkillTags = (items: string[]) => {
    return items.flatMap((item) =>
      item.split(/[,/]/).map((s) => s.trim()).filter(Boolean)
    );
  };

  return (
    <section id="skills" className="py-24 border-b border-stone-900/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-stone-900 dark:text-stone-100 mb-3">
            {t.ui.skills.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            {t.ui.skills.sectionSubtitle}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            const allChips = parseSkillTags(category.skills);

            return (
              <div
                key={category.title}
                data-reveal
                style={revealDelay(index)}
                className="p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-200 glass glass-hover"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl text-stone-700 dark:text-stone-300 glass-soft">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base font-heading text-stone-900 dark:text-stone-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {allChips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs sm:text-sm font-mono text-stone-700 dark:text-stone-300 glass-soft"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
