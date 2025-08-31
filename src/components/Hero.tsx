"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/bg.jpeg)`,
        willChange: "background-position, transform",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Text container */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 text-center">
        {/* Logo (fade only) */}
        <motion.img
          src="/logo_black.png"
          className="absolute -top-20 right-1/2 transform translate-x-1/2 -translate-y-1/2"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Title (fade + slide-up) */}
        <motion.h1
          className="md:text-7xl text-3xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          M3 INTERNATIONAL
        </motion.h1>

        {/* Subtitle (fade + slide-up with delay) */}
        <motion.p
          className="md:text-2xl text-black/70 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          Constructing Excellence, Delivering Trust.
        </motion.p>
      </div>
    </div>
  );
};
