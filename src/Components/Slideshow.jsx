import { useState, useEffect } from "react";
import "./Slideshow.css";

function Slideshow() {
  const slides = [
    {
      image: "/src/assets/image2.jpg",
      heading: "step into style",
      description: "Find the perfect pair of shoes to match your suit — sleek, polished, and always on point.",
    },
    {
      image: "/src/assets/image-4.jpg",
      heading: " Find an everlasting look",
      description: "Need a bespoke item?",
    },
    {
      image: "/src/assets/image-3.jpg",
      heading: "Discover Your New Attire",
    },
    {
      image: "/src/assets/image-2.jpg",
      heading: "Spring Collection",
      description:"discover our new jackets and trouser sets"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  });

  const handleBarClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full  mx-auto h-186 overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` w-full md:w-full  absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 "
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover ease-in-out transform transition-transform duration-[4000ms] scale-x-110"
          />
          <div className="absolute flex flex-col w- h-auto inset-0 items-start space-y-6 justify-end p-8  lg:flex ">
            <div className="= ">
               <h2 className="text-white text-6xl font-bold text-center   ">
              {slide.heading}
            </h2>
            </div>
            
            <div className="text-center flex">
              <p className="text-white text-lg float-left mb-15 ">
              {slide.description}
            </p>
            </div>
            <div className="">
              <button className="bg-white text-black h-[51px] mb- w-30 border-gray-300 px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 ">Shop All </span>
            </button>
            </div>
            
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBarClick(index)}
            className={`h-0.5 w-14  transition-all ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
