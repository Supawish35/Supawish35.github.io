import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { AboutMe } from './components/AboutMe';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const PortfolioContent: React.FC = () => {
  const { language } = useLanguage();
  useScrollReveal([language]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MetricsStrip />
        <AboutMe />
        <Capabilities />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export const App: React.FC = () => (
  <LanguageProvider>
    <PortfolioContent />
  </LanguageProvider>
);

export default App;
