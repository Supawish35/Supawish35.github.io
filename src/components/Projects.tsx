import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const projects = t.portfolioData.projects;
  const github = t.portfolioData.contacts.find((c) => c.type === 'github');
  const stampLabel = language === 'th' ? 'ใช้งานจริง' : 'OFF THE GRID';

  return (
    <section id="projects" className="overflow-x-clip py-24 lg:py-32">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-28">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {t.ui.projects.eyebrow}
          </p>
          <h2 className="stretch-wide mb-6 text-4xl font-black leading-none tracking-[-0.025em] text-fg sm:text-5xl">
            {t.ui.projects.sectionTitle}
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t.ui.projects.sectionSubtitle}
          </p>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-fg underline decoration-acid decoration-2 underline-offset-8 transition-colors hover:text-acid"
            >
              {t.ui.contact.openGithub}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Right Column: Editorial Project Stack */}
        <div className="space-y-16">
          {projects.map((p, idx) => {
            const isOffGrid = idx === 1;
            const imgSrc = p.imageDark ?? p.image;
            const primaryTag = p.tags?.[0] ?? 'Web App';
            const secondaryTags = p.tags?.slice(1).join(' · ');

            return (
              <article key={p.title} className="group">
                <a
                  href={p.demoUrl ?? p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.title}
                  className="block"
                >
                  {isOffGrid ? (
                    <div className="relative border border-fg/20 bg-surface shadow-2xl transition-all duration-300 lg:translate-x-5 lg:rotate-[1.2deg] group-hover:rotate-0 group-hover:border-acid/70">
                      <span className="absolute -left-3 -top-3 z-10 bg-acid px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-bg">
                        {stampLabel}
                      </span>
                      <div className="frame overflow-hidden bg-bg">
                        <img
                          src={imgSrc}
                          alt={p.title}
                          className="aspect-[4/3] w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="border border-fg/15 bg-paper p-2.5 transition-colors duration-300 group-hover:border-acid/60">
                      <div className="frame overflow-hidden bg-bg">
                        <img
                          src={imgSrc}
                          alt={p.title}
                          className={`aspect-[4/3] w-full object-cover ${
                            idx === 2 ? 'object-left-top' : 'object-center'
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </a>

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h3 className="stretch-wide text-xl font-bold tracking-[-0.025em] text-fg transition-colors duration-200 group-hover:text-acid">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                      {primaryTag}{secondaryTags ? ` · ${secondaryTags}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-sm font-semibold">
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1 text-acid underline decoration-acid/50 decoration-2 underline-offset-8 transition-colors hover:text-fg"
                      >
                        {t.ui.projects.liveDemo}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1 text-muted underline decoration-fg/20 underline-offset-8 transition-colors hover:text-fg"
                    >
                      {t.ui.projects.sourceCode}
                    </a>
                  </div>
                </div>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
