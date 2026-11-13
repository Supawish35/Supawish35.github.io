import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MetricsStrip: React.FC = () => {
  const { language, t } = useLanguage();
  const projectsCount = String(t.portfolioData.projects.length).padStart(2, '0');
  const techCount = t.portfolioData.skills
    .slice(0, 2)
    .flatMap((g) => g.skills.flatMap((s) => s.split(',')))
    .length;

  const items =
    language === 'th'
      ? [
          { value: projectsCount, label: 'โปรเจกต์ที่เปิดใช้งานจริง' },
          { value: 'B2', label: 'ระดับภาษาอังกฤษ UDRU-ET' },
          { value: 'ปี 3', label: 'วิทยาการคอมพิวเตอร์' },
          { value: String(techCount), label: 'ภาษาและเครื่องมือที่ใช้' },
        ]
      : [
          { value: projectsCount, label: 'Live Web Applications' },
          { value: 'B2', label: 'English (UDRU-ET)' },
          { value: 'YR 3', label: 'Computer Science · UDRU' },
          { value: String(techCount), label: 'Languages & Tools' },
        ];

  return (
    <section aria-label="Highlights" className="border-y border-fg/10 bg-bg">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-fg/10">
        {items.map((item, idx) => (
          <div
            key={item.label}
            className={`px-4 py-8 sm:px-8 sm:py-10 ${
              idx >= 2 ? 'border-t border-fg/10 lg:border-t-0' : ''
            } ${idx % 2 === 1 ? 'border-l border-fg/10 lg:border-l-0' : ''}`}
          >
            <p className="stretch-wide text-4xl font-black leading-none tracking-[-0.02em] text-acid sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
