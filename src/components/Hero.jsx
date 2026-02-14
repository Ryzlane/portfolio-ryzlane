// Hero section avec animations Framer Motion
import { motion } from 'framer-motion';
import { FaLinkedin, FaDownload } from 'react-icons/fa';
import { HERO_TEXT, LINKS } from '../utils/constants';

const Hero = () => {
  // Variantes d'animation
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <section className="max-w-container mx-auto px-6 md:px-12 pt-10 pb-0">
      <div className="grid md:grid-cols-[3fr,2fr] gap-0 border-2 border-noir">
        {/* Colonne gauche : Texte */}
        <div className="p-8 md:p-12 border-r-2 border-noir">
          <motion.h1
            className="text-hero-mobile md:text-hero font-display font-black leading-none"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {HERO_TEXT.title.replace('●', '')}<span className="text-3xl align-super">.</span>
          </motion.h1>

          <motion.p
            className="text-xl mt-4 font-bold"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {HERO_TEXT.baseline}
          </motion.p>

          <motion.p
            className="text-sm text-muted mt-8 max-w-md leading-relaxed"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {HERO_TEXT.repeatedText}
          </motion.p>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <motion.a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>

            <motion.a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download
              className="inline-flex items-center gap-2 text-sm text-noir hover:underline transition-all"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <FaDownload className="text-sm" />
              Télécharger mon CV
            </motion.a>
          </div>
        </div>

        {/* Colonne droite : Photo */}
        <motion.div
          className="flex items-center justify-center"
          variants={fadeInScale}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}photo-ryzlane.JPG`}
            alt="Photo de Ryzlane"
            className="w-full h-full rounded-full border-2 border-noir object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
