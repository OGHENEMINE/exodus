// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const OurVision = () => {
  return (
    <section className="">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, skewX: 20 }}
          whileInView={{
            opacity: 1,
            skewX: 0,
            transition: { duration: 0.5, },
          }}
          className="font-primary text-4xl md:text-5xl font-bold leading-tight"
        >
          Our vision
        </motion.h2>
      </div>

      {/* Vision Quote Content */}
      <div className="md:max-w-2xl w-full mx-auto text-center">
        <blockquote className="italic text-gray-700 text-xl md:text-2xl relative leading-10">
          <p className="before:text-neutral-800 before:font-mono after:font-mono before:content-['“'] after:content-['”'] before:text-8xl">
            To tailor global opportunities for the African space — creatively,
            commercially, and culturally. We are not just joining the global
            stage. We are redesigning the entry points, so African talent can be
            seen and truly valued.
          </p>
        </blockquote>
        <cite className="block text-right font-medium mt-4 text-gray-500 text-sm not-italic">
          — Exodus Group
        </cite>
      </div>
    </section>
  );
};

export default OurVision;
