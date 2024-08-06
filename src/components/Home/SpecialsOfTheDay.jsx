import { useEffect, useState } from "react";
import bgImg1 from "../../assets/special-of-the-day/7.jpg"; // Replace with actual image path later
import bgImg2 from "../../assets/special-of-the-day/8.jpg"; // Add another image
import cup from "../../assets/special-of-the-day/1-1.png";

const SpecialCard = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [animateScroll, setAnimateScroll] = useState(0);
  const [bgImg, setBgImg] = useState(bgImg1); // Start with the first image
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setAnimateScroll((prev) => {
        const newPos = prev + (scrollPos - prev) * 0.05;
        return newPos;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollPos]);

  useEffect(() => {
    const images = [bgImg1, bgImg2]; // Array of background images
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setBgImg(images[(imageIndex + 1) % images.length]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imageIndex]);

  const translateStyle = {
    transform: `translate(${animateScroll * 0}px, ${animateScroll * 0.1}px)`,
  };

  return (
    <div
      className="relative w-full h-[85vh] flex items-center justify-center bg-cover bg-center 2xl:px-[14%]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-screen-lg mx-auto relative z-10 px-6 md:px-12 w-1/2 h-full flex justify-center items-center text-center">
        <div className="text-white ">
          <h2 className="z-50 font1 leading-[.3] text-primary mb-4 text-[120px] mt-10">
            Specials
          </h2>
          <h2 className="text-[40px] font-[700] capitalize tracking-widest">
            OF THE DAY
          </h2>
          <h3 className="text-xl md:text-2xl mb-4">Classic Cappuccino</h3>
          <p className="text-sm md:text-base mb-8">
            Composed of a single espresso shot and hot milk, with the surface
            topped with foamed milk. Prepared with an espresso machine.
          </p>
          <button className="bg-transparent border border-[#e9bd87] px-4 py-1 hover:bg-primary hover:text-black transition">
            View All Menu
          </button>
        </div>
      </div>
      <div className="w-1/2 relative h-full -translate-y-[30%]">
        <div className="absolute " style={translateStyle}>
          <img
            src={cup}
            alt="Coffee Cup"
            className="rounded-full w-[570px] h-[570px] object-cover shadow-lg top-0  "
          />
          <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded-full font-bold text-center w-32 h-32 flex flex-col justify-center items-center">
            <div className="text-3xl">600</div>
            <div>Sold Today</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
