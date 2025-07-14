import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Création de sites web',
      description: 'Sites vitrines, portfolios ou e-commerces interactifs, conçus pour refléter votre image et booster votre présence en ligne.',
      icon: '🌐',
    },
    {
      title: 'Design de visuels',
      description: 'Logos, flyers, affiches et tous types de visuels modernes pour une communication percutante.',
      icon: '🎨',
    },
    {
      title: 'Contenu réseaux sociaux',
      description: 'Création de visuels et de textes engageants pour vos réseaux sociaux afin d’attirer et fidéliser votre audience.',
      icon: '📱',
    },
    {
      title: 'Stratégie digitale',
      description: 'Accompagnement personnalisé pour définir votre image de marque et votre présence en ligne.',
      icon: '🧠',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Nos Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          Découvrez comment Keur Digital vous aide à développer votre image et votre présence sur le web.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
