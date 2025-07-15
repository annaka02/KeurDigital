import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  // Synchroniser le mode sombre avec la classe HTML et localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Au chargement, on récupère la préférence stockée ou système
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 text-xl hover:scale-105 transition-transform duration-300"
          onClick={() => setIsOpen(false)} // Fermer menu si click sur logo
        >
          <img src="src/Images/logo.png" alt="Logo" className="w-20" />
        </NavLink>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 font-medium transition-all duration-300 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                  } hover:text-blue-600 dark:hover:text-blue-400 group`
                }
                onClick={() => setIsOpen(false)} // Fermer menu si click sur lien (utile si on adapte responsive)
              >
                {link.name}
                <span className="block h-[2px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton mode clair/sombre */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="hidden md:block ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          title="Basculer mode clair/sombre"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Bouton hamburger mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Bouton mode clair/sombre mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            title="Basculer mode clair/sombre"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Toggle menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-4 text-center">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block font-medium text-lg ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                  } hover:text-blue-600 dark:hover:text-blue-400`
                }
                onClick={() => setIsOpen(false)} // fermer menu au clic
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
