/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Accueil = () => {
  return (
    <section className="relative min-h-screen bg-keur flex items-center justify-center px-6">
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

      {/* Contenu avec vraie animation zoom + slide */}
      <motion.div
        className="relative z-10 text-center max-w-3xl text-black"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Bienvenue chez Keur Digital
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Nous accompagnons les entreprises et entrepreneurs dans leur transformation digitale à travers des sites web interactifs, des visuels professionnels et du contenu impactant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Découvrir nos services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Accueil;
