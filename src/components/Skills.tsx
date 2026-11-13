import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS: Record<string, string> = {
  Python: 'python',
  PHP: 'php',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Git: 'git',
  'VS Code': 'visual-studio-code',
  'JetBrains IDE': 'jetbrains',
  Azure: 'azure',
  SQL: 'sql',
};

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const { skills, education, certificates, interests } = t.portfolioData;
  const techGroups = skills.slice(0, 2);
  const soft = skills[2];
  const cert = certificates[0];

  return (
    <section id="skills" className="border-t border-fg/10 py-24 lg:py-28">
      <div className="wrap grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left Column: Sticky Tech Stack */}
        <div className="lg:sticky lg:top-28">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {language === 'th' ? 'RESUME & STACK' : 'RESUME & STACK'}
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
                          {icon && (
                            <img
                              src={`asset/icons/${icon}.svg`}
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                            />
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
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {soft.title}
              </p>
              <p className="mt-2 text-sm text-fg">
                {soft.skills.join(' · ')}
              </p>
            </div>
          )}

          <div className="mt-6 border-t border-fg/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {t.ui.hero.interestsLabel.replace(':', '')}
            </p>
            <p className="mt-2 text-sm text-fg">
              {interests.join(' · ')}
            </p>
          </div>
        </div>

        {/* Right Column: Education Timeline & Certificate */}
        <div id="education">
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
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {cert.title}
                </p>
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-acid underline underline-offset-8 hover:text-fg"
                >
                  {t.ui.certificates.viewFull}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={cert.title}
                className="group block border border-fg/15 bg-paper p-2.5 transition-colors duration-300 hover:border-acid/60"
              >
                <div className="frame overflow-hidden bg-bg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="aspect-[2000/1414] w-full object-cover"
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
