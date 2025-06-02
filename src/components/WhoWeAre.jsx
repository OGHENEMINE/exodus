// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const WhoWeAre = () => {
  return (
    <section>
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, skewX: 20 }}
          whileInView={{
            opacity: 1,
            skewX: 0,
            transition: { duration: 0.5 },
          }}
          className="font-primary text-4xl md:text-5xl font-bold leading-tight md:leading-[60px] mb-4"
        >
          Who are we
        </motion.h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          The industry needed change — so we became the change.
        </p>
      </div>

      {/* who we are: content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } }}
          className="relative aspect-square w-full md:max-w-sm"
        >
          <img
            src="/who-we-are.jpg"
            alt="A collage of runway models and brand logos"
            className="w-full h-full object-top"
          />
        </motion.div>

        {/* Text Block */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            It started in 2017 with one bold mission: give African models a
            global runway.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That spark became Exodus Models Africa — a movement that turned
            vision into visibility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we’re evolving into Exodus Groups: a collective of power
            tools, platforms, and products built for African brilliance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From fashion to fintech. From creators to communities.
          </p>

          <button className="cursor-pointer uppercase inline-block w-full sm:w-auto text-center px-8 py-4 border font-medium border-black hover:bg-black hover:text-white text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
