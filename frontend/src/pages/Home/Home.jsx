import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import DecodingTraditions from "./components/DecodingTraditions";
import HomeCarousel from "./components/HomeCarousal";
import Weddings from "./components/Weddings";
import LargeVideo from "./components/LargeVideo";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <DecodingTraditions />
      <HomeCarousel />
      <Weddings />
      <LargeVideo />
      <Footer />
    </div>
  );
}

export default Home;
