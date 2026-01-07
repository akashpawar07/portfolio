import React, { useState } from 'react';
import {
  Home,
  User,
  FolderGit2,
  Code2,
  Images,
  Mail,
  Star,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode, activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'ratingandfeedback', label: 'Rate Us', icon: Star }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-100 to-white text-gray-800 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:text-white shadow-md">
      {/* NAVBAR BAR */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Akash's Work
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition
                  ${
                    active
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="p-2 text-gray-800 dark:text-gray-200 relative z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden dark:bg-gray-800 bg-slate-100 animate-in slide-in-from-top duration-300">
          <div className="pt-8 px-6 space-y-4">
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium transition
                    ${
                      active
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  <Icon size={22} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;