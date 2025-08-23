import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Craftsmanship",
      description:
        "Every project is executed with meticulous attention to detail and unwavering commitment to quality.",
    },
    {
      icon: Users,
      title: "Premium Materials",
      description:
        "We source only the finest materials to ensure longevity and aesthetic excellence in every build.",
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description:
        "From concept to completion, every element is carefully considered and precisely executed.",
    },
    {
      icon: Heart,
      title: "Heritage",
      description:
        "Built on decades of experience and a legacy of exceptional construction projects.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/bg1.jpg"
        className="min-h-96 flex items-center justify-center"
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Building dreams with precision, passion, and unparalleled expertise
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif font-bold text-black mb-8">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-black mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  M3 International Private Limited is a distinguished
                  multidisciplinary firm specializing in construction, interior
                  design, church architecture, renovation, surveying, project
                  estimation, and project management. Headquartered in India, we
                  are driven by the core values of integrity, excellence, faith,
                  and innovation.
                </p>
                <p>
                  With deep-rooted experience in both secular and sacred spaces,
                  M3 International is especially recognized for its dedicated
                  expertise in Church construction and renovation. From timeless
                  cathedrals to contemporary chapels, we bring reverence,
                  craftsmanship, and architectural sensitivity to every
                  religious structure we build or restore
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-sm">
                {/* <img
                  src="https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="w-full h-96 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision and drive our commitment
              to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              By the Numbers
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-yellow-500 mb-4">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/159235/architecture-building-construction-work-159235.jpeg?auto=compress&cs=tinysrgb&w=1600"
        className="py-32"
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-8"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Our skilled craftsmen, architects, and project managers work
            together to bring your vision to life with precision and passion.
          </motion.p>
        </div>
      </ParallaxSection>

      <Footer />
    </div>
  );
};

export default About;
