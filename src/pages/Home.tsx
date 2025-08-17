import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import { Expertise } from "../components/Expertixe";
import { Craftsmanship } from "../components/Craftmanship";
import { Whyus } from "../components/Whyus";

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
      <Craftsmanship />
      {/* Why Choose Us Section */}
      <Whyus />
      <Footer />
    </div>
  );
};

export default Home;
