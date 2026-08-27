import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-body-light/90 dark:bg-body-dark/90 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-brand dark:text-brand-dark transition-colors duration-200"
          >
            Supphawit's Portfolio
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-typography-light/80 hover:text-brand dark:text-typography-dark/80 dark:hover:text-brand-dark transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="ml-3 p-2 rounded-lg text-typography-light/80 hover:text-brand dark:text-typography-dark/80 dark:hover:text-brand-dark hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-brand-dark animate-in spin-in-180 duration-300" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500 animate-in spin-in-180 duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-typography-light/80 hover:text-brand dark:text-typography-dark/80 dark:hover:text-brand-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-brand-dark" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-typography-light hover:text-brand dark:text-typography-dark dark:hover:text-brand-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-body-light/95 dark:bg-body-dark/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-lg transition-all duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-typography-light/90 hover:text-brand dark:text-typography-dark/90 dark:hover:text-brand-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

