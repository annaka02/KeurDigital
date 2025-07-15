import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaTiktok,
} from 'react-icons/fa6';



const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Contactez-nous</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="exemple@mail.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Écrivez votre message ici..."
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
            >
              Envoyer
            </button>
          </form>

          {/* Infos et Carte */}
          <div className="space-y-6 text-gray-700">
            {/* Coordonnées */}
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Nos coordonnées</h3>
              <p>📞 WhatsApp : <a href="https://wa.me/221771234567" className="text-emerald-600 hover:underline">+221 77 123 45 67</a></p>
              <p>📧 Email : <a href="mailto:keur.digital@outlook.com" className="text-emerald-600 hover:underline">keur.digital@outlook.com</a></p>
            </div>

            {/* Réseaux */}
          <div>
  <h3 className="text-xl font-semibold text-yellow-600 mb-4">Suivez-nous</h3>

  <div className="grid grid-cols-2 gap-4">
    <a
      href="https://instagram.com/keurdigital"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-pink-500 hover:underline"
    >
      <FaInstagram />
      Instagram
    </a>

    <a
      href="https://facebook.com/keurdigital"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-blue-600 hover:underline"
    >
      <FaFacebookF />
      Facebook
    </a>

    <a
      href="https://wa.me/221771234567"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-green-500 hover:underline"
    >
      <FaWhatsapp />
      WhatsApp
    </a>

    <a
      href="https://x.com/keurdigital"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-gray-700 hover:underline"
    >
      <FaXTwitter />
      X (Twitter)
    </a>

    <a
      href="https://tiktok.com/@keurdigital"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-black hover:underline"
    >
      <FaTiktok />
      TikTok
    </a>
  </div>
</div>
          

            {/* Carte */}
            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                title="Localisation Keur Digital"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.921998750938!2d-17.2744744!3d14.7645048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzUyLjIiTiAxN8KwMTYnMjguMSJX!5e0!3m2!1sfr!2ssn!4v1689268444213!5m2!1sfr!2ssn"
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
