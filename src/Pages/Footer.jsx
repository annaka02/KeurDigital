import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';


const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Bloc 1 : nom + slogan */}
        <div>
          <img src={logo} alt="Logo Keur Digital" className="w-85" />
        </div>

        {/* Bloc 2 : Liens rapides */}
        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/realisations" className="hover:underline">A propos</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Bloc 3 : Contact & réseaux */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>📧 keur.digital@outllok.com</li>
            <li>📱 WhatsApp : +221 77 123 45 67</li>
            <li>
              📸 <a href="https://instagram.com/keurdigital" className="hover:underline" target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li>
              💼 <a href="https://linkedin.com/company/keurdigital" className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 text-center text-sm border-t border-white/30 pt-4">
        © {new Date().getFullYear()} Keur Digital. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
