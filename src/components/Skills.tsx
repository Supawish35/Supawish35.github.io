import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS: Record<string, string> = {
  Python: 'python',
  PHP: 'php',
  'HTML/CSS': 'html',
  JavaScript: 'javascript',
  'C#': 'c-sharp',
  TypeScript: 'typescript',
  Git: 'git',
  'VS Code': 'visual-studio-code',
  'JetBrains IDE': 'jetbrains',
  Azure: 'azure',
  SQL: 'sql',
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [certOpen, setCertOpen] = useState(false);
  const { skills, education, certificates, interests } = t.portfolioData;
  const techGroups = skills.slice(0, 2);
  const soft = skills[2];
  const cert = certificates[0];

  useEffect(() => {
    if (!certOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCertOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [certOpen]);

  return (
    <section id="skills" className="border-t border-fg/10 py-24 lg:py-28">
      <div data-reveal className="wrap grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left Column: Sticky Tech Stack */}
        <div className="lg:sticky lg:top-28">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            RESUME &amp; STACK
          </p>
          <h2 className="stretch-wide mb-8 text-4xl font-black leading-none tracking-[-0.025em] text-fg sm:text-5xl">
            {t.ui.skills.sectionTitle}
          </h2>

          <div className="space-y-8">
            {techGroups.map((g) => {
              const names = g.skills.flatMap((s) => s.split(',').map((x) => x.trim()));
              return (
                <div key={g.title}>
                  <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
                    {g.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {names.map((n) => {
                      const icon = ICONS[n];
                      return (
                        <li
                          key={n}
                          className="flex min-h-[44px] items-center gap-2.5 border border-fg/15 bg-surface/70 px-3.5 py-2 text-sm font-medium text-fg"
                        >
                          {icon ? (
                            <img
                              src={`asset/icons/${icon}.svg`}
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="flex h-5 w-5 items-center justify-center rounded-sm bg-fg/10 text-[11px] font-black text-acid"
                            >
                              {n.slice(0, 1)}
                            </span>
                          )}
                          {n}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {soft && (
            <div className="mt-8 border-t border-fg/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{soft.title}</p>
              <p className="mt-2 text-sm text-fg">{soft.skills.join(' · ')}</p>
            </div>
          )}

          <div className="mt-6 border-t border-fg/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {t.ui.hero.interestsLabel.replace(':', '')}
            </p>
            <p className="mt-2 text-sm text-fg">{interests.join(' · ')}</p>
          </div>
        </div>

        {/* Right Column: Education Timeline & Certificate */}
        <div id="education" className="scroll-mt-28">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {t.ui.education.sectionSubtitle}
          </p>
          <h2 className="stretch-wide mb-8 text-4xl font-black leading-none tracking-[-0.025em] text-fg sm:text-5xl">
            {t.ui.education.sectionTitle}
          </h2>

          <ul className="border-t border-fg/10">
            {education.map((e) => (
              <li key={e.degree} className="border-b border-fg/10 py-6">
                <p className="stretch-narrow mb-2 text-xs uppercase tracking-[0.2em] text-acid">
                  {e.years}
                </p>
                <h3 className="stretch-wide mb-1 text-xl font-bold leading-snug text-fg">
                  {e.degree}
                </h3>
                <p className="text-sm text-muted">{e.institution}</p>
              </li>
            ))}
          </ul>

          {cert && (
            <div className="mt-12">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{cert.title}</p>
                <button
                  type="button"
                  onClick={() => setCertOpen(true)}
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-acid underline underline-offset-8 hover:text-fg"
                >
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.ui.certificates.viewFull}
                </button>
              </div>
              <button
                type="button"
                onClick={() => setCertOpen(true)}
                aria-label={`${cert.title} — ${t.ui.certificates.viewFull}`}
                className="group block w-full border border-fg/15 bg-paper p-2.5 text-left transition-colors duration-300 hover:border-acid/60"
              >
                <div className="frame overflow-hidden bg-bg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="aspect-[2000/1414] w-full object-cover"
                  />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {certOpen && cert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
          onClick={() => setCertOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden border border-fg/20 bg-[#1a1916] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-fg/10 bg-[#141411] px-5 py-3.5">
              <p className="text-sm font-semibold text-fg">{cert.title}</p>
              <div className="flex items-center gap-2">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 border border-fg/20 px-3 text-xs font-semibold uppercase tracking-[0.12em] text-acid transition-colors hover:border-acid"
                >
                  {t.ui.certificates.openOriginal}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setCertOpen(false)}
                  aria-label={t.ui.certificates.close}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-acid hover:text-acid"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-auto bg-[#10100d] p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-[75dvh] w-auto max-w-full object-contain shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
