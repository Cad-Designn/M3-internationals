import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import { Expertise } from "../components/Expertixe";

const Home: React.FC = () => {
  // right-side parallax section
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle parallax + zoom on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      [heroRef.current].forEach((section) => {
        if (section) {
          const speed = parseFloat(section.dataset.speed || "0.3");
          const zoomScale = parseFloat(section.dataset.zoom || "1.2");

          const offset = scrollY * speed;
          const scale = 1 + (scrollY / 2000) * (zoomScale - 1);

          section.style.backgroundPosition = `center ${offset}px`;
          section.style.transform = `scale(${scale})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <div
        ref={heroRef}
        data-speed="0.3"
        data-zoom="1.3"
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(/img.avif)`,
          willChange: "transform, background-position",
          transition: "transform 0.2s ease-out",
        }}
      >
        <Hero />
      </div>
      <Expertise />
      
      {/* Why Choose Us Section */}
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

      <Footer />
    </div>
  );
};

export default Home;
