import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutMe: React.FC = () => {
  const { t } = useLanguage();
  const { about } = t.portfolioData;

  return (
    <section id="about" className="border-b border-fg/10 py-24 lg:py-28">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {about.eyebrow}
          </p>
          <h2 className="stretch-wide text-4xl font-black leading-[1.02] tracking-[-0.025em] text-fg sm:text-5xl">
            {about.title}
          </h2>
        </div>

        <div>
          <p className="text-xl font-light leading-relaxed text-fg sm:text-2xl">
            {about.lead}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {about.body}
          </p>

          <dl className="mt-10 border-t border-fg/10">
            {about.details.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 border-b border-fg/10 py-4 sm:grid-cols-[13rem_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="stretch-narrow text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-fg sm:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
