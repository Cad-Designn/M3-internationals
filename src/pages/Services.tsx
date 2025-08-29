import React from "react";
import { motion } from "framer-motion";
import { Building, Home, Wrench, Shield } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: "CHURCH CONSTRUCTION & ARCHITECTURAL DESIGN",
      description:
        "We specialize in designing and constructing churches of all denominations — blending liturgical requirements with architectural beauty.",
      features: [
        "Custom liturgical design reflecting spiritual themes",
        "Integration of acoustic, lighting, and ventilation suited for worship",
      ],
      image: "/assets/church.jpeg",
    },
    {
      icon: Home,
      title: "CHURCH RENOVATION & RESTORATION",
      description:
        "Preserving and revitalizing the spiritual and historical integrity of churches is a sacred responsibility.",
      features: [
        "Structural strengthening and retrofitting",
        "Restoration of old masonry, roofs, steeples, and domes",
        "Conservation of artwork and stained glass",
      ],
      image: "/assets/resto.jpeg",
    },
    {
      icon: Wrench,
      title: "GENERAL CONSTRUCTION",
      description:
        "Residential, commercial, and institutional projects — executed with engineering precision, safety, and project transparency.",
      features: ["End-to-end structural & civil works"],
      image: "/assets/construction.jpeg",
    },
    // {
    //   icon: Zap,
    //   title: "INTERIOR DESIGN & FIT-OUT",
    //   description:
    //     "From conceptual design to turnkey interiors, we deliver customized and cohesive spaces.",
    //   features: ["Functional + aesthetic clarity", "Custom fit-outs"],
    //   image:
    //     "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800",
    // },
    // {
    //   icon: Palette,
    //   title: "SURVEYING & ESTIMATION",
    //   description: "Land and topographic surveys using modern tools.",
    //   features: [
    //     "Accurate project cost estimation",
    //     "Quantity surveying and BOQ preparation",
    //   ],
    //   image:
    //     "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800",
    // },
    {
      icon: Shield,
      title: "PROJECT MANAGEMENT CONSULTANCY",
      description:
        "End-to-end project management ensuring quality, timeline, and budget adherence.",
      features: [
        "Timeline Management",
        "Quality Control",
        "Budget Oversight",
        "Safety Compliance",
      ],
      image: "/proj.jpg",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial meeting to discuss your vision and requirements",
    },
    {
      number: "02",
      title: "Design",
      description: "Creating detailed plans and 3D visualizations",
    },
    {
      number: "03",
      title: "Construction",
      description: "Professional execution with regular progress updates",
    },
    {
      number: "04",
      title: "Completion",
      description: "Final inspection and project handover",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/CS.avif"
        className="h-[100vh] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Comprehensive construction solutions delivered with precision and
            excellence
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-40 transition duration-500" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <service.icon className="text-white" size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-serif text-gray-900 mb-3 group-hover:text-sky-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 border-t pt-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-sky-500 mr-2">•</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>

          {/* Steps */}
          <div className="relative ml-8 space-y-14">
            {/* Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "90%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute -left-2 top-0 w-[3px] bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full"
            />
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative pl-12"
              >
                {/* Number bubble */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                    delay: i * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="absolute -left-8 w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 
                       text-white flex items-center justify-center font-bold shadow-lg"
                >
                  {step.number}
                </motion.div>

                {/* Title + desc */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
