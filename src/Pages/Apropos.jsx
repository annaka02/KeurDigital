import React from 'react';

const APropos = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">À propos de Keur Digital</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Keur Digital est une startup fondée par deux jeunes femmes passionnées par le digital, la création de contenu et le design.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Notre objectif ? Offrir aux entreprises locales, aux entrepreneurs et aux marques une **présence en ligne professionnelle, moderne et impactante**.
            </p>
            <p className="text-lg text-gray-700">
              Nous croyons en un web accessible, humain et créatif. Avec Keur Digital, chaque projet est une collaboration unique basée sur l’écoute, la qualité et l’innovation.
            </p>
          </div>

          {/* Image ou illustration */}
          <div className="hidden md:block">
            <img
              src="https://cdn.standardmedia.co.ke/images/tuesday/nwpg2ujktut5l5f572e6850c16.jpg"
              alt="Équipe Keur Digital"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
