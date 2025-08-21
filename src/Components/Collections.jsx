import { useState, useEffect } from "react";

function Collections() {
  const categories = [
    "new",
    "best",
    "sale",
    "suits",
    "women",
    "coats",
    "jackets",
    "shoes",
  ];
  const overlayText = {
    new: "NEW",
    best: "BEST",
    sale: "SALE",
    suits: "SUITS",
    women: "WOMEN",
    coats: "COATS",
    jackets: "JACKETS",
    shoes: "SHOES",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = {
    new: "/assets/newimg.jpg",
    best: "/assets/bestimg.jpg",
    sale: "/assets/saleimg.jpg",
    suits: "/assets/suitsimg.jpg",
    women: "/assets/womenimg.jpg",
    coats: "/assets/coatsimg.jpg",
    jackets: "/assets/jackets.jpg",
    shoes: "/assets/shoedesign.jpg",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  },); 
  return (
    <div className="justify-center items-center mx-auto p-4 h-240">
      <div className="flex justify-center mt-90 h-186 relative">
        <img
          src={images[categories[currentIndex]]}
          alt={categories[currentIndex]}
          className="w-full max-w-md h-[96vh] object-cover  mt-5"
        />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-3000 w-full ease-linear"
            style={{
              transform: `translateX(calc(50% - ${currentIndex * 288 + 144}px))`, // 288px = w-72, 144px = half width
            }}
          >
            {/* Create multiple sets for continuous scroll */}
            {[...categories, ...categories, ...categories].map((category, index) => {
              const originalIndex = index % categories.length;
              const isActive = originalIndex === currentIndex;
              
              return (
                <div
                  key={`${category}-${index}`}
                  className={`flex-shrink-0 w-72 text-center mx-4 transition-all duration-500 ${
                    isActive
                      ? "text-white text-6xl transform scale-90"
                      : "text-black text-4xl"
                  }`}
                >
                  <h2 
                    className="font-bold transition-all duration-500"
                    style={{
                      textShadow: isActive 
                        ? '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' 
                        : '1px 1px 3px rgba(255,255,255,0.8)'
                    }}
                  >
                    {overlayText[category]}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-white text-black border w-60 h-14 border-gray-300 px-6 py-2 absolute mb-32 overflow-hidden group transition-colors duration-300 hover:text-white justify-center">
          <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">View Collections</span>
        </button>
      </div>
    </div>
  );
}

export default Collections;