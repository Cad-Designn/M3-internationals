export const Hero = () => {
  return (
    <div
      className="relative h-screen bg-[#959ba7] flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/building_bg.png)`,
        willChange: "background-position, transform",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Text container */}
      <div className="relative w-full text-white px-4 sm:px-6 md:px-12 text-center md:text-right">
        <h1 className="bg-transparent rounded-lg backdrop-blur-md md:backdrop-blur-0 text-3xl sm:text-4xl md:text-7xl md:text-right font-serif font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight md:leading-tight fade-in-up">
          M3
          <br className="sm:hidden" />
          <span className="block  md:rotate-0 transform">INTERNATIONALS</span>
        </h1>
      </div>
    </div>
  );
};
