import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo ou nom */}
      <div className="text-2xl font-bold text-blue-600">
        Keur Digital
      </div>

      {/* Liens */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-blue-600">Accueil</Link></li>
        <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
        <li><Link to="/realisations" className="hover:text-blue-600">Réalisations</Link></li>
        <li><Link to="/a-propos" className="hover:text-blue-600">À propos</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>

      {/* Menu burger mobile */}
      <div className="md:hidden">
        <button>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
