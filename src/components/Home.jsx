
import HeroSection from "./Home/HeroSection"
import OurStory from "./Home/OurStory"
import Products from "./Home/Products"
import SpecialsOfTheDay from "./Home/SpecialsOfTheDay"
const Home = () => {
  return (
    <div className="bg-[#242424]">
        <HeroSection/>
        <OurStory/>
        <SpecialsOfTheDay/>
        <Products/>

    </div>
  )
}

export default Home