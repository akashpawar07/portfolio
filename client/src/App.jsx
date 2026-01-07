import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import RatingAndFeedback from './components/RatingAndFeedback';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle initial page load
  useEffect(() => {
    // Change this based on your environment
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
    const fullPath = window.location.pathname;
    const path = fullPath.replace(basePath, '').replace('/', '');
    const validSections = ['home', 'about', 'projects', 'skills', 'gallery', 'contact', 'ratingandfeedback'];

    if (path && validSections.includes(path)) {
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          const navHeight = 64;
          window.scrollTo({
            top: el.offsetTop - navHeight,
            behavior: 'auto'
          });
          setActiveSection(path);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Scroll spy - detects which section is in view and updates URL
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'gallery', 'contact', 'ratingandfeedback'];
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollButton(window.scrollY > 300);

      const navHeight = 64;
      const scrollPosition = window.scrollY + navHeight + 100;

      // Find which section is in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          // Update URL with base path - clean URL
          const newUrl = sections[i] === 'home' ? (basePath || '/') : `${basePath}/${sections[i]}`;
          window.history.replaceState(null, '', newUrl);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section with clean URL
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navHeight = 64;
    const top = element.offsetTop - navHeight;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });

    // Update URL with base path - clean URL
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
    const newUrl = sectionId === 'home' ? (basePath || '/') : `${basePath}/${sectionId}`;
    window.history.replaceState(null, '', newUrl);

    setActiveSection(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main className="overflow-x-hidden">
          <section id="home"><HomePage /></section>
          <section id="about"><AboutPage /></section>
          <section id="projects"><ProjectPage /></section>
          <section id="skills"><SkillsPage /></section>
          <section id="gallery"><Gallery /></section>
          <section id="contact"><ContactPage /></section>
          <section id="ratingandfeedback"><RatingAndFeedback /></section>
        </main>

        <Footer />

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-20
            w-12 h-12 rounded-full shadow-lg
            flex items-center justify-center
            transition-all duration-300
            ${showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}
            
            dark:bg-white dark:text-blue-600
            bg-blue-600 text-slate-50
            hover:scale-110 active:scale-95
          `}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default App;