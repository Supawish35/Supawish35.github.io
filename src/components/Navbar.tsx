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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-3.5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-subtle'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
          >
            Supphawit<span className="text-brand font-mono font-normal text-sm ml-0.5">.dev</span>
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              aria-label={t.ui.navbar.switchLanguage}
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all border border-zinc-200/80 dark:border-zinc-700/80 active:scale-95"
            >
              <Languages className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span className="font-mono tracking-wider uppercase font-bold">
                {language === 'th' ? 'EN' : 'TH'}
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center space-x-1 sm:space-x-1.5">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label={t.ui.navbar.switchLanguage}
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span className="font-mono">{language === 'th' ? 'EN' : 'TH'}</span>
            </button>

            {/* Mobile Theme Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label={t.ui.navbar.toggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t.ui.navbar.toggleMenu}
              className="p-2 rounded-lg text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg p-2.5 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
