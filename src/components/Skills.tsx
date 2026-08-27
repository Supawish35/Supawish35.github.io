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

  const parseSkillTags = (items: string[]) => {
    return items.flatMap((item) =>
      item.split(/[,/]/).map((s) => s.trim()).filter(Boolean)
    );
  };

  return (
    <section id="skills" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100 mb-3">
            ทักษะความสามารถ (Skills)
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            ภาษาโปรแกรมมิ่ง เครื่องมือ และทักษะที่ใช้ในการทำงาน
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            const allChips = parseSkillTags(category.skills);

            return (
              <div
                key={category.title}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-card dark:shadow-card-dark flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base font-heading text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {allChips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs sm:text-sm font-mono bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70"
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
