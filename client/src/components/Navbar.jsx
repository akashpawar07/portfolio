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
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';


const Navbar = ({
  darkMode,
  setDarkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showMobileThemeMenu, setShowMobileThemeMenu] = useState(false);


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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-900 shadow-md">
      {/* NAVBAR BAR */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Akash&apos;s Work
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition
                  ${active
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}

          {/* DESKTOP THEME TOGGLE WITH DROPDOWN */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowThemeMenu((p) => !p)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {showThemeMenu && (
              <div className="absolute right-0 mt-2 w-32 p-2 rounded-s-md shadow-lg
                    dark:bg-gray-700 border bg-slate-50 dark:border-gray-700">
                {/* DARK */}
                <button
                  onClick={() => {
                    setDarkMode(true);          // ✅ force dark
                    setShowThemeMenu(false);
                  }}
                  className={`w-full flex items-center gap-2 mb-2 rounded-lg px-4 py-2 text-sm
                  ${darkMode ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}
                  hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  <Moon size={14} />
                  Dark
                </button>

                {/* LIGHT */}
                <button
                  onClick={() => {
                    setDarkMode(false);         // ✅ force light
                    setShowThemeMenu(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                  ${!darkMode ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}
                  hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  <Sun size={14} />
                  Light
                </button>
              </div>
            )}
          </div>


        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="p-2 text-gray-800 dark:text-gray-200 relative z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE THEME TOGGLE (LIKE DESKTOP) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 md:hidden
                  h-[calc(100vh-4rem)]
                  bg-slate-100 dark:bg-gray-800
                  transition-all duration-300">

          <div className="pt-8 px-6 space-y-4 overflow-y-auto h-full">
            {/* NAV ITEMS */}
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium
              ${active
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <Icon size={22} />
                  {label}
                </button>
              );
            })}

            {/* MOBILE THEME TOGGLE (EXPANDABLE, LIKE DESKTOP) */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* TOGGLE */}
              <button
                onClick={() => setShowMobileThemeMenu((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-lg font-medium
             text-gray-800 dark:text-gray-200
             hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
              >
                <div className="flex items-center gap-4">
                  {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                  Theme
                </div>

                {/* CHEVRON – MOBILE ONLY */}
                {showMobileThemeMenu ? (
                  <ChevronUp size={20} className="md:hidden" />
                ) : (
                  <ChevronDown size={20} className="md:hidden" />
                )}
              </button>


              {/* OPTIONS */}
              <div
                className={`overflow-hidden transition-all duration-300
            ${showMobileThemeMenu ? 'max-h-40 mt-2' : 'max-h-0'}
          `}
              >
                <div className="pl-8 space-y-2">
                  <button
                    onClick={() => {
                      setDarkMode(true);
                      setShowMobileThemeMenu(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg
                ${darkMode ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''}
                hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    <Moon size={18} />
                    Dark
                  </button>

                  <button
                    onClick={() => {
                      setDarkMode(false);
                      setShowMobileThemeMenu(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg
                ${!darkMode ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : ''}
                hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    <Sun size={18} />
                    Light
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



    </nav>
  );
};

export default Navbar;
