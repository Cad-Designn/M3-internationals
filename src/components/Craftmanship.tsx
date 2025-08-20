export const Craftsmanship = () => {
  return (
    <section className="py-24  ">
      {/* Parallax JCB + Background */}

      {/* Heading */}
      <div className=" flex md:flex-row flex-col mb-20 px-10 md:gap-44 gap-10 ">
        <h2 className="md:text-5xl text-4xl  font-serif  text-black md:mb-6 flex">
          Our <br /> Craftsmanship
        </h2>
        <div className="flex flex-col mb-6">
          <h1 className="md:text-5xl text-4xl font-serif  text-black">
            Where We Excel
          </h1>
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
      <div className="w-full h-[80vh] mt-[10vh] px-10 gap-8 hidden md:flex ">
        {/* JCB */}
        <div className="flex flex-col justify-center md:w-[70%] md:h-[80vh]">
          <img
            src="/jcb.jpeg"
            className="md:h-[360px] md:w-[360px] w-[150px] h-[150px] absolute -translate-x-1/2 right-1/4 z-10"
          />
        </div>

        {/* WoodCarpend Background */}
        <div className="relative md:w-[70%]  md:h-[80vh] w-full h-[300px] overflow-hidden">
          <div
            className="absolute inset-0 w-full bg-black bg-[url('/woodCarpend.jpeg')] bg-right bg-no-repeat md:bg-[length:80%] bg-[length:150%]"
            style={{
              backgroundAttachment: "fixed",
              clipPath: "inset(0 0% 0% 0)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
