"use client";
import { useEffect, useState, useRef } from "react";
import "./Slideshow.css";
import UpcomingModal from "./UpcomingModal.jsx";

function Slideshow() {
  const slides = [
    {
      image: "/assets/sd1.jpg",
      heading: "Step Into Style",
      description:
        "Find the perfect pair of shoes to match your suit — sleek, polished, and always on point.",
    },
    {
      image: "/assets/sd2.jpg",
      heading: "Find an everlasting look",
      description: "Need a bespoke item?",
    },
    {
      image: "/assets/image-3.jpg",
      heading: "Discover Your New Attire",
    },
    {
      image: "/assets/sd.jpg",
      heading: "Spring Collection",
      description: "Discover our new jackets and trouser sets",
    },
  ];

  
  const extendedSlides = [...slides, slides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  
  useEffect(() => {
    if (currentSlide === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentSlide(0); 
      }, 700); 

      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedSlides.length]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Slides wrapper */}
      <div
        ref={sliderRef}
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-4 ">
              <h2 className="text-white text-6xl md:font-bold">{slide.heading}</h2>
              {slide.description && (
                <p className="text-white text-lg">{slide.description}</p>
              )}
                
        <button className="bg-white text-black border w-40 h-14 border-gray-300 px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
          <span className="absolute inset-0 bg-black hover:bg:black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">Shop All</span>
        </button>
      
            </div>
          </div>
        ))}
      </div>

      {/* Indicators (ignore the cloned slide for indicators) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsTransitioning(true);
            }}
            className={`h-0.5 w-6 rounded-full transition-all cursor-pointer hidden md:block ${
              index === (currentSlide % slides.length) ? "bg-white" : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>

      <UpcomingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        slides={slides}
        currentSlide={currentSlide % slides.length}
        progress={0}
      />
    </div>
  );
}

export default Slideshow;
