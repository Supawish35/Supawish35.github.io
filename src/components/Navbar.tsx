import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#profile');

  useEffect(() => {
    const ids = t.navItems.map((i) => i.href.replace('#', ''));
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = `#${ids[0]}`;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = `#${id}`;
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [t.navItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-[#131310]/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-acid focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <nav className="wrap flex h-20 items-center justify-between gap-4" aria-label="Main">
        <a
          href="#profile"
          className="group flex items-baseline gap-2.5 text-fg transition-colors duration-200 hover:text-acid"
        >
          <span className="stretch-wide text-lg font-bold tracking-[-0.025em]">Supphawit</span>
          <span className="stretch-narrow hidden text-xs uppercase tracking-[0.2em] text-muted sm:inline">
            [ CS · Year 3 ]
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {t.navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`py-2 text-sm tracking-[0.02em] transition-colors duration-200 hover:text-acid ${
                  isActive
                    ? 'text-fg underline decoration-acid decoration-2 underline-offset-8'
                    : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={toggleLanguage}
            aria-label={t.ui.navbar.switchLanguage}
            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-full border border-fg/20 px-4 text-xs font-semibold tracking-wider text-fg transition-colors duration-200 hover:border-acid hover:text-acid"
          >
            {language === 'th' ? 'EN' : 'TH'}
          </button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-acid hover:text-acid md:hidden"
          aria-expanded={open}
          aria-label={t.ui.navbar.toggleMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-auto bg-bg md:hidden">
          <div className="wrap flex flex-col py-8">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="stretch-wide flex min-h-[60px] items-center border-b border-fg/10 text-2xl font-bold text-fg transition-colors hover:text-acid"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="pill-btn mt-8 w-full bg-acid text-bg"
            >
              {language === 'th' ? 'Switch to English' : 'สลับเป็นภาษาไทย'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
