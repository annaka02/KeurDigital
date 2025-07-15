import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
        <NavLink to="/" className="flex items-center gap-2 font-bold text-blue-600 text-xl hover:scale-105 transition-transform duration-300">
          <img src="src/Images/logo.png" alt="Logo" className="w-35" />
        </NavLink>

        {/* Liens de navigation */}
        <ul className="flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 font-medium transition-all duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  } hover:text-blue-600 group`
                }
              >
                {link.name}
                {/* Barre animée sous le lien */}
                <span className="block h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
