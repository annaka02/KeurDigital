import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaInstagram, FaFacebookF, FaWhatsapp, FaXTwitter, FaTiktok,
} from 'react-icons/fa6';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  const email = form.current.reply_to.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // Envoi au business
  emailjs.sendForm(
    'service_c0t5szb',
    'template_dh92bie',
    form.current,
    '27FJ-1QPh4CqL4_l8'
  ).then(
    (result) => {
      console.log('Message envoyé', result.text);
      setMessageSent(true);
    },
    (error) => {
      console.error('Erreur :', error.text);
    }
  );

  // Réponse automatique client
  emailjs.sendForm(
    'service_c0t5szb',
    'template_ak54x2m',
    form.current,
    '27FJ-1QPh4CqL4_l8'
  );

  e.target.reset();
};


  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Contactez-nous</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Nom</label>
              <input name="from_name" type="text" required className="w-full border rounded px-3 py-2 focus:ring-emerald-500"  maxLength={10}  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$"
    title="Veuillez entrer un nom valide (lettres uniquement)" placeholder="Votre nom" />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input name="reply_to" type="email" required className="w-full border rounded px-3 py-2 focus:ring-emerald-500" maxLength={100}
                 pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Veuillez entrer une adresse email valide" placeholder="exemple@mail.com" />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea name="message" rows="4" required className="w-full border rounded px-3 py-2 focus:ring-emerald-500"  minLength={30} placeholder="Votre message..." />
            </div>

            <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
              Envoyer
            </button>

            {messageSent && <p className="text-green-600 font-medium mt-2">Votre message a bien été envoyé ✅</p>}
          </form>

          {/* Infos et Carte */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Nos coordonnées</h3>
              <p>📞 WhatsApp : <a href="https://wa.me/221771234567" className="text-emerald-600 hover:underline">+221 77 123 45 67</a></p>
              <p>📧 Email : <a href="mailto:keur.digital@outlook.com" className="text-emerald-600 hover:underline">keur.digital@outlook.com</a></p>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Suivez-nous</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/keur_digital" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-500 hover:underline">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://facebook.com/keurdigital221" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <FaFacebookF /> Facebook
                </a>
                <a href="https://wa.me/221771234567" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-500 hover:underline">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="https://x.com/digitalkeur" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:underline">
                  <FaXTwitter /> X (Twitter)
                </a>
                <a href="https://tiktok.com/@keurdigital2025" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black hover:underline">
                  <FaTiktok /> TikTok
                </a>
              </div>
            </div>

            {/* Carte Google */}
            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                title="Localisation Keur Digital"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
