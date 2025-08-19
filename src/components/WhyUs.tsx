import { motion, Variants } from "framer-motion";

export const Whyus = () => {
  // Red box animation (reveal from right → left)
  const revealVariant: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Stagger effect wrapper
  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay each card reveal
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50">
      {/* Section Header */}
      <div className="px-4 flex flex-col md:flex-row sm:px-6 md:px-8 mb-16 gap-5 md:gap-60">
        <span className="flex text-5xl md:text-6xl font-serif font-bold text-black md:mb-6">
          Why <br /> Choose Us
        </span>
        <span className="flex text-black/50 items-center">
          A commitment to excellence in every project.
        </span>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-transparent h-[450px] w-[450px] hidden md:block"></div>

        {/* QC */}
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/QC.jpeg')] flex items-start">
          <motion.div
            className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5"
            variants={revealVariant}
          >
            <span className="text-[30px] block">Quality Craftsmanship</span>
            <span>
              Quality Craftsmanship Providing transparent and fair pricing.
            </span>
          </motion.div>
        </div>

        {/* SP */}
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/SP.avif')] flex items-start">
          <motion.div
            className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5"
            variants={revealVariant}
          >
            <span className="text-[30px] block">Skilled Professionals</span>
            <span>
              Skilled Professionals Qualified and dedicated team members.
            </span>
          </motion.div>
        </div>

        {/* CS */}
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/CS.avif')] flex items-start">
          <motion.div
            className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5"
            variants={revealVariant}
          >
            <span className="text-[30px] block">Customer Satisfaction</span>
            <span>Ensuring a positive experience for every client.</span>
          </motion.div>
        </div>

        {/* DE */}
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/DE.jpeg')] flex items-start">
          <motion.div
            className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5"
            variants={revealVariant}
          >
            <span className="text-[30px] block">Decades of Experience</span>
            <span>Bringing decades of expertise to every project.</span>
          </motion.div>
        </div>
        <div className="bg-transparent h-[450px] w-[450px] hidden md:block"></div>
      </motion.div>
    </section>
  );
};
