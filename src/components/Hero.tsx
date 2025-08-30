export const Hero = () => {
  return (
    <div
      className="relative h-screen  flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/bg.jpeg)`,
        willChange: "background-position, transform",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50  backdrop-blur-sm" />

      {/* Text container */}
      <div className="relative w-full  px-4 sm:px-6 md:px-12 text-center">
        <img
          src="/logo_black.png"
          className="absolute -top-20 right-1/2 transform translate-x-1/2 -translate-y-1/2"
          alt=""
        />
        <h1 className="md:text-7xl text-3xl font-extrabold ">
          M3 INTERNATIONALS
        </h1>
        <p className="md:text-2xl text-black/70 text-2xl">
          Constructing Excellence, Delivering Trust.
        </p>
      </div>
    </div>
  );
};
