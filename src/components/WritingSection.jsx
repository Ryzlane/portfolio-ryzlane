// Section écriture avec articles et card Instagram
import { motion } from 'framer-motion';
import { WRITING_SECTION } from '../utils/constants';

const WritingSection = () => {
  return (
    <section id="ecriture" className="section-container">
      <motion.div
        className="grid md:grid-cols-2 gap-12 border-2 border-noir p-8 md:p-12"
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
            {WRITING_SECTION.rédaction.articles.map((article, index) => (
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
          <h2 className="text-xl font-display font-bold mb-6">
            {WRITING_SECTION.creative.title}
          </h2>
          <motion.a
            href={WRITING_SECTION.creative.cardLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark block text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              {WRITING_SECTION.creative.cardTitle}
            </h3>
            <p className="text-sm opacity-80">
              {WRITING_SECTION.creative.cardSubtitle}
            </p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default WritingSection;
