import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Capabilities: React.FC = () => {
  const { t } = useLanguage();
  const items = t.portfolioData.capabilities;

  return (
    <section id="capabilities" className="border-t border-fg/10 py-24 lg:py-28">
      <div className="wrap">
        <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
          {t.ui.capabilities.eyebrow}
        </p>
        <h2 className="stretch-wide max-w-2xl text-4xl font-black leading-none tracking-[-0.025em] text-fg sm:text-5xl">
          {t.ui.capabilities.sectionTitle}
        </h2>

        <ul className="mt-14 border-t border-fg/10">
          {items.map((c) => (
            <li key={c.number} className="border-b border-fg/10">
              <a
                href="#projects"
                className="group grid gap-4 px-4 py-8 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-[4rem_1fr_1.2fr_2rem] md:items-center md:gap-8"
              >
                <span className="stretch-wide text-lg font-bold text-acid" aria-hidden="true">
                  {c.number}
                </span>

                <h3 className="stretch-wide text-2xl font-bold leading-snug tracking-[-0.025em] text-fg transition-colors duration-200 group-hover:text-acid">
                  {c.title}
                </h3>

                <div>
                  <p className="text-sm leading-relaxed text-muted">{c.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-fg/70">
                    {c.stack.join(' · ')}
                  </p>
                </div>

                <ArrowUpRight
                  className="hidden h-5 w-5 text-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid md:block"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
