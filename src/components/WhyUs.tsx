import { motion, Variants } from "framer-motion";

export const Whyus = () => {
  const revealVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const items = [
    {
      title: "Quality Craftsmanship",
      desc: "Providing transparent and fair pricing with exceptional work.",
      img: "/QC.jpeg",
    },
    {
      title: "Skilled Professionals",
      desc: "Qualified and dedicated team members delivering excellence.",
      img: "/SP.avif",
    },
    {
      title: "Customer Satisfaction",
      desc: "Ensuring a positive experience for every client.",
      img: "/CS.avif",
    },
    {
      title: "Decades of Experience",
      desc: "Bringing decades of expertise to every project.",
      img: "/DE.jpeg",
    },
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
          Why Choose Us
        </h2>
        <div className="mx-auto mt-4 w-24 h-[4px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"></div>
        <p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto">
          A commitment to excellence in every project.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 px-6 mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={revealVariant}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl group bg-gray-800"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">{item.desc}</p>
            </div>

            {/* Glow hover effect */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
