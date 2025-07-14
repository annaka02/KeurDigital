import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte gauche */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Bienvenue chez Keur Digital
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Nous accompagnons les entreprises et entrepreneurs dans leur transformation digitale à travers des sites web interactifs, des visuels professionnels et du contenu impactant.
          </p>
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Image ou illustration à droite */}
        <div className="hidden md:block">
          <img
            src="https://emudhra.com/hubfs/Imported_Blog_Media/Z9zIzio7SX3Ys9vlfCnh.webp"
            alt="Illustration digitale"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;
