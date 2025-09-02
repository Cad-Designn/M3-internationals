import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 83018 44445"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["m3international41@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "2Q4R+JFG, Padinjaretheruve, Kottarakkara, Kerala 691531, India",
      ],
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Ready to start your next project? Let's discuss your vision.
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-8">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-black mb-8"></div>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We're here to help bring your construction dreams to reality.
                Reach out to us through any of the following channels, and we'll
                respond promptly to discuss your project needs.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-sm"
              >
                <h3 className="text-2xl font-serif font-bold text-black mb-6">
                  Send us a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Type
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Custom Build, Renovation, etc."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 px-6 rounded-sm font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </form> */}
              <section className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-4xl font-serif font-bold text-black mb-6">
                      Visit Our Office
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                      Stop by our showroom to see our work up close and discuss
                      your project in person.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-sm overflow-hidden shadow-lg"
                  >
                    <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                      <div className="w-full h-full">
                        <iframe
                          src="https://www.google.com/maps?q=2Q4R%2BJFG%2C%20Padinjaretheruve%2C%20Kottarakkara%2C%20Kerala%20691531%2C%20India&output=embed"
                          className="w-full h-full rounded-lg shadow-md border-2 border-gray-300"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}

      <Footer />
    </div>
  );
};

export default Contact;
