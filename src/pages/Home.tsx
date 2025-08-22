import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import { Expertise } from "../components/Expertixe";
import { Craftsmanship } from "../components/Craftmanship";
import { Whyus } from "../components/WhyUs";

// right-side parallax section

const Home: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <div
        className="relative h-[100vh] flex items-center justify-center bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(/bg1.jpg)`,
          willChange: "background-position, transform",
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Dark overlay */}
        <div className="h-[100vh] w-full absolute top-0 left-0 bg-black/20"></div>

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
