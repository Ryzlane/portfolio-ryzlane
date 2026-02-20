// Section compétences design avec CTA Behance
import { motion } from 'framer-motion';
import { FaBehance } from 'react-icons/fa';
import { DESIGN_SECTION } from '../utils/constants';

const DesignSkills = () => {
  return (
    <section id="design" className="section-container">
      <motion.div
        className="grid md:grid-cols-[2fr,1fr] gap-12 items-center border-2 border-noir px-8 md:px-12 py-[80px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Texte descriptif */}
        <div>
          <h2 className="text-xl font-display mb-6">
            {DESIGN_SECTION.title}
          </h2>
          <p className="text-base leading-relaxed text-muted max-w-2xl">
            {DESIGN_SECTION.description}
          </p>
        </div>

        {/* Bouton Behance */}
        <div className="flex justify-center md:justify-end">
          <motion.a
            href={DESIGN_SECTION.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <FaBehance className="text-xl" />
            {DESIGN_SECTION.buttonText}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default DesignSkills;
