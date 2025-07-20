import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../Images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-blue-600 text-xl hover:scale-105 transition-transform duration-300"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} alt="Logo" className="w-15" />
        </NavLink>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 font-medium transition-all duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  } hover:text-blue-600 group`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="block h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton hamburger (mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block font-medium text-lg ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  } hover:text-blue-600`
                }
                onClick={() => setIsOpen(false)}
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
