// Layout Components
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';



const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('portfolio/home')} className="font-bold text-xl">Portfolio</button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem onClick={() => scrollToSection('portfolio/home')}>Home</NavItem>
            <NavItem onClick={() => scrollToSection('portfolio/about')}>About</NavItem>
            <NavItem onClick={() => scrollToSection('portfolio/skills')}>Skills</NavItem>
            <NavItem onClick={() => scrollToSection('portfolio/projects')}>Projects</NavItem>
            <NavItem onClick={() => scrollToSection('portfolio/contact')}>Contact</NavItem>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 h-screen">
            <div className="flex flex-col space-y-2">
              <NavItem className="hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => scrollToSection('portfolio/home')} mobile>Home</NavItem>
              <NavItem className="hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => scrollToSection('portfolio/about')} mobile>About</NavItem>
              <NavItem className="hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => scrollToSection('portfolio/skills')} mobile>Skills</NavItem>
              <NavItem className="hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => scrollToSection('portfolio/projects')} mobile>Projects</NavItem>
              <NavItem className="hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => scrollToSection('portfolio/contact')} mobile>Contact</NavItem>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>Change Theme</span>
              </button>
            </div>  
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ onClick, children, mobile }) => (
  <button
    onClick={onClick}
    className={`${mobile ? 'block w-full text-left' : 'inline-block'
      } px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700`}
  >
    {children}
  </button>
);

export default Navbar