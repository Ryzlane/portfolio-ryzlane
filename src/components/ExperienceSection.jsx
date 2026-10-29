// Section générique "expériences" : description à gauche, parcours à droite.
// Réutilisée pour les sections Produit et Communauté (voir constants.js).
import { motion } from 'framer-motion';

const ExperienceSection = ({ data }) => {
  const { id, title, description, listTitle, experiences } = data;

  return (
    <section id={id} className="section-container">
      <motion.div
        className="grid md:grid-cols-2 gap-20 border-2 border-noir dark:border-blanc px-8 md:px-12 py-[80px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Colonne gauche : Description */}
        <div>
          <h2 className="text-xl font-display mb-6">{title}</h2>
          <p className="text-base leading-relaxed text-muted">{description}</p>
        </div>

        {/* Colonne droite : Expériences */}
        <div>
          <h2 className="text-xl font-display mb-6">{listTitle}</h2>
          <ul className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.li
                key={exp.id}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-xl">👉</span>
                <div>
                  <p className="text-base font-bold">
                    {exp.role} · {exp.org}
                  </p>
                  <p className="text-sm text-muted">{exp.period}</p>
                  <p className="text-sm leading-relaxed text-muted mt-1">{exp.summary}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
