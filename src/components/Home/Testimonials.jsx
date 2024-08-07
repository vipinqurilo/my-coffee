import { useState } from "react";
import bgImg from "../../assets/testimonials/coffee_parallax (1).jpg";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Anastasia 1",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 2",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 3",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 4",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 5",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 6",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    name: "Anastasia 7",
    background: `url(${bgImg})`,
    role: "barista",
    content:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },

  // Add more testimonials here
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to manage the animation status

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="w-full h-[90vh] p-20 ">
      <h2 className="text-lg uppercase mb-2 text-center text-secondary text-[24px] font-[700]">
        Our clients say
      </h2>
      <h1 className="text-4xl text-center mb-4 font-[700] text-[60px] text-white">
        Testimonials
      </h1>
      <div className="relative flex justify-center items-center bg-cover bg-center h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex justify-center items-center bg-cover bg-center"
              style={{ backgroundImage: testimonial.background }}
            >
              <div className="z-10 text-center text-white p-10 w-[70%] h-[80%]  border-[10px] border-secondary bg-opacity-50  relative">
               <div className="text-center flex flex-col justify-between h-full w-full p-10 ">
               <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm uppercase">{testimonial.role}</p>
                </div>
                <div>
                  <p className="text-[24px] font-[600] italic mb-4">
                    {testimonial.content}
                  </p>
                </div>
                <div className="w-full justify-center flex">
                <FaQuoteRight className="text-[60px]" />
                </div>
               </div>
                <button
                  className="text-black hover:text-yellow-500 absolute -left-32 top-[50%] -translate-y-[50%] bg-secondary p-3"
                  onClick={goToPrevious}
                >
                  <FaAngleLeft className="text-2xl" />
                </button>
                <button
                  className="text-black hover:text-yellow-500 absolute -right-32 top-[50%] -translate-y-[50%] bg-secondary p-3"
                  onClick={goToNext}
                >
                  <FaAngleRight className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
