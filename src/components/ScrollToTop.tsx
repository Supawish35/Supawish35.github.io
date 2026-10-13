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
      className="fixed bottom-5 right-5 z-40 min-h-11 min-w-11 grid place-items-center rounded-xl text-stone-700 dark:text-stone-300 hover:text-brand-ink active:scale-[0.98] transition-all duration-150 glass-soft glass-hover"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
};
