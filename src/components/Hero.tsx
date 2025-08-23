export const Hero = () => {
  return (
    <div
      className="relative h-[100vh] bg-[#959ba7] flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(/building_bg.png)`,
        willChange: "background-position, transform",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Dark overlay */}
      <div className="h-[100vh] w-full absolute top-0 left-0 bg-black/20" />
      <div className="relative top-4 w-full   text-right text-white px-6">
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight fade-in-up">
          M3 INTERNATIONALS
        </h1>
      </div>
    </div>
  );
};
