import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Pets from "components/Pets";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Pets />
      <Footer />
    </div>
  );
};

export default Home;
