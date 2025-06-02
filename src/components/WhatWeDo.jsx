// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const WhatWeDo = () => {
  return (
    <section className="space-y-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, skewX: 20 }}
          whileInView={{
            opacity: 1,
            skewX: 0,
            transition: { duration: 0.5 },
          }}
          className="font-primary text-4xl md:text-5xl font-bold leading-tight"
        >
          What we do
        </motion.h2>
      </div>

      {/* Exodus Models */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: 0.5 },
          }}
          className="relative aspect-square w-full md:max-w-sm"
        >
          <img
            src="/visibility.jpg"
            alt="A collage of runway models and brand logos"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="w-full space-y-6">
          <h3 className="text-3xl font-bold font-primary">Exodus Models</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
                1
              </span>
              <div className="">
                <p className="font-semibold text-gray-800 text-lg">Training</p>
                <p className="text-gray-700">
                  Equipping talent with skills that scale globally.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Exposure</p>
                <p className="text-gray-700">
                  Putting African faces on global platforms.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  Global Bookings
                </p>
                <p className="text-gray-700">
                  Securing international opportunities that matter.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Exodustips */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}
          className="relative aspect-square w-full md:max-w-sm mx-auto"
        >
          <img
            src="/who-we-are.jpg"
            alt="A collage of runway models and brand logos"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="text-3xl font-bold font-primary flex items-center gap-2"
          >
            Exodus tips
            <span className="text-xs bg-black text-white px-2 py-1 uppercase">
              Coming Soon
            </span>
          </motion.h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              A simple way to receive tips — instantly.
            </p>
            <p className="text-gray-700">
              No borders. No barriers. Just support the shows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
