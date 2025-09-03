"use client";

export const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/bg.jpeg)`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* Text container */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 text-center">
        {/* Logo (static) */}
        <img
          src="/m3BlueLogo.png"
          className="absolute w-[150px] md:w-[200px] -top-20 right-1/2 transform translate-x-1/2 -translate-y-1/2"
          alt=""
        />

        {/* Titles */}
        <h1 className="md:text-7xl text-[#107CC6] text-2xl font-extrabold">
          M3 INTERNATIONAL
        </h1>
        <h1 className="md:text-4xl text-[#107CC6] text-xl font-extrabold">
          PRIVATE LIMITED
        </h1>

        {/* Subtitle */}
        <p className="md:text-2xl text-black/70 text-xl">
          The Ones Who Build Tomorrow
        </p>
      </div>
    </div>
  );
};
