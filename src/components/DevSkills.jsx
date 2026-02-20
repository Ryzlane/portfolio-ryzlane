// Section compétences développement avec terminal header
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { DEV_SECTION } from '../utils/constants';

const DevSkills = () => {
  return (
    <section id="developpement" className="section-container">
      <div className="border-2 border-noir">
        {/* Header terminal-style */}
        <motion.div
          className="bg-noir text-blanc px-6 py-3 flex justify-between items-center font-mono text-sm border-b-2 border-noir"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span>cd ryzlane/projects/dev</span>
        <a
          href={DEV_SECTION.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          cd ryzlane/github
        </a>
      </motion.div>

        {/* Contenu */}
        <motion.div
          className="grid md:grid-cols-[1fr,2fr] gap-12 px-8 md:px-12 py-[80px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Bouton projet */}
          <div className="flex flex-col items-start gap-3">
            <motion.a
              href={DEV_SECTION.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode className="text-xl" />
              {DEV_SECTION.projectTitle}
            </motion.a>
            <p className="text-xs opacity-70 text-left max-w-[200px]">
              {DEV_SECTION.projectNote}
            </p>
          </div>

          {/* Description compétences */}
          <div>
            <h2 className="text-xl font-display mb-6">
              {DEV_SECTION.title}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {DEV_SECTION.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevSkills;
