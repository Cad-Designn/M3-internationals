export const Hero = () => {
  return (
    <div
      className="relative h-screen  flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/assets/church2.jpeg)`,
        willChange: "background-position, transform",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50  backdrop-blur-sm" />

      {/* Text container */}
      <div className="relative w-full  px-4 sm:px-6 md:px-12 text-center">
        <h1 className="md:text-7xl text-3xl font-extrabold text-transparent bg-clip-text bg-[url(/assets/church2.jpeg)]  md:bg-cover bg-center">
          M3 <br />
          INTERNATIONALS
        </h1>
      </div>
    </div>
  );
};
