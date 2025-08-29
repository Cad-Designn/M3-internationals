import { motion } from "framer-motion";

export const Expertise = () => {
  const services = [
    {
      title: "Custom Builds",
      description:
        "Bespoke construction tailored to your unique vision and requirements.",
      image: "/assets/design.jpeg",
    },
    {
      title: "New Builds",
      description:
        "Modern homes and commercial spaces built with precision and style.",
      image: "/assets/construction.jpeg",
    },
    {
      title: "Restorations",
      description: "Breathe new life into historic and classic structures.",
      image: "/assets/resto.jpeg",
    },
    {
      title: "Quality Materials",
      description: "Using the finest resources for lasting results.",
      image: "/Business.jpg",
    },
    {
      title: "Meticulous Attention",
      description: "Ensuring perfection in every aspect.",
      image: "/assets/church3.jpeg",
    },
  ];

  return (
    <section className="relative py-28    overflow-hidden">
      {/* Heading */}
      <motion.div
        className="mb-20 px-6 text-center relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-4 tracking-tight">
          Our Expertise
        </h2>
        <div className="mx-auto w-24 h-[4px] bg-gradient-to-r from-indigo-500 to-sky-400 mb-6 rounded-full"></div>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          From concept to completion, we deliver exceptional construction
          solutions that exceed expectations and stand the test of time.
        </p>
      </motion.div>

      {/* Premium Services Carousel */}
      {/* Premium Services Infinite Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll w-max px-8">
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] md:min-w-[340px] lg:min-w-[380px] relative group rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-lg border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover="hover"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-80">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* gradient masks for fade edges */}
      </div>

      {/* Premium CTA Section */}
      <div className="mt-32 relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6 relative z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-400 uppercase font-medium tracking-wide">
            Building Excellence
          </p>
          <h1 className="text-black font-extrabold text-4xl md:text-6xl leading-tight">
            Serving Clients Across the Region
          </h1>
          <p className="text-black/60 md:text-lg leading-relaxed max-w-lg">
            Trusted by industry leaders and homeowners alike, we pride ourselves
            on delivering unmatched quality and craftsmanship in every project.
          </p>
          <button className="mt-4 w-fit bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-medium px-8 py-4 rounded-xl hover:opacity-90 transition">
            Contact Us
          </button>
        </motion.div>

        {/* Right Image Showcase */}
        <motion.div
          className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/S&C.jpg"
            alt="construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 text-white shadow-lg border border-white/10">
            <p className="font-semibold text-lg">+200 Happy Clients</p>
            <p className="text-sm text-gray-200">Across multiple regions</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-[90%] h-[1px]  bg-gradient-to-r from-transparent via-black to-transparent  " />
    </section>
  );
};
