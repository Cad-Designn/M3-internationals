import React from "react";
import { motion } from "framer-motion";
import { Building, Home, Wrench, Zap, Palette, Shield } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: "CHURCH CONSTRUCTION & ARCHITECTURAL DESIGN",
      description:
        "We specialize in designing and constructing churches of all denominations — blending liturgical requirements with architectural beauty. Our approach involves",
      features: [
        "Consultation with religious leaders and church committees Custom liturgical design reflecting spiritual themes Use of traditional and modern materials",
        "Integration of acoustic, lighting, and ventilation suited for worship Crafting of altars, sanctuaries, stained glass work, and symbolic elements",
      ],
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Home,
      title: "CHURCH RENOVATION & RESTORATION",
      description:
        "Preserving and revitalizing the spiritual and historical integrity of churches is a sacred responsibility. We offer",
      features: [
        "CStructural strengthening and retrofitting",
        "Restoration of old masonry, roofs, steeples, and domes",
        "Conservation of religious artwork, carvings, and stained glass",
        "Interior modernization while retaining classical aesthetics",
        "Addition of new facilities such as parish halls, rectories, and more",
      ],
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Wrench,
      title: "GENERAL CONSTRUCTION",
      description:
        "Residential, commercial, and institutional projects — executed with engineering precision, safety, and project transparency.",
      features: [""],
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Zap,
      title: "INTERIOR DESIGN & FIT-OUT",
      description:
        "From conceptual design to turnkey interiors, we deliver customized and cohesive spaces. Our design philosophy combines functionality with aesthetic clarity.",
      features: [""],
      image:
        "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Palette,
      title: "SURVEYING & ESTIMATION",
      description: "Land and topographic surveys using modern tools",
      features: [
        "Accurate project cost estimation and feasibility analysis",
        "Quantity surveying and BOQ preparation",
      ],
      image:
        "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
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
      image:
        "https://images.pexels.com/photos/159235/architecture-building-construction-work-159235.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1600"
        className="min-h-96 flex items-center justify-center"
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Comprehensive construction solutions delivered with precision and
            excellence
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-black mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach that ensures quality, efficiency, and
              client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "Initial meeting to discuss your vision and requirements",
              },
              {
                number: "02",
                title: "Design",
                description: "Creating detailed plans and 3D visualizations",
              },
              {
                number: "03",
                title: "Construction",
                description:
                  "Professional execution with regular progress updates",
              },
              {
                number: "04",
                title: "Completion",
                description: "Final inspection and project handover",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-serif font-bold text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
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
