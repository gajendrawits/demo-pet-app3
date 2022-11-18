import Pets from "components/Pets";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import OurPartners from "components/OurPartners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Pets />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
