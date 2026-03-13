import { Suspense, lazy } from "react";

import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import DecodingTraditions from "./components/DecodingTraditions";
const HomeCarousel = lazy(() => import("./components/HomeCarousal"));
import Weddings from "./components/Weddings";
import LargeVideo from "./components/LargeVideo";
import Testimonials from "./components/Testimonials";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <DecodingTraditions />
      <Suspense fallback={<div>Loading carousel...</div>}>
        <HomeCarousel />
      </Suspense>
      <Weddings />
      <LargeVideo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
