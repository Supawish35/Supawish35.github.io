import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4"
    >
      <div
        className={`glass-nav max-w-6xl mx-auto rounded-2xl px-4 sm:px-6 transition-[padding] duration-300 ${
          scrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:opacity-80 transition-opacity"
          >
            Supphawit<span className="text-brand-ink font-mono font-normal text-sm ml-0.5">.dev</span>
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              aria-label={t.ui.navbar.switchLanguage}
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              className="ml-2 flex min-h-10 items-center gap-1.5 px-3 rounded-lg text-xs font-semibold bg-white/50 dark:bg-white/10 text-stone-700 dark:text-stone-300 hover:bg-white/80 dark:hover:bg-white/20 hover:text-stone-900 dark:hover:text-stone-100 transition-all border border-white/60 dark:border-white/10 active:scale-[0.98]"
            >
              <Languages className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span className="font-mono tracking-wider uppercase font-bold">
                {language === 'th' ? 'EN' : 'TH'}
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center space-x-1 sm:space-x-1.5">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label={t.ui.navbar.switchLanguage}
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              className="flex min-h-10 items-center gap-1 px-2.5 rounded-lg text-xs font-bold bg-white/50 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-white/60 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span className="font-mono">{language === 'th' ? 'EN' : 'TH'}</span>
            </button>

            {/* Mobile Theme Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-stone-600 dark:text-stone-400 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t.ui.navbar.toggleMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-stone-800 dark:text-stone-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="glass-nav md:hidden mt-2 max-w-6xl mx-auto rounded-2xl p-2.5 space-y-1 animate-drop-in">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-11 px-3.5 py-3 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
