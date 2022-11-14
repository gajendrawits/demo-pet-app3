import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import OurPartners from "components/OurPartners";
import Pets from "components/Pets";

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
