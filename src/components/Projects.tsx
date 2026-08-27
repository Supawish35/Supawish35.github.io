import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-body-light dark:bg-body-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight text-typography-light dark:text-typography-dark">
          ผลงาน (Projects)
        </h2>

        <div className="max-w-2xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-black/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Info & Actions */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-3 text-typography-light dark:text-typography-dark">
                  {project.title}
                </h3>
                <p className="text-typography-light/80 dark:text-typography-dark/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand/90 dark:bg-brand-dark dark:hover:bg-brand-dark/90 text-white font-medium text-sm shadow-sm transition-all duration-200 hover:shadow"
                  >
                    <Code className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-sm transition-all duration-200 hover:shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Example Website</span>
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

