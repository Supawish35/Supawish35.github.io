import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { contacts, name, role } = t.portfolioData;
  const email = contacts.find((c) => c.type === 'email');
  const address = email?.url.replace('mailto:', '') ?? '';
  const others = contacts.filter((c) => c.type !== 'email');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      {/* Full-Bleed Acid Lime CTA Band */}
      <section id="contact" className="acid-panel border-t border-fg/10 bg-acid text-bg">
        <div className="wrap flex flex-col justify-between gap-10 py-20 lg:flex-row lg:items-end lg:py-24">
          <div className="max-w-3xl">
            <p className="stretch-narrow mb-4 text-xs uppercase tracking-[0.25em] text-bg/80">
              {t.ui.contact.eyebrow}
            </p>
            <h2 className="stretch-wide text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-bg sm:text-5xl lg:text-6xl">
              {t.ui.contact.sectionTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base text-bg/80 sm:text-lg">
              {t.ui.contact.sectionSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={email?.url}
              className="pill-btn h-14 bg-bg px-10 text-paper"
            >
              {t.ui.contact.sendEmail}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              onClick={copy}
              className="pill-btn h-14 border border-bg/40 px-8 text-bg transition-colors hover:bg-bg hover:text-acid"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? t.ui.contact.copied : t.ui.contact.copyEmail}
            </button>
          </div>
        </div>
      </section>

      {/* 4-Column Footer */}
      <footer className="border-t border-fg/10 bg-bg text-sm text-muted">
        <div className="wrap grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="stretch-wide text-base font-bold text-fg">{name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{role}</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-fg/60">
              {language === 'th' ? 'อีเมล' : 'Direct'}
            </p>
            <a
              href={email?.url}
              className="inline-flex min-h-[44px] items-center text-fg underline decoration-fg/30 underline-offset-4 transition-colors hover:text-acid"
            >
              {address}
            </a>
          </div>

          <div className="space-y-1">
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-fg/60">
              {language === 'th' ? 'ช่องทางอื่น' : 'Elsewhere'}
            </p>
            <div className="flex flex-col items-start">
              {others.map((c) => (
                <a
                  key={c.type}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-muted underline decoration-fg/30 underline-offset-4 transition-colors hover:text-acid"
                >
                  {c.name}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between md:items-end md:text-right">
            <p>© {new Date().getFullYear()} {name}. {t.ui.footer.rights}</p>
            <a
              href="#profile"
              className="mt-2 inline-flex min-h-[44px] items-center font-semibold text-acid underline decoration-acid/50 underline-offset-4 hover:text-fg"
            >
              {t.ui.footer.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
