/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="relative pt-6" role="banner">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-10" aria-label="Main navigation">
        {/* Logo */}
        <div className="w-32">
          <a href="/" aria-label="Homepage">
            <img
              src="/logo.png"
              alt="Expose — African Talent Platform logo"
              className="w-full object-contain"
            />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col-reverse lg:flex-row items-center gap-10"
        aria-labelledby="hero-heading"
      >
        {/* Text Block */}
        <div className="lg:w-2/3">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.6 },
            }}
            className="hero-text font-primary text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Make way for Africa.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, skewX: 10 }}
            whileInView={{
              opacity: 1,
              skewX: 0,
              transition: { duration: 0.4, delay: 1 },
            }}
            className="hero-sub-text text-gray-700"
          >
            We’re breaking open global doors and building new paths that put
            African talent at the center of the industry.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-5 mt-6">
            <button
              type="button"
              className="cursor-pointer uppercase inline-block w-full sm:w-auto text-center px-8 py-4 border border-black text-base font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
              aria-label="Browse available talent"
            >
              Discover Talent
            </button>
            <button
              type="button"
              className="cursor-pointer uppercase inline-block w-full sm:w-auto text-center px-8 py-4 border font-medium border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
              aria-label="Apply to become a model"
            >
              Join as a Model
            </button>
          </div>
        </div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
            },
          }}
          className="w-full lg:w-1/2 aspect-square relative"
        >
          <img
            src="/image.jpg"
            alt="Collage showcasing diverse African models"
            className="absolute inset-0 w-full h-full object-top"
          />
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
