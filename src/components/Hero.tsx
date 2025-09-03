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
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* Text container */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 text-center">
        {/* Logo (only fade, no movement) */}
        <motion.img
          src="/m3BlueLogo.png"
          className="absolute w-[150px] md:w-[200px] -top-20 right-1/2 transform translate-x-1/2 -translate-y-1/2"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />

        {/* Title */}
        <motion.h1
          className="md:text-7xl text-[#107CC6] text-2xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          M3 INTERNATIONAL
        </motion.h1>

        <motion.h1
          className="md:text-4xl text-[#107CC6] text-xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          PRIVATE LIMITED
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="md:text-2xl text-black/70 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          The Ones Who Build Tomorrow
        </motion.p>
      </div>
    </div>
  );
};
