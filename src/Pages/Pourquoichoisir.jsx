import React from 'react';
import { FaRocket, FaSmile, FaLightbulb, FaChartLine } from 'react-icons/fa';

const PourquoiChoisir = () => {
  const raisons = [
    {
      icon: <FaRocket className="text-blue-600 text-4xl mb-3" />,
      title: 'Un accompagnement personnalisé',
      description:
        'Nous comprenons vos besoins et vous proposons des solutions adaptées à votre secteur, votre budget et votre ambition.',
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-3" />,
      title: 'Créativité et impact',
      description:
        'Des visuels uniques, des textes percutants et une image cohérente pour faire de votre marque une référence.',
    },
    {
      icon: <FaChartLine className="text-emerald-500 text-4xl mb-3" />,
      title: 'Objectif résultats',
      description:
        'Notre but est simple : générer plus de visibilité, plus d’engagement et plus de ventes pour votre activité.',
    },
    {
      icon: <FaSmile className="text-pink-500 text-4xl mb-3" />,
      title: 'Réactivité & proximité',
      description:
        'Une équipe disponible, à l’écoute, qui avance avec vous à chaque étape de votre digitalisation.',
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Pourquoi choisir Keur Digital ?</h2>
        <p className="text-gray-700 text-lg mb-12">
          Que vous soyez commerçant, créateur ou entrepreneur, nous vous aidons à construire une image forte et
          crédible sur le web.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
          {raisons.map((raison, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition duration-300 hover:scale-105"
            >
              {raison.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{raison.title}</h3>
              <p className="text-gray-600">{raison.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-800">
            🚀 Donnez à votre marque l’élan digital qu’elle mérite.  
            <span className="font-semibold text-blue-600"> Faites confiance à Keur Digital.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisir;
