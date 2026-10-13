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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-subtle'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
          >
            Supphawit<span className="text-brand font-mono font-normal text-sm ml-0.5">.dev</span>
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              aria-label={t.ui.navbar.switchLanguage}
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              className="ml-2 flex min-h-10 items-center gap-1.5 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all border border-slate-200/80 dark:border-slate-700/80 active:scale-[0.98]"
            >
              <Languages className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="font-mono tracking-wider uppercase font-bold">
                {language === 'th' ? 'EN' : 'TH'}
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
              className="flex min-h-10 items-center gap-1 px-2.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="font-mono">{language === 'th' ? 'EN' : 'TH'}</span>
            </button>

            {/* Mobile Theme Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t.ui.navbar.toggleMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="min-h-10 min-w-10 grid place-items-center rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden mt-2 mx-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-2.5 space-y-1 shadow-xl shadow-slate-900/10 dark:shadow-black/30 animate-drop-in">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-11 px-3.5 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
