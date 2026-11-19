import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MoreWorkItem } from '../types';
import { ProjectModal } from './ProjectModal';

const BADGE_CLASSES: Record<MoreWorkItem['badgeTone'], string> = {
  accent: 'border-acid/45 bg-acid/10 text-acid',
  coursework: 'border-paper/35 bg-paper/10 text-paper',
  neutral: 'border-fg/20 bg-bg/60 text-muted',
};

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const { projects, moreWork, contacts } = t.portfolioData;
  const github = contacts.find((c) => c.type === 'github');
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="overflow-x-clip py-24 lg:py-32">
      <div data-reveal className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-28">
          <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-acid">
            {t.ui.projects.eyebrow}
          </p>
          <h2 className="stretch-wide mb-6 text-4xl font-black leading-[1.04] tracking-[-0.025em] text-fg sm:text-5xl">
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
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        {/* Right Column: Unified Browser-Framed Project Stack */}
        <div className="space-y-16">
          {projects.map((p, idx) => {
            const imgSrc = p.imageDark ?? p.image;
            const indexLabel = String(idx + 1).padStart(2, '0');

            return (
              <article
                key={p.id}
                id={`project-${p.id}`}
                className="group scroll-mt-28 border-b border-fg/10 pb-12 last:border-b-0 last:pb-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  aria-label={`${p.title} — ${t.ui.projects.caseStudy}`}
                  className="block w-full overflow-hidden border border-fg/15 bg-surface/90 text-left shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-acid/60"
                >
                  {/* Unified Browser Window Chrome */}
                  <div className="flex items-center justify-between gap-3 border-b border-fg/10 bg-[#1a1916] px-4 py-2.5">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
                    </div>
                    <span className="truncate bg-bg/70 px-3 py-0.5 text-[11px] tracking-wide text-muted">
                      {p.displayUrl}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-acid">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
                      {t.ui.projects.liveBadge}
                    </span>
                  </div>

                  {/* Screenshot Viewport */}
                  <div className="frame aspect-[16/10] overflow-hidden bg-[#10100d]">
                    <img
                      src={imgSrc}
                      alt={p.title}
                      className={`h-full w-full object-cover ${
                        idx === 0 ? 'object-center' : 'object-top'
                      }`}
                    />
                  </div>
                </button>

                {/* Project Metadata & Actions */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="stretch-narrow text-xs font-bold tracking-[0.18em] text-acid">
                      {indexLabel}
                    </span>
                    <h3 className="stretch-wide text-2xl font-bold tracking-[-0.025em] text-fg transition-colors duration-200 group-hover:text-acid">
                      {p.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-sm font-medium text-fg/85">{p.tagline}</p>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {p.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                    {p.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-fg/15 bg-surface/60 px-2.5 py-1 text-xs font-medium text-fg/90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveId(p.id)}
                      className="inline-flex min-h-[44px] items-center gap-2 border border-acid/60 bg-acid/10 px-4 py-2 text-sm font-semibold text-acid transition-colors hover:bg-acid hover:text-bg"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      {t.ui.projects.caseStudy}
                    </button>

                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1 px-2 text-fg underline decoration-acid/60 decoration-2 underline-offset-8 transition-colors hover:text-acid"
                      >
                        {t.ui.projects.liveDemo}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1 px-2 text-muted underline decoration-fg/20 underline-offset-8 transition-colors hover:text-fg"
                    >
                      {t.ui.projects.sourceCode}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* More Engineering & Coursework Strip */}
      <div id="more-work" data-reveal className="wrap mt-24 scroll-mt-28 border-t border-fg/10 pt-16">
        <div className="max-w-2xl">
          <p className="stretch-narrow mb-3 text-xs uppercase tracking-[0.25em] text-acid">
            {t.ui.projects.moreWorkEyebrow}
          </p>
          <h3 className="stretch-wide text-2xl font-black leading-[1.1] tracking-[-0.025em] text-fg sm:text-3xl">
            {t.ui.projects.moreWorkTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t.ui.projects.moreWorkSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {moreWork.map((item) => (
            <a
              key={item.id}
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between border border-fg/15 bg-surface/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-acid/60 hover:bg-surface/75"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-block border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                      BADGE_CLASSES[item.badgeTone]
                    }`}
                  >
                    {item.badge}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="stretch-wide mt-5 text-xl font-bold tracking-[-0.02em] text-fg transition-colors group-hover:text-acid">
                  {item.title}
                </h4>

                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.summary}</p>
              </div>

              <div className="mt-6 border-t border-fg/10 pt-4">
                <ul className="flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-bg/70 px-2 py-0.5 text-[11px] font-medium text-fg/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-acid">
                  {t.ui.projects.viewRepo} ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  );
};
