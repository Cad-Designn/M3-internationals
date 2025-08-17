export const Expertise = () => {
  const services = [
    {
      title: "Custom Builds",
      description:
        "Bespoke construction tailored to your unique vision and requirements.",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "New Builds",
      description:
        "Modern homes and commercial spaces built with precision and style.",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Restorations",
      description: "Breathe new life into historic and classic structures.",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Quality Materials",
      description: "Using the finest resources for lasting results.",
      image: "",
    },
    {
      title: "Meticulous Attention",
      description: "Ensuring perfection in every aspect.",
      image: "",
    },
  ];

  return (
    <section className="py-24  ">
      {/* Heading */}
      <div className=" mb-20 px-10">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">
          Our Expertise
        </h2>
        <div className="w-24 h-[2px] bg-black mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl ">
          From concept to completion, we deliver exceptional construction
          solutions that exceed expectations and stand the test of time.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mx-10 gap-6">
        {/* First 3 cards in row */}
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-[#474D60] text-white p-8 flex flex-col items-start"
          >
            {/* Red Hexagon */}
            <div
              className="w-10 h-6 rotate-45 bg-[#DB3830] mb-4
              [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
            ></div>

            {/* Title */}
            <h3 className="text-xl font-medium mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-white/80">{service.description}</p>
          </div>
        ))}

        {/* Bottom row with 2 centered cards */}
        <div className="md:col-span-3 grid  md:grid-cols-2 gap-6">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="bg-[#474D60] text-white p-8 flex flex-col items-start"
            >
              {/* Red Hexagon */}
              <div
                className="w-10 h-6 rotate-45 bg-[#DB3830] mb-4
                [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
              ></div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[80vh] mt-[10vh] px-10 flex gap-8">
        {/* Left Content */}
        <div className="bg-red-500 px-10 flex flex-col justify-center w-[70%]">
          <p className="text-white text-lg">Building Excellence</p>
          <h1 className="text-white font-extrabold w-[70%] text-[58px] leading-tight">
            Serving Clients in the Region
          </h1>
          <button className="mt-6 w-fit bg-white text-black/70 font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Contact
          </button>
        </div>

        {/* Parallax "window" */}
        <div className="relative w-[30%] h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('overlay.jpeg')] bg-contain bg-center"
            style={{
              backgroundAttachment: "fixed",
            }}
          >
            {/* Overlay */}
            <div className="w-full h-full bg-black/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
