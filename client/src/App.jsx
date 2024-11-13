import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from "./components/AboutPage";
import ProjectPage from './components/ProjectPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio/home');

  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Prevent default scroll restoration
    document.documentElement.style.scrollBehavior = 'auto';

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = ['portfolio/home', 'portfolio/about', 'portfolio/skills', 'portfolio/projects', 'portfolio/contact'];
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      );

      const currentSection = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(sections[currentSection]);
        // Update URL without triggering page reload
        window.history.replaceState(null, '', `/${sections[currentSection] === 'home' ? '' : sections[currentSection]}`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Re-enable smooth scrolling after initial load
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.offsetTop - 60; // Adjust for navbar height
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen pt-16 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        
        <main className="overflow-x-hidden">
          <section id="portfolio/home">
            <HomePage />
          </section>
          <section id="portfolio/about">
            <AboutPage />
          </section>
          <section id="portfolio/skills">
            <SkillsPage />
          </section>
          <section id="portfolio/projects">
            <ProjectPage />
          </section>
          <section id="portfolio/contact">
            <ContactPage />
          </section>
        </main>
        
        <Footer />

        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 
            w-12 h-12 
            flex items-center justify-center 
            rounded-full shadow-lg
            transition-all duration-300
            ${showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
            group
            dark:bg-white dark:text-blue-600
            bg-blue-600 text-slate-50
            hover:scale-110 active:scale-95
            z-50
          `}
          aria-label="Scroll to top"
        >
          <ChevronUp 
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
          />
          
          <span 
            className="
              absolute -top-8
              text-sm
              opacity-0 group-hover:opacity-100
              transform translate-y-2 group-hover:translate-y-0
              transition-all duration-300
              dark:text-white text-gray-800
              font-medium
            "
          >
            Top
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;