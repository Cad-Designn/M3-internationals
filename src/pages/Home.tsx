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

      <Hero />

      <Expertise />
      <Craftsmanship />
      {/* Why Choose Us Section */}
      <Whyus />
      <Footer />
    </div>
  );
};

export default Home;
