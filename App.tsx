
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercentage(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-champagne to-rose-gold"
        style={{ width: `${scrollPercentage}%`, transition: 'width 0.1s ease-out' }}
      ></div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger an elegant fade-in on first paint without hiding content entirely.
    const timer = window.requestAnimationFrame(() => setIsLoaded(true));
    return () => window.cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      className={`bg-obsidian text-pearl font-sans transition-opacity duration-1000 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
