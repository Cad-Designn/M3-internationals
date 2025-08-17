export const WhyUs = () => {
  return (
    <section className="py-24  ">
      {/* Heading */}
      <div className=" flex mb-20 px-10 gap-44 ">
        <h2 className="text-5xl  font-serif  text-black mb-6 flex">
          Our <br /> Craftsmanship
        </h2>
        <div className="flex flex-col mb-6">
          <h1 className="text-5xl font-serif  text-black">Where We Excel</h1>
          <br />
          <p>Excelling in crafting exceptional spaces.</p>
        </div>
      </div>

      {/* First 3 cards in row */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-6">
        <div className="bg-[#474D60] h-[300px] flex flex-col justify-center items-start p-6">
          <span className="text-white font-semibold text-[30px]">
            New <br />
            Construction
          </span>
          <span className="text-white/80">
            Creating new homes with care and expertise.
          </span>
        </div>
        <div className="bg-[#474D60] h-[300px] flex flex-col justify-center items-start p-6">
          <span className="text-white font-semibold text-[30px]">
            Quality <br />
            Renovation
          </span>
          <span className="text-white/80">
            Revitalizing spaces with dedication.
          </span>
        </div>
        <div className="bg-[#474D60] h-[300px] flex flex-col justify-center items-start p-6">
          <span className="text-white font-semibold text-[30px]">
            Attention <br />
            To Detail
          </span>
          <span className="text-white/80">
            Focusing on precision in every project.
          </span>
        </div>
      </div>
      <div className="w-full h-[80vh] flex mt-[10vh] px-10 gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-[70%] h-[80vh] ">
          <img
            src="/jcb.jpeg"
            className="h-[360px] w-[360px] absolute -translate-x-1/2 right-1/4 z-10"
          />
        </div>
        <div className="relative w-[70%] h-[80vh] overflow-hidden">
          {/* Fixed background image */}
          <div
            className="absolute inset-0 w-full bg-black bg-[url('/woodCarpend.jpeg')] bg-right bg-no-repeat "
            style={{
              backgroundAttachment: "fixed", // parallax effect
              clipPath: "inset(0 0% 0% 0)",
              backgroundSize: "50%", // adjust bottom to reveal
            }}
          >
            {/* Overlay */}
            <div className="w-full h-full "></div>
          </div>
        </div>
      </div>
    </section>
  );
};
