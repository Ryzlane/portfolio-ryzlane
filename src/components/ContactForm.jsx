// Formulaire de contact avec Formspree
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FORMSPREE_ENDPOINT } from '../utils/constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container bg-gris-clair dark:bg-[#2a2a2a]">
      <motion.div
        className="max-w-form mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-display font-bold text-center mb-12">
          Travaillons ensemble
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Votre nom"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="votre@email.com"
            />
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input-field"
              placeholder="Sujet de votre message"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="input-field resize-y"
              placeholder="Votre message..."
            />
          </div>

          {/* Bouton submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {/* Messages feedback */}
          {status === 'success' && (
            <p className="text-noir dark:text-blanc text-center font-semibold mt-4 p-4 border-2 border-noir dark:border-blanc bg-blanc dark:bg-[#2a2a2a]">
              ✓ Message envoyé avec succès ! Je vous réponds rapidement.
            </p>
          )}

          {status === 'error' && (
            <p className="text-noir dark:text-blanc text-center font-semibold mt-4 p-4 border-2 border-noir dark:border-blanc bg-gris-clair dark:bg-[#333]">
              ✗ Erreur lors de l'envoi. Veuillez réessayer.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
