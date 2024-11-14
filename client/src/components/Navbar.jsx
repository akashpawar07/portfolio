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
  Mail
} from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

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
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className={`md:hidden fixed w-full top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        } shadow-md`}>
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('portfolio/home')} className="font-bold text-xl">
                Portfolio
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    onClick={() => scrollToSection(`portfolio/${item.id}`)}
                    mobile
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} />
                      {item.label}
                    </div>
                  </NavItem>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span>Change Theme</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav
        className={`hidden md:block fixed left-0 top-0 h-screen z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
          } shadow-md ${isExpanded ? 'w-64' : 'w-16'}`}
      >
        <div className="flex flex-col h-full relative">
          {/* Header with Toggle Button */}
          <div className={`flex items-center h-16 ${isExpanded ? 'justify-between px-4' : 'justify-center px-2'}`}>
            {isExpanded && (
              <button onClick={() => scrollToSection('portfolio/home')} className="font-bold text-xl">
                Portfolio
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:bg-gray-700"
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