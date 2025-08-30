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
    <footer className="bg-[#020213]/20 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              className="leading-relaxed text-gray-600"
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
            <div className="space-y-4 text-gray-600">
              {[
                { icon: Phone, text: "+91 83018 44445" },
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
                  className="flex items-center space-x-3 "
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
                  className="w-10 h-10  rounded-full flex items-center justify-center  hover:bg-gray-700 transition-colors duration-300"
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
          className="mt-12 pt-8 md:justify-evenly border-t border-gray-800 flex text-center flex-col md:flex-row  justify-evenly items-center"
        >
          <p className="flex">
            &copy; 2025 M3 International. All rights reserved.
          </p>
          <p className="flex gap-2 justify-center items-center ">
            <span>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.82587 1.81074C2.43755 1.19924 3.26705 0.85572 4.13197 0.85572C4.99689 0.85572 5.82639 1.19924 6.43807 1.81074L7.39379 2.76563L8.3495 1.81074C8.65039 1.4992 9.01031 1.25071 9.40827 1.07976C9.80622 0.908809 10.2342 0.818828 10.6673 0.815065C11.1004 0.811301 11.53 0.893831 11.9308 1.05784C12.3317 1.22184 12.6959 1.46404 13.0021 1.77031C13.3084 2.07657 13.5506 2.44075 13.7146 2.84162C13.8786 3.24248 13.9611 3.672 13.9574 4.1051C13.9536 4.5382 13.8636 4.96622 13.6927 5.36417C13.5217 5.76213 13.2732 6.12205 12.9617 6.42294L7.39379 11.9917L1.82587 6.42294C1.21437 5.81126 0.87085 4.98176 0.87085 4.11684C0.87085 3.25192 1.21437 2.42242 1.82587 1.81074Z"
                fill="#FF4048"
              ></path>
            </svg>
            <span>| by</span>
            <a
              className="font-bold"
              target="_blank"
              href="https://ig.me/m/cad__designs/"
            >
              Cad Design
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
