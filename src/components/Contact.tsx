import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { contacts } = t.portfolioData;
  const [copied, setCopied] = useState(false);

  const emailContact = contacts.find((c) => c.type === 'email');
  const emailAddress = emailContact ? emailContact.url.replace('mailto:', '') : 'supawish35@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white/60 dark:bg-zinc-900/30 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100 mb-3">
            {t.ui.contact.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t.ui.contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Links Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Email Box */}
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-2.5 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Email</h3>
                <p className="text-sm sm:text-base font-mono font-medium text-zinc-900 dark:text-zinc-100 truncate max-w-[220px]">
                  {emailAddress}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-zinc-200/60 dark:border-zinc-800">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-sm font-semibold transition-colors text-center"
              >
                {t.ui.contact.sendEmail}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-zinc-200/70 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title={t.ui.contact.copyEmail}
                aria-label={t.ui.contact.copyEmail}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Box */}
          {contacts.find((c) => c.type === 'github') && (
            <a
              href={contacts.find((c) => c.type === 'github')!.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">GitHub</h3>
                  <p className="text-sm sm:text-base font-mono font-medium text-zinc-900 dark:text-zinc-100">
                    @Supawish35
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60 dark:border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-brand">
                <span>{t.ui.contact.openGithub}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          )}

          {/* Facebook Box */}
          {contacts.find((c) => c.type === 'facebook') && (
            <a
              href={contacts.find((c) => c.type === 'facebook')!.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Facebook</h3>
                  <p className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 truncate max-w-[220px]">
                    Supawish Hanmontree
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60 dark:border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-brand">
                <span>{t.ui.contact.sendMessage}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
