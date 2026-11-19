import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationContent } from '../data/translations';

const STORAGE_KEY = 'portfolio_lang';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  try {
    const paramLang = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
    if (paramLang === 'th' || paramLang === 'en') {
      try {
        window.localStorage.setItem(STORAGE_KEY, paramLang);
      } catch {
        /* localStorage unavailable */
      }
      return paramLang;
    }
  } catch {
    /* URLSearchParams unavailable */
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'th' || saved === 'en') {
      return saved;
    }
  } catch {
    /* localStorage unavailable */
  }

  const browserLang = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
  return browserLang.startsWith('th') ? 'th' : 'en';
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const current = translations[language];
    document.documentElement.lang = language;
    document.title = current.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', current.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', current.meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', current.meta.description);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* localStorage unavailable */
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
