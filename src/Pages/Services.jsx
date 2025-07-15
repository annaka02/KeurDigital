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
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Nos Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          Découvrez comment Keur Digital vous aide à développer votre image et votre présence sur le web.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl shadow-lg bg-white transition-all duration-500 transform hover:scale-105 hover:bg-blue-600 hover:shadow-2xl cursor-pointer"
            >
              {/* Halo d’arrière-plan au hover */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 z-0"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-500 text-blue-600 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
