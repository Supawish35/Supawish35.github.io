import React, { useState, useEffect } from 'react';
import { Award, X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
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
    <section id="activities" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100 mb-3">
            {t.ui.certificates.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t.ui.certificates.sectionSubtitle}
          </p>
        </div>

        {/* Certificates Grid (Centered, Responsive, Max 3 Columns) */}
        <div className="flex flex-wrap justify-center gap-7">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-lg bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-zinc-200 dark:border-zinc-800 flex flex-col group cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 p-4 flex items-center justify-center border-b border-zinc-200/70 dark:border-zinc-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-white shadow-md flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <Maximize2 className="w-4 h-4" />
                    <span>{t.ui.certificates.viewFull}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="p-5 text-center mt-auto">
                <div className="inline-flex items-center gap-2 text-base font-semibold font-heading text-zinc-900 dark:text-zinc-100">
                  <Award className="w-5 h-5 text-brand flex-shrink-0" />
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
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-7 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-auto rounded-2xl bg-zinc-50 dark:bg-zinc-950 p-2 sm:p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-sm"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-5 flex items-center gap-2.5 text-lg sm:text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100 text-center">
              <Award className="w-5 h-5 text-brand flex-shrink-0" />
              <span>{selectedCert.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
