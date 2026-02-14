// Section compétences développement avec terminal header
import { motion } from 'framer-motion';
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
          className="grid md:grid-cols-[1fr,2fr] gap-12 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Card projet */}
          <motion.div
            className="card-dark"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-display font-bold mb-4">{DEV_SECTION.projectTitle}</h3>
            <p className="text-xs italic opacity-70 mt-8">
              {DEV_SECTION.projectNote}
            </p>
          </motion.div>

          {/* Description compétences */}
          <div>
            <h2 className="text-xl font-display font-bold mb-6">
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
