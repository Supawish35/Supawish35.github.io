import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTop: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.ui.footer.backToTop}
      className="fixed bottom-5 right-5 z-40 min-h-11 min-w-11 grid place-items-center rounded-xl bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-900/10 dark:shadow-black/30 hover:text-brand hover:bg-slate-50 dark:hover:bg-slate-700/80 active:scale-[0.98] transition-all duration-150"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
};
