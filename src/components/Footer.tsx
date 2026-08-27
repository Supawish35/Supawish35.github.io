import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-body-light/90 dark:bg-body-dark/90 backdrop-blur-md border-t border-black/5 dark:border-white/10 py-8 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-typography-light/60 dark:text-typography-dark/60 font-normal">
          &copy; 2026 Supphawit Hanmontree. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

