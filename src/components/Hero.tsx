import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
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

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { name, role, interests, avatar, contacts } = t.portfolioData;

  const githubContact = contacts.find((c) => c.type === 'github');
  const emailContact = contacts.find((c) => c.type === 'email');

  return (
    <header id="profile" className="relative pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10 lg:gap-16">
          
          {/* Main Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 data-reveal className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 font-heading mb-5 leading-[1.08] text-balance">
              {name}
            </h1>

            <p data-reveal style={revealDelay(1)} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-2xl">
              {role}
            </p>

            {/* Interests Chips */}
            <div data-reveal style={revealDelay(2)} className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-9">
              <span className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500 mr-1">
                {t.ui.hero.interestsLabel}
              </span>
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 transition-colors hover:border-slate-300 dark:hover:border-slate-600"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div data-reveal style={revealDelay(3)} className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-semibold text-sm sm:text-base transition-colors shadow-sm active:scale-[0.98]"
              >
                <span>{t.ui.hero.viewProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {githubContact && (
                <a
                  href={githubContact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-200 dark:border-slate-800 transition-colors shadow-subtle active:scale-[0.98]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {emailContact && (
                <a
                  href={emailContact.url}
                  className="inline-flex min-h-11 items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-200 dark:border-slate-800 transition-colors shadow-subtle active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{t.ui.hero.contact}</span>
                </a>
              )}
            </div>
          </div>

          {/* Profile Avatar */}
          <div data-reveal style={revealDelay(2)} className="flex-shrink-0">
            <div className="relative rounded-[1.75rem] bg-white/80 dark:bg-slate-900/80 p-2 border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-900/5 dark:shadow-black/20 ring-1 ring-white/70 dark:ring-white/5">
              <img
                src={avatar}
                alt={name}
                width={240}
                height={240}
                fetchPriority="high"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-[1.35rem] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
