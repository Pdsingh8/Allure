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
    }, 3000); // every 3s
    return () => clearInterval(interval);
  }, [categories.length]);

  // helper to wrap around indexes
  const getCategory = (offset) =>
    categories[(currentIndex + offset + categories.length) % categories.length];

  // Show 5 items (2 left + 1 center + 2 right)
  const visibleItems = [
    { pos: -2, cat: getCategory(-2) },
    { pos: -1, cat: getCategory(-1) },
    { pos: 0, cat: getCategory(0) },
    { pos: 1, cat: getCategory(1) },
    { pos: 2, cat: getCategory(2) },
  ];

  return (
    <div className="justify-center items-center mx-auto p-4 md:h-[750px]">
      <div className="flex justify-center mt-10 md:h-[96vh] relative">
        {/* Background Image */}
        <img
          src={images[categories[currentIndex]]}
          alt={categories[currentIndex]}
          className=" w-[80%] md:w-full max-w-md h-[60vh] md:h-[96vh] object-cover transition-opacity"
        />

        {/* Overlay Text Carousel */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden ">
          <div className="flex  items-center gap-60 transition-transform duration-1000 ease-in-out">
            {visibleItems.map(({ pos, cat }) => {
              const isCenter = pos === 0;
              return (
                <div
                  key={cat + pos}
                  className={`transition-all duration-1000 ${
                    isCenter
                      ? "text-white text-3xl md:text-5xl font-extralight md:scale-110"
                      : "text-black text-xl md:text-4xl font-extralight opacity-70"
                  }`}
                >
                  <h2
                    className="font-extralight"
                    style={{
                      textShadow: isCenter
                        ? ""
                        : "",
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
      <div className="flex justify-center items-center mt-7">
        <button className="bg-white text-black border w-60 h-14 border-gray-300 px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
          <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">View Collections</span>
        </button>
      </div>
    </div>
  );
}

export default Collections;
