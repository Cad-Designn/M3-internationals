import { motion, Variants } from "framer-motion";

export const Expertise = () => {
  const services = [
    {
      title: "Custom Builds",
      description:
        "Bespoke construction tailored to your unique vision and requirements.",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "New Builds",
      description:
        "Modern homes and commercial spaces built with precision and style.",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Restorations",
      description: "Breathe new life into historic and classic structures.",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Quality Materials",
      description: "Using the finest resources for lasting results.",
      image: "",
    },
    {
      title: "Meticulous Attention",
      description: "Ensuring perfection in every aspect.",
      image: "",
    },
  ];

  // Animation variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }, // delay between each child
    },
  };

  return (
    <section className="py-24">
      {/* Heading */}
      <motion.div
        className="mb-20 px-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">
          Our Expertise
        </h2>
        <div className="w-24 h-[2px] bg-black mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl ">
          From concept to completion, we deliver exceptional construction
          solutions that exceed expectations and stand the test of time.
        </p>
      </motion.div>

      {/* First 3 cards */}
      <div className="grid md:grid-cols-3 mx-10 gap-6">
        {services.slice(0, 3).map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#182757] text-white p-8 flex flex-col items-start rounded-2xl shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover="hover"
          >
            <div
              className="w-10 h-6 rotate-45 bg-[#58a4db] mb-4
              [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
            ></div>
            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
            <p className="text-white/80">{service.description}</p>
          </motion.div>
        ))}

        {/* Bottom row */}
        <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#182757] text-white p-8 flex flex-col items-start rounded-2xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover="hover"
            >
              <div
                className="w-10 h-6 rotate-45 bg-[#58a4db] mb-4
                [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
              ></div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section with parallax + CTA */}
      <div className="w-full md:h-[80vh] h-[50vh] mt-[10vh] px-10 flex md:gap-8">
        <motion.div
          className="bg-[#58a4db] rounded-lg md:px-10 px-5 flex flex-col justify-center w-full md:w-[70%]"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="text-white text-lg" variants={textItem}>
            Building Excellence
          </motion.p>

          <motion.h1
            className="text-white font-extrabold md:w-[70%] md:text-[58px] text-[20px] leading-tight"
            variants={textItem}
          >
            Serving Clients in the Region
          </motion.h1>

          <motion.button
            className="mt-6 w-fit  bg-white text-black/70 font-medium px-3 md:px-6 md:py-3 rounded-md hover:bg-gray-200 transition"
            variants={textItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Parallax Window (fade only) */}
        <motion.div
          className="relative   w-[30%] h-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute bg-cover inset-0 w-full bg-black bg-[url('/overlay.jpeg')] bg-no-repeat"
            style={{
              backgroundAttachment: "fixed",
              clipPath: "inset(0 0% 0% 0)",
            }}
          >
            <div className="w-full h-full bg-black/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
