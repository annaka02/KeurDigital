import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Contactez-nous</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulaire */}
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="exemple@mail.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Écrivez votre message ici..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>

          {/* Coordonnées */}
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Nos coordonnées</h3>
              <p>📞 WhatsApp : <a href="https://wa.me/221771234567" className="text-blue-600 hover:underline">+221 77 123 45 67</a></p>
              <p>📧 Email : <a href="mailto:contact@keurdigital.com" className="text-blue-600 hover:underline">contact@keurdigital.com</a></p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Suivez-nous</h3>
              <ul className="space-y-1">
                <li>📸 Instagram : <a href="https://instagram.com/keurdigital" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">@keurdigital</a></li>
                <li>💼 LinkedIn : <a href="https://linkedin.com/company/keurdigital" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Keur Digital</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
