import React, { useEffect } from 'react';
import { ArrowUpRight, Layers, X } from 'lucide-react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const modalText = t.ui.projects.modal;

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const imgSrc = project.imageDark ?? project.image;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 p-4 backdrop-blur-md sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden border border-fg/20 bg-[#1a1916] shadow-[0_30px_90px_rgba(0,0,0,0.75)]"
      >
        {/* Top Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-fg/10 bg-[#141411] px-6 py-5 sm:px-8">
          <div>
            <p className="stretch-narrow text-xs font-semibold uppercase tracking-[0.22em] text-acid">
              {t.ui.projects.caseStudy}
            </p>
            <h3
              id="case-study-title"
              className="stretch-wide mt-1 text-2xl font-black tracking-[-0.02em] text-fg sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={modalText.close}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-acid hover:text-acid"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          {/* Unified Browser Preview */}
          <div className="overflow-hidden border border-fg/15 bg-bg">
            <div className="flex items-center justify-between gap-3 border-b border-fg/10 bg-[#151411] px-4 py-2">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
              </div>
              <span className="truncate text-xs tracking-wide text-muted">
                {project.displayUrl}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-acid">
                <span className="h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
                {t.ui.projects.liveBadge}
              </span>
            </div>
            <div className="aspect-[16/9] overflow-hidden bg-[#10100d]">
              <img
                src={imgSrc}
                alt={project.title}
                className={`h-full w-full object-cover ${
                  project.id === 'pop-siam' ? 'object-center' : 'object-top'
                }`}
              />
            </div>
          </div>

          {/* Role & Tech Stack */}
          <div className="mt-6 grid gap-6 border-b border-fg/10 pb-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {modalText.role}
              </p>
              <p className="mt-1.5 text-sm font-medium text-fg">{project.caseStudy.role}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {modalText.stack}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-fg/15 bg-surface/80 px-2.5 py-1 text-xs font-medium text-fg"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem & Architecture */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-acid">
                {modalText.problem}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-fg/90 sm:text-base">
                {project.caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-acid">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                {modalText.architecture}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {project.caseStudy.architecture}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-acid">
                {modalText.highlights}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.caseStudy.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-fg/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-acid" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-fg/10 bg-[#141411] px-6 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn min-h-[44px] bg-acid px-6 text-sm font-bold text-bg"
              >
                {t.ui.projects.liveDemo}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn min-h-[44px] border border-fg/25 bg-surface/60 px-6 text-sm font-semibold text-fg hover:border-acid hover:text-acid"
            >
              {t.ui.projects.sourceCode}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
          >
            {modalText.close}
          </button>
        </div>
      </div>
    </div>
  );
};
