import { useState, useEffect } from "react";
import Loader from "./Loader";
import AboutSection from "./Home/AboutSection";
import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";
import OurStory from "./Home/OurStory";
import Products from "./Home/Products";
import DiscountPage from "./Home/DiscountPage";
import SpecialsOfTheDay from "./Home/SpecialsOfTheDay";
import Testimonials from "./Home/Testimonials";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading time with a timeout. You can replace this with real data fetching logic.
    const timer = setTimeout(() => setLoading(false), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#242424]">
      <HeroSection />
      <OurStory />
      <Products />
      <AboutSection />
      <SpecialsOfTheDay />
      <DiscountPage />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
