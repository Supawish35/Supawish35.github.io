import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export const App: React.FC = () => (
  <LanguageProvider>
    <Navbar />
    <main id="main-content">
      <Hero />
      <MetricsStrip />
      <Projects />
      <Capabilities />
      <Skills />
      <Contact />
    </main>
  </LanguageProvider>
);

export default App;
