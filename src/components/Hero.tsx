export const Hero = () => {
  return (
    <div
      className="relative h-[100vh] flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/bg1.jpg)`,
        willChange: "background-position, transform",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Dark overlay */}
      <div className="h-[100vh] w-full absolute top-0 left-0 bg-black/20" />
      <div className="absolute inset-0" />

      <div className="relative top-44 transform -translate-y-1/2 text-center text-white px-6">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight fade-in-up">
          Building Excellence
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed fade-in-up-delay">
          Crafting extraordinary spaces with uncompromising quality.
        </p>
      </div>
    </div>
  );
};
