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

  const images = {
    new: "/assets/newimg.jpg",
    best: "/assets/bestimg.jpg",
    sale: "/assets/saleimg.jpg",
    suits: "/assets/Suitsimg.jpg",
    women: "/assets/womenimg.jpg",
    coats: "/assets/coatsimg.jpg",
    jackets: "/assets/jackets.jpg",
    shoes: "/assets/shoedesign.jpg",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [categories.length]);

  
  const getCategory = (offset) =>
    categories[(currentIndex + offset + categories.length) % categories.length];

  
  const visibleItems = [
    { pos: -2, cat: getCategory(-2) },
    { pos: -1, cat: getCategory(-1) },
    { pos: 0, cat: getCategory(0) },
    { pos: 1, cat: getCategory(1) },
  ];

  return (
    <div className="justify-center items-center mx-auto p-4 h-240">
      <div className="flex justify-center mt-20 h-[96vh] relative">
        {/* Background Image */}
        <img
          src={images[categories[currentIndex]]}
          alt={categories[currentIndex]}
          className="w-full max-w-md h-[96vh] object-cover mt-70"
        />

        {/* Overlay texts */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mt-120">
          <div className="flex items-center gap-50 transition-transform duration-700 ease-in-out ">
            {visibleItems.map(({ pos, cat }) => {
              const isCenter = pos === 0;
              return (
                <div
                  key={cat + pos}
                  className={`transition-all duration-700 ${
                    isCenter
                      ? "text-white text-6xl pr-70 scale-105"
                      : "text-black text-4xl opacity-70"
                  }`}
                >
                  <h2
                    className="font-bold"
                    style={{
                      textShadow: isCenter
                        ? "2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)"
                        : "1px 1px 3px rgba(0,0,0,0.5)",
                    }}
                  >
                    {overlayText[cat]}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-79">
        <button className="bg-white text-black border w-60 h-14 border-gray-300 px-6 py-2 absolute  overflow-hidden group transition-colors duration-300 hover:text-white justify-center">
          <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">View Collections</span>
        </button>
      </div>
    </div>
  );
}

export default Collections;
