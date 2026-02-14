// Section sondages IFOP avec 4 axes de personnalité
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SURVEY_AXES } from '../utils/constants';

const SurveyAxis = ({ labelTop, labelBottom, position, index }) => {
  const isLastInRow = (index + 1) % 4 === 0; // Dernier de chaque ligne en desktop (4 cols)
  const isNotFirstInRow = index % 4 !== 0; // Pas le premier de chaque ligne en desktop (4 cols)

  return (
    <motion.div
      className={`border-t-2 border-dashed border-noir p-8 text-center h-full flex flex-col ${
        !isLastInRow ? 'lg:border-r-2 lg:border-dashed' : ''
      } ${isNotFirstInRow ? 'lg:border-l-2 lg:border-dashed' : ''}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <p className="text-base font-semibold mb-auto pb-4 flex items-end justify-center min-h-[3rem]">{labelTop}</p>

      {/* Indicateur visuel */}
      <div className="h-20 flex items-center justify-center relative flex-shrink-0">
        <div className="w-2 h-full bg-noir absolute"></div>
        <div
          className="absolute w-6 h-2 bg-noir"
          style={{ top: `${position}%`, transform: 'translateY(-50%)' }}
        ></div>
      </div>

      <p className="text-base font-semibold mt-auto pt-4 flex items-start justify-center min-h-[3rem]">{labelBottom}</p>
    </motion.div>
  );
};

const PersonalitySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section className="max-w-container mx-auto px-6 md:px-12 pb-10">
      <div className="border-x-2 border-b-2 border-noir bg-blanc">
        <motion.h2
          className="text-2xl md:text-3xl font-display text-center mb-12 px-8 md:px-12 pt-8 md:pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Selon les sondages (approuvés par l'IFOP), ce qui me correspond c'est...
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SURVEY_AXES.map((axis, index) => (
            <div key={axis.id} className="h-full">
              <SurveyAxis {...axis} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalitySection;
