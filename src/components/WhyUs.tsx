export const Whyus = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className=" px-4 flex sm:px-6 lg:px-8 mb-16 gap-60">
        <span className=" flex text-5xl md:text-6xl font-serif font-bold text-black mb-6">
          Why <br /> Choose Us
        </span>
        <span className="flex text-black/50 items-center ">
          A commitment to excellence in every project.{" "}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-transparent h-[450px] w-[450px]"></div>
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/QC.jpeg')]">
          <div className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5 ">
            <span className="text-[30px]">Quality Craftsmanship</span>
            <br />
            <span>
              Quality Craftsmanship Providing transparent and fair pricing.
            </span>
          </div>
        </div>
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/SP.avif')]">
          <div className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5 ">
            <span className="text-[30px]">Skilled Professionals</span>
            <br />
            <span>
              Skilled Professionals Qualified and dedicated team members.
            </span>
          </div>
        </div>
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/CS.avif')]">
          <div className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5 ">
            <span className="text-[30px]">Customer Satisfaction</span>
            <br />
            <span>Ensuring a positive experience for every client.</span>
          </div>
        </div>
        <div className="bg-slate-200 h-[450px] w-[450px] bg-cover bg-[url('/DE.jpeg')]">
          <div className="bg-[#DB3830] w-[300px] h-[200px] text-white p-5 ">
            <span className="text-[30px]">Decades of Experience</span>
            <br />
            <span>Bringing decades of expertise to every project.</span>
          </div>
        </div>
        <div className="bg-transparent h-[450px] w-[450px]"></div>
      </div>
    </section>
  );
};
