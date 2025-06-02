// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Header = () => {
  return (
    //   Header
    <header className="relative pt-6">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-10">
        {/* Logo */}
        <div className="w-32">
          <img
            src="/logo.png"
            alt="Expose logo"
            className="w-full object-contain"
          />
        </div>

        {/* Optional Nav Links */}
        {/*       <div className="space-x-6 text-sm hidden md:flex font-bold">
            <a href="#" className="hover:underline">Discover</a>
            <a href="#" className="hover:underline">Book Models</a>
          </div>  */}
      </nav>

      {/*  Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Block */}
        <div className="lg:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.6},
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
            <button className="cursor-pointer uppercase inline-block w-full sm:w-auto text-center px-8 py-4 border border-black text-base font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition">
              Discover Talent
            </button>
            <button className="cursor-pointer uppercase inline-block w-full sm:w-auto text-center px-8 py-4 border font-medium border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition">
              Join as a Model
            </button>
          </div>
        </div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
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
            alt="A collage of black models"
            className="absolute inset-0 w-full h-full object-top"
          />
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
