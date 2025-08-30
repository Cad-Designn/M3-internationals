import { motion } from "framer-motion";
import { Hammer, Wrench, Ruler } from "lucide-react"; // nice minimal icons
import ReviewsSection from "./ReviewsSection";

export const Craftsmanship = () => {
  const cards = [
    {
      title: "New Construction",
      desc: "Creating new homes with care and expertise.",
      icon: <Hammer className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Quality Renovation",
      desc: "Revitalizing spaces with dedication.",
      icon: <Wrench className="w-10 h-10 text-indigo-400" />,
    },
    {
      title: "Attention To Detail",
      desc: "Focusing on precision in every project.",
      icon: <Ruler className="w-10 h-10 text-purple-400" />,
    },
  ];

  return (
    <section className="relative pt-28  overflow-hidden">
      {/* Heading */}
      <motion.div
        className="mb-20 px-8 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-serif text-black mb-4">
          Our Craftsmanship
        </h2>
        <div className="mx-auto w-24 h-[4px] bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full"></div>
        <p className="mt-6 text-black/80 max-w-2xl mx-auto text-lg">
          Excelling in crafting exceptional spaces with passion and precision.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl group overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex flex-col gap-4">
              {card.icon}
              <h3 className="text-2xl font-semibold text-black">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showcase Section */}
      {/* <div className="relative mt-32 flex flex-col md:flex-row items-center justify-center gap-12 px-8 max-w-7xl mx-auto">
        <motion.img
          src="/assets/church2.jpeg"
          alt="award"
          className="w-[280px] md:w-[380px] md:h-[500px]  rounded-2xl shadow-2xl relative z-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        /> */}

      {/* Wood Background */}
      {/* <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-[url('/assets/church.jpeg')] bg-cover bg-center"
            style={{ backgroundAttachment: "fixed" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div> */}

      {/* Floating Badge */}
      {/* <motion.div
            className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-white">10+ Years</p>
            <p className="text-sm text-gray-200">Of Building Excellence</p>
          </motion.div>
        </div>
      </div> */}
      <ReviewsSection />
    </section>
  );
};
