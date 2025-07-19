import React, { useState } from 'react';
import {
  Sun,
  Moon,
  Menu,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Code2,
  FolderGit2,
  Mail,
  Images,
  User2,
  Star,
  X
} from 'lucide-react';

import mainLogo from '../assets/logo/logo3.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'ratingandfeedback', label: 'Rate Us', icon: Star }
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className={`md:hidden fixed w-full top-0 z-50 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-950 text-white' : 'bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800'
        } shadow-md`}>
        <div className="px-2">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('portfolio/home')} className="flex items-center gap-3">
                <img
                  src={mainLogo}
                  alt="Portfolio Logo"
                  className="h-[100px] object-contain"
                />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 relative z-[60]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Dropdown */}
        <div className={`
          fixed inset-0 top-20 z-[55] transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}
        `}>
          <div className="pt-6 px-6">
            <div className="w-full max-w-sm mx-auto space-y-3">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms' }}
                >
                  <button
                    onClick={() => scrollToSection(`portfolio/${item.id}`)}
                    className={`
                      w-full group flex items-center gap-3 px-4 py-2.5 rounded-lg
                      transition-all duration-200 ease-in-out
                      hover:scale-[1.02] active:scale-[0.98]
                      ${darkMode 
                        ? 'hover:bg-gray-700/50 hover:shadow-lg hover:shadow-gray-900/20' 
                        : 'hover:bg-white/60 hover:shadow-lg hover:shadow-gray-400/20'
                      }
                      border border-transparent hover:border-gray-400/20
                    `}
                  >
                    <div className={`
                      flex items-center justify-center w-8 h-8 rounded-lg
                      transition-all duration-200
                      ${darkMode 
                        ? 'bg-gray-700/50 group-hover:bg-gray-600/70' 
                        : 'bg-gray-200/70 group-hover:bg-gray-300/80'
                      }
                    `}>
                      <item.icon size={16} className="transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="font-medium text-sm tracking-wide">{item.label}</span>
                  </button>
                </div>
              ))}
              
              {/* Divider */}
              <div className={`h-px my-6 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
              
              <div
                className={`transform transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${navItems.length * 80}ms` : '0ms' }}
              >
                <button
                  onClick={toggleDarkMode}
                  className={`
                    w-full group flex items-center gap-3 px-4 py-2.5 rounded-lg
                    transition-all duration-200 ease-in-out
                    hover:scale-[1.02] active:scale-[0.98]
                    ${darkMode 
                      ? 'hover:bg-gray-700/50 hover:shadow-lg hover:shadow-gray-900/20' 
                      : 'hover:bg-white/60 hover:shadow-lg hover:shadow-gray-400/20'
                    }
                    border border-transparent hover:border-gray-400/20
                  `}
                >
                  <div className={`
                    flex items-center justify-center w-8 h-8 rounded-lg
                    transition-all duration-200
                    ${darkMode 
                      ? 'bg-gray-700/50 group-hover:bg-gray-600/70' 
                      : 'bg-gray-200/70 group-hover:bg-gray-300/80'
                    }
                  `}>
                    {darkMode ? (
                      <Sun size={16} className="transition-transform duration-200 group-hover:scale-110" />
                    ) : (
                      <Moon size={16} className="transition-transform duration-200 group-hover:scale-110" />
                    )}
                  </div>
                  <span className="font-medium text-sm tracking-wide">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav
        className={`hidden md:block fixed left-0 top-0 h-screen z-50 transition-all duration-300 ${darkMode ? 'bg-gradient-to-t from-gray-700 to-gray-950 text-white' : 'bg-gradient-to-t from-gray-200 to-gray-400 text-gray-800'
          } shadow-md ${isExpanded ? 'w-64' : 'w-16'}`}
      >
        <div className="flex flex-col h-full relative ">
          {/* Header with Toggle Button */}
          <div className={`flex items-center justify-between h-16 border-b border-b-gray-800 bg-slate-900 ${isExpanded ? 'justify-between px-4' : 'justify-center px-2'}`}>
            {isExpanded && (
              <button onClick={() => scrollToSection('portfolio/home')}>
                <img
                  src={mainLogo}
                  alt="Portfolio Logo"
                  className="h-[120px] object-contain ml-[-2rem]"
                />
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg ml-1 hover:bg-gray-200 bg-gray-400 dark:bg-gray-700"
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col flex-grow py-4">
            {navItems.map((item) => (
              <SidebarItem
                key={item.id}
                onClick={() => scrollToSection(`portfolio/${item.id}`)}
                expanded={isExpanded}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>

          {/* Theme Toggle */}
          <div className={` ${isExpanded ? 'px-4' : 'px-2'} py-4`}>
            <button
              onClick={toggleDarkMode}
              className={`w-full rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2
                ${isExpanded ? 'flex items-center gap-3' : 'flex justify-center'}`}
              title={!isExpanded ? "Toggle theme" : undefined}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {isExpanded && <span>Theme</span>}
            </button>
          </div>
        </div>
      </nav>
    </>
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

const SidebarItem = ({ onClick, expanded, icon: Icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center w-full py-3
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors duration-200 
        ${expanded ? 'px-4 justify-start' : 'px-2 justify-center'}
      `}
      title={!expanded ? label : undefined}
    >
      <Icon size={20} />
      {expanded && <span className="ml-3">{label}</span>}
    </button>
  );
};

export default Navbar;