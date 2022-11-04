import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Pets from "components/Pets";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <Navbar />
      <HeroSection />
      <Pets />
    </div>
  );
}

export default App;
