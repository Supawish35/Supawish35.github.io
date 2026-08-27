import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-body-light dark:bg-body-dark text-typography-light dark:text-typography-dark transition-colors duration-300 font-sans selection:bg-brand-500/20 selection:text-brand-600 dark:selection:text-brand-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
