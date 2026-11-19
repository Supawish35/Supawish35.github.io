import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MetricsStrip: React.FC = () => {
  const { language, t } = useLanguage();
  const liveCount = String(t.portfolioData.projects.length).padStart(2, '0');
  const totalWorkCount = String(
    t.portfolioData.projects.length + t.portfolioData.moreWork.length
  ).padStart(2, '0');
  const techCount = t.portfolioData.skills
    .slice(0, 2)
    .flatMap((g) => g.skills.flatMap((s) => s.split(',')))
    .length;

  const items =
    language === 'th'
      ? [
          { value: liveCount, label: 'เว็บแอปที่เปิดใช้งานจริง', href: '#projects' },
          { value: totalWorkCount, label: 'ผลงานและแล็บวิศวกรรมบน GitHub', href: '#more-work' },
          { value: 'B2', label: 'ระดับภาษาอังกฤษ UDRU-ET', href: '#education' },
          { value: String(techCount), label: 'ภาษาและเครื่องมือที่ใช้', href: '#skills' },
        ]
      : [
          { value: liveCount, label: 'Live Web Applications', href: '#projects' },
          { value: totalWorkCount, label: 'Shipped Projects & Labs', href: '#more-work' },
          { value: 'B2', label: 'English · UDRU-ET', href: '#education' },
          { value: String(techCount), label: 'Languages & Tools', href: '#skills' },
        ];

  return (
    <section aria-label="Highlights" className="border-y border-fg/10 bg-bg">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-fg/10">
        {items.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`group block px-4 py-8 transition-colors duration-200 hover:bg-surface/40 sm:px-8 sm:py-10 ${
              idx >= 2 ? 'border-t border-fg/10 lg:border-t-0' : ''
            } ${idx % 2 === 1 ? 'border-l border-fg/10 lg:border-l-0' : ''}`}
          >
            <p className="stretch-wide text-4xl font-black leading-none tracking-[-0.02em] text-acid transition-transform duration-200 group-hover:translate-x-0.5 sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-fg">
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
