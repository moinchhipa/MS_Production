import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import DecodingTraditions from "./components/DecodingTraditions";
// import HomeCarousel from "./components/HomeCrousel";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <DecodingTraditions />
      {/* <HomeCarousel /> */}
      <Footer />
    </div>
  );
}

export default Home;
