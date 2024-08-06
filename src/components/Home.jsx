
import AboutSection from "./Home/AboutSection"
import Footer from "./Home/Footer"
import HeroSection from "./Home/HeroSection"
import OurStory from "./Home/OurStory"
import Products from "./Home/Products"
import DiscountPage from "./Home/DiscountPage"
import SpecialsOfTheDay from "./Home/SpecialsOfTheDay"
import Testimonials from "./Home/Testimonials"
const Home = () => {
  return (
    <div className="bg-[#242424]">
        <HeroSection/>
        <OurStory/>
        <Products/>
        <AboutSection/>
        <SpecialsOfTheDay/>
        <DiscountPage/>
        <Testimonials/>
        <Footer/>

    </div>
  )
}

export default Home