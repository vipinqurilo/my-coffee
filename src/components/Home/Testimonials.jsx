import  { useState } from 'react';
import bgImg from '../../assets/testimonials/coffee_parallax (1).jpg'
const testimonials = [
  {
    name: "Anastasia sadfsadfse",
    background: `url(${bgImg})`,
    role: "barista",
    content: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus."
  },
  
  // Add more testimonials here
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center bg-cover bg-center h-screen w-full" style={{ backgroundImage: testimonials[currentIndex].background }}>
      <div className="absolute inset-0  opacity-60"></div>

      <div className="relative z-10 text-center text-white p-8 max-w-2xl">
        <h2 className="text-lg uppercase mb-2">Our clients say</h2>
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>

        <div className=" bg-opacity-50 p-8 rounded-lg">
          <p className="text-lg italic mb-4">"{testimonials[currentIndex].content}"</p>
          <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
          <p className="text-sm uppercase">{testimonials[currentIndex].role}</p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="text-white hover:text-yellow-500"
            onClick={goToPrevious}
          >
            &lt;
          </button>
          <button
            className="text-white hover:text-yellow-500"
            onClick={goToNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
