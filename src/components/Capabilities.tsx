import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Capabilities: React.FC = () => {
  const { t } = useLanguage();
  const items = t.portfolioData.capabilities;

  return (
    <section id="capabilities" className="border-b border-fg/10 py-24 lg:py-28">
      <div data-reveal className="wrap">
        <div className="max-w-2xl">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {t.ui.capabilities.eyebrow}
          </p>
          <h2 className="stretch-wide text-4xl font-black leading-[1.05] tracking-[-0.025em] text-fg sm:text-5xl">
            {t.ui.capabilities.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.ui.capabilities.sectionSubtitle}
          </p>
        </div>

        <ul className="mt-14 border-t border-fg/10">
          {items.map((c) => (
            <li key={c.number} className="border-b border-fg/10">
              <a
                href={c.href}
                className="group grid gap-4 px-4 py-8 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-[4rem_1fr_1.35fr_auto] md:items-center md:gap-8"
              >
                <span className="stretch-wide text-lg font-bold text-acid" aria-hidden="true">
                  {c.number}
                </span>

                <h3 className="stretch-wide text-2xl font-bold leading-snug tracking-[-0.025em] text-fg transition-colors duration-200 group-hover:text-acid">
                  {c.title}
                </h3>

                <div>
                  <p className="text-sm leading-relaxed text-muted">{c.description}</p>
                  <p className="mt-2.5 text-xs uppercase tracking-[0.16em] text-fg/75">
                    {c.stack.join(' · ')}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-acid">
                  {t.ui.capabilities.viewProof}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
