// Bouton flottant avec formulaire de contact
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes, FaPaperPlane } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ryzlane@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          _subject: 'Contact via portfolio',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setStatus('idle');
          setIsOpen(false);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-noir text-blanc dark:bg-blanc dark:text-noir w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        whileTap={{ scale: 0.95 }}
        aria-label="Envoyer un message"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaEnvelope className="text-xl" />}
      </motion.button>

      {/* Formulaire popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 z-50 w-80 bg-blanc dark:bg-[#1a1a1a] border-2 border-noir dark:border-blanc p-6 shadow-xl"
          >
            <h3 className="font-display text-lg mb-4">Me contacter</h3>

            {status === 'success' ? (
              <p className="text-sm text-center py-4">
                Message envoye ! Je vous reponds rapidement.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Votre email *"
                  className="w-full border border-noir dark:border-blanc dark:bg-[#2a2a2a] dark:text-blanc px-3 py-2 text-sm focus:border-2 focus:border-noir dark:focus:border-blanc transition-all"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  placeholder="Votre message *"
                  className="w-full border border-noir dark:border-blanc dark:bg-[#2a2a2a] dark:text-blanc px-3 py-2 text-sm resize-y focus:border-2 focus:border-noir dark:focus:border-blanc transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 !px-4 !py-2 text-sm disabled:opacity-50"
                >
                  <FaPaperPlane className="text-xs" />
                  {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-center opacity-70">
                    Erreur lors de l'envoi. Reessayez.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContact;
