import React, { useState, useEffect } from 'react';
import { Award, X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { revealDelay } from '../hooks/useScrollReveal';
import { CertificateItem } from '../types';

export const Certificates: React.FC = () => {
  const { t } = useLanguage();
  const { certificates } = t.portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 border-b border-stone-900/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-stone-900 dark:text-stone-100 mb-3">
            {t.ui.certificates.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            {t.ui.certificates.sectionSubtitle}
          </p>
        </div>

        {/* Certificates Grid (Centered, Responsive, Max 3 Columns) */}
        <div className="flex flex-wrap justify-center gap-7">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              data-reveal
              style={revealDelay(idx)}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${t.ui.certificates.viewFull}: ${cert.title}`}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-lg rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-200 glass glass-hover"
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden p-4 flex items-center justify-center border-b bg-black/5 dark:bg-white/5 border-stone-900/10 dark:border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 dark:bg-stone-900/95 text-stone-900 dark:text-white shadow-md flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <Maximize2 className="w-4 h-4" />
                    <span>{t.ui.certificates.viewFull}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="p-5 text-center mt-auto">
                <div className="inline-flex items-center gap-2 text-base font-semibold font-heading text-stone-900 dark:text-stone-100">
                  <Award className="w-5 h-5 text-brand-ink flex-shrink-0" />
                  <span>{cert.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-all duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden p-5 sm:p-7 flex flex-col items-center animate-pop-in glass-strong"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2.5 rounded-xl text-stone-700 dark:text-stone-300 glass-soft glass-hover"
              aria-label={t.ui.certificates.close}
              autoFocus
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-auto rounded-2xl p-2 sm:p-4 glass-soft">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-sm"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-5 flex items-center gap-2.5 text-lg sm:text-xl font-bold font-heading text-stone-900 dark:text-stone-100 text-center">
              <Award className="w-5 h-5 text-brand-ink flex-shrink-0" />
              <span>{selectedCert.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
