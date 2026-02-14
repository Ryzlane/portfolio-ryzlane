// Section écriture avec articles et card Instagram
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { WRITING_SECTION } from '../utils/constants';

const WritingSection = () => {
  return (
    <section id="ecriture" className="section-container">
      <motion.div
        className="grid md:grid-cols-2 gap-20 border-2 border-noir px-8 md:px-12 py-[80px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Colonne gauche : Rédaction */}
        <div>
          <h2 className="text-xl font-display font-bold mb-6">
            {WRITING_SECTION.rédaction.title}
          </h2>
          <ul className="space-y-4">
            {WRITING_SECTION.rédaction.articles
              .filter((article) => article.id !== 3)
              .map((article, index) => (
                <motion.li
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:underline transition-all"
                  >
                    <span className="text-xl">👉</span>
                    <span className="text-base">{article.title}</span>
                  </a>
                </motion.li>
              ))}
          </ul>
        </div>

        {/* Colonne droite : Écriture créative */}
        <div>
          <h2 className="text-xl font-display font-bold mb-6 text-right">
            {WRITING_SECTION.creative.title}
          </h2>
          <div className="flex flex-col items-end gap-3">
            <motion.a
              href={WRITING_SECTION.creative.cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <FaInstagram className="text-xl" />
              {WRITING_SECTION.creative.cardTitle}
            </motion.a>
            <p className="text-xs opacity-70 text-right max-w-[200px]">
              {WRITING_SECTION.creative.cardSubtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WritingSection;
