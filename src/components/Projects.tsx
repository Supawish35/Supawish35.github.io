import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { revealDelay } from '../hooks/useScrollReveal';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t.portfolioData;

  return (
    <section id="projects" className="py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/30 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-slate-900 dark:text-slate-100 mb-3">
            {t.ui.projects.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.ui.projects.sectionSubtitle}
          </p>
        </div>

        {/* Projects Centered Grid (Max 3 Columns, Centered if 2 items) */}
        <div className="flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-reveal
              style={revealDelay(index)}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-md bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-slate-200 dark:border-slate-800 flex flex-col group hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              {/* Project Image Frame */}
              <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800 border-b border-slate-200/70 dark:border-slate-800">
                {project.imageDark ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 dark:hidden"
                    />
                    <img
                      src={project.imageDark}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hidden dark:block"
                    />
                  </>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                      loading="lazy"
                      decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Project Info & Actions */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 font-heading text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{t.ui.projects.sourceCode}</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-brand-600 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.ui.projects.liveDemo}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
