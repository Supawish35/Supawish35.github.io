import React from 'react';
import { ArrowRight, ArrowUpRight, Mail, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GithubGlyph: React.FC = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const { name, role, headline, summary, avatar, contacts } = t.portfolioData;
  const github = contacts.find((c) => c.type === 'github');
  const email = contacts.find((c) => c.type === 'email');
  const facebook = contacts.find((c) => c.type === 'facebook');

  const greeting = language === 'th' ? 'สวัสดีครับ' : 'Hello.';
  const stamp = language === 'th' ? 'พร้อมทำงาน' : 'CS · YEAR 3';

  return (
    <section id="profile" className="grid min-h-[100dvh] pt-20 lg:grid-cols-2">
      {/* Left Column: Acid Lime Editorial Panel */}
      <div className="acid-panel relative flex flex-col justify-between overflow-visible bg-acid px-6 pb-10 pt-14 text-bg sm:px-12 lg:pt-12 lg:rounded-tr-[2.5rem]">
        {/* Floating Stamp Badge */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-4 rotate-6 border border-bg/30 bg-bg px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-acid shadow-lg sm:right-10 sm:top-8"
        >
          {stamp}
        </div>

        <div data-enter className="pt-2">
          <h1 className="stretch-wide text-[clamp(4.25rem,10.5vw,10.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-bg">
            {greeting}
          </h1>
        </div>

        {/* Bottom Row: Tilted Polaroid + Overlapping 2x2 Social Grid + Identity Lockup */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative ml-4 w-[210px] sm:ml-6 sm:w-[240px] lg:ml-4">
            <div className="bg-paper p-2 pb-7 shadow-2xl transition-transform duration-300 rotate-[-2deg] hover:rotate-0">
              <img
                src={avatar}
                alt={name}
                fetchPriority="high"
                className="aspect-[3/4] w-full object-cover object-[58%_20%]"
              />
            </div>

            {/* Overlapping 2x2 Square Grid */}
            <div className="absolute -left-4 bottom-6 z-10 grid grid-cols-2 gap-px border border-acid/40 bg-acid/40 shadow-xl sm:-left-5">
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center bg-bg text-acid transition-colors duration-200 hover:bg-acid hover:text-bg"
                >
                  <GithubGlyph />
                </a>
              )}
              {email && (
                <a
                  href={email.url}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center bg-bg text-acid transition-colors duration-200 hover:bg-acid hover:text-bg"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center bg-bg text-acid transition-colors duration-200 hover:bg-acid hover:text-bg"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              <a
                href="#projects"
                aria-label={t.ui.hero.viewProjects}
                className="flex h-11 w-11 items-center justify-center bg-bg text-acid transition-colors duration-200 hover:bg-acid hover:text-bg"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="sm:pb-2 sm:text-right">
            <p className="stretch-wide text-2xl font-bold leading-tight tracking-[-0.02em] text-bg sm:text-3xl">
              {name}
            </p>
            <p className="stretch-narrow mt-1.5 max-w-[260px] text-xs uppercase tracking-[0.2em] text-bg/80 sm:ml-auto sm:text-sm">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Dark Intro & Pill Actions */}
      <div data-enter className="flex flex-col justify-center gap-8 px-6 py-12 sm:px-12 lg:py-16 lg:px-16 xl:px-20">
        <p className="max-w-xl text-2xl font-light leading-snug text-fg sm:text-3xl">
          {headline}
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="pill-btn bg-acid text-bg">
            {t.ui.hero.viewProjects}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn bg-paper text-bg"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
