import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import coffeeImg1 from '../../assets/products/coffee/coffee_item1-300x300.jpg'
import coffeeImg2 from '../../assets/products/coffee/coffee_item2-300x300.jpg'
import coffeeImg3 from '../../assets/products/coffee/coffee_item3-300x300.jpg'
import coffeeImg4 from '../../assets/products/coffee/coffee_item4-300x300.jpg'
import coffeeImg5 from '../../assets/products/coffee/coffee_item7-300x300.jpg'
import coffeeImg6 from '../../assets/products/coffee/coffee_item8-300x300.jpg'
import coffeeImg7 from '../../assets/products/coffee/coffee_item9-300x300.jpg'
import { FaShoppingCart, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Sample Data
const products = {
  Coffee: [
    { id: 1, name: "Product 1", price: "$10.00", image: coffeeImg1 },
    { id: 2, name: "Product 2", price: "$15.00", image: coffeeImg2 },
    { id: 3, name: "Product 3", price: "$15.00", image: coffeeImg3 },
    { id: 4, name: "Product 4", price: "$15.00", image: coffeeImg4 },
    { id: 5, name: "Product 5", price: "$15.00", image: coffeeImg5 },
    { id: 6, name: "Product 6", price: "$15.00", image: coffeeImg6 },
    { id: 7, name: "Product 7", price: "$15.00", image: coffeeImg7 },
  ],
  GreenCoffee: [
    { id: 3, name: "Product 3", price: "$12.00", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$18.00", image: "https://via.placeholder.com/150" },
  ],
  RoastedCoffee: [
    { id: 5, name: "Product 5", price: "$20.00", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$25.00", image: "https://via.placeholder.com/150" },
  ],
  Italian: [
    { id: 7, name: "Product 7", price: "$30.00", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$35.00", image: "https://via.placeholder.com/150" },
  ],
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[50%] right-0 transform -translate-y-1/2 text-white cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-3xl hover:text-yellow-400" />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[50%] left-0 transform -translate-y-1/2 text-white cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-3xl hover:text-yellow-400" />
    </div>
  );
};

const ProductSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coffee");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-900 text-white py-8 px-[10%] relative h-screen">
      <div className="text-center mb-6 py-16">
        <h2 className="text-[200px] font-bold text-primary opacity-10 absolute inset-0 -z-20">Products</h2>
        <h2 className="text-2xl font-bold text-primary">Choose your coffee</h2>
        <h3 className="text-6xl font-bold mt-2">Recent Products</h3>
        <div className="mt-4">
          {Object.keys(products).map((category) => (
            <button
              key={category}
              className={`mx-2 text-lg font-semibold ${
                selectedCategory === category ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Slider {...settings}>
        {products[selectedCategory].map((product) => (
          <div key={product.id} className="px-4">
            <div className="bg-white text-black p-4">
              <img src={product.image} alt={product.name} className="max-h-[290px] w-full object-cover mb-4" />
              <div className="text-center flex justify-center items-center flex-col">
                <h4 className="text-[24px] font-semibold mb-2 text-zinc-200">{product.name}</h4>
                <p className="text-2xl text-secondary font-bold">{product.price}</p>
                <button className="flex justify-center items-center py-2 px-5 border-2 bg-secondary my-4 hover:bg-black text-white">
                  <FaShoppingCart className="mx-2" /> read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-10 cursor-pointer z-50 absolute bottom-0 left-[50%] -translate-x-[50%]">
        <button className="border-primary-lite hover:border-white text-white hover:bg-white hover:text-black border-2 text-lg py-2 px-6">
          View all products
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
