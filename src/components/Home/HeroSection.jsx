import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bg1 from "../../assets/coffee bg 1.pngblack.png";
import bg2 from "../../assets/coffee2.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [click,setClick]=useState(false);
  const slides = [
    {
      background: `url(${bg1})`,
      headingOne: "Fresh Bean",
      headingTwo: "For Great Coffee Taste",
    },
    {
      background: `url(${bg2})`,
      headingOne: "Our Specials",
      headingTwo: "Premium Authentic Coffee",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setClick(!click)
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setClick(!click)
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [click]);
  return (
    <div className="relative w-full xl:h-[90vh] lg:[80vh] h-[75vh] 2xl:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index} 
          className={`absolute inset-0 w-full h-auto bg-cover bg-center transition-all duration-[2000ms] ease-in-out  ${
            index === activeSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-50"
          }`}
          style={{ backgroundImage: slide.background }}
        >
          {/* Black overlay filter */}
          <div id="darken" className=" absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-[2000ms] ease-in-out"></div>
          <div className="text-white absolute z-40 mx-[7%] xl:mx-[14%] py-[12%] flex items-center justify-center h-full ">
            <div className="flex flex-col md:w-1/2 ">
              <h1 className="font1 text-[80px] lg:text-[120px] my-0 py-0  leading-[.75] text-primary">{slide.headingOne}</h1>
              <h1 className="text-6xl text-[75px] font-[700] capitalize xl:w-2/3 ">{slide.headingTwo}</h1>
              <button className="border-2 border-white w-fit px-10 py-1 my-10">
                Explore Menu
              </button>
            </div>
            <div className="md:flex  w-1/2 justify-end hidden">
              <p className="text-[20px] w-2/3 text-center ">Stradale is a exclusive website template specially made for Cafe and Coffe Shops. Made using only the finest coding dan design practices. Get Stradale now!</p>
            </div>

          </div>
        </div>
      ))}
      <div
        onClick={prevSlide}
        className="absolute xl:block hidden xl:left-5 2xl:left-10 bg-gray-100  cursor-pointer p-6 top-1/2 transform -translate-y-1/2  text-white  z-50"
      >
        <FaChevronLeft className="2xl:m-4 bg-gray-100" />
      </div>
      <div
        onClick={nextSlide}
        className="absolute xl:block hidden 2xl:right-10 xl:right-5 bg-gray-100 cursor-pointer top-1/2 transform -translate-y-1/2  text-white p-2 z-10"
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default HeroSection;
