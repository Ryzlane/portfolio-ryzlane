// Section compétences développement avec terminal header
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { DEV_SECTION } from '../utils/constants';

const DevSkills = () => {
  return (
    <section id="developpement" className="section-container">
      <div className="border-2 border-noir dark:border-blanc">
        {/* Header terminal-style */}
        <motion.div
          className="bg-noir text-blanc dark:bg-blanc dark:text-noir px-6 py-3 flex justify-between items-center font-mono text-sm border-b-2 border-noir dark:border-blanc"
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
            <FaGithub className="inline mr-1" />cd ryzlane/github
          </a>
        </motion.div>

        {/* Contenu : miroir de WritingSection */}
        <motion.div
          className="grid md:grid-cols-2 gap-20 px-8 md:px-12 py-[80px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Colonne gauche : Description */}
          <div>
            <h2 className="text-xl font-display mb-6">
              {DEV_SECTION.title}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {DEV_SECTION.description}
            </p>
          </div>

          {/* Colonne droite : Articles */}
          <div>
            <h2 className="text-xl font-display mb-6">
              Laboratoire
            </h2>
            <ul className="space-y-4">
              {DEV_SECTION.projects.map((project, index) => (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:underline transition-all"
                    >
                      <span className="text-xl">👉</span>
                      <span className="text-base">{project.title}</span>
                    </a>
                  ) : (
                    <span className="flex items-start gap-3">
                      <span className="text-xl">👉</span>
                      <span className="text-base">{project.title}</span>
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevSkills;
