import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/builder_m3/",
      label: "Instagram",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-serif font-bold mb-6"
            >
              M3 Internationals
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              To be a trusted partner in building spaces that uplift lives —
              from sacred sanctuaries to functional structures — guided by
              quality, purpose, and respect.
            </motion.p>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold mb-6"
            >
              Contact Information
            </motion.h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91-9656414669" },
                { icon: Mail, text: "m3international41@gmail.com" },
                {
                  icon: MapPin,
                  text: "M3 International Private Limited Vadacodu kura p.o",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <item.icon size={18} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-semibold mb-6"
            >
              Follow Us
            </motion.h4>
            <div className="flex space-x-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2025 M3 International. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
