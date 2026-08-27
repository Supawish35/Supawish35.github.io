import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { name, role, interests, avatar } = portfolioData;

  return (
    <header id="profile" className="hero-bg relative pt-32 pb-24 text-white text-center">
      {/* Dark overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Picture */}
        <div className="inline-block mb-6 relative group">
          <img
            src={avatar}
            alt="รูปโปรไฟล์"
            className="w-44 h-44 sm:w-48 sm:h-48 rounded-full object-cover ring-4 ring-white/90 shadow-2xl mx-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Card Container */}
        <div className="bg-black/55 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl border border-white/15">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-shadow-hero mb-3">
            {name}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 text-shadow-hero mb-4 font-normal">
            {role}
          </p>
          <div className="pt-3 border-t border-white/20 text-sm sm:text-base text-gray-200">
            <span className="font-semibold text-white">ความสนใจ: </span>
            <span>{interests.join(', ')}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

