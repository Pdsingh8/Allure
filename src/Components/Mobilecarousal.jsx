import { useState } from "react";

const images = [
  "src/assets/shirtimg-1.jpg",
  "src/assets/cardimg-1.webp",
  "src/assets/shoeimg-1.webp",
  "src/assets/beltimg-1.webp",
  "src/assets/pantimg-1.webp",
  "src/assets/coatimg-1.jpg",
  "src/assets/sneakerimg-1.jpg",
  "src/assets/bagimg-1.jpg",
  "src/assets/bagimg-1.jpg",
];

export default function Mobilecarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="block md:hidden w-full max-w-3xl mx-auto">
      {/* Image container */}
      <div className="w-full h-104 overflow-hidden   ">
        <img
          src={images[activeSlide]}
          alt={`Slide ${activeSlide}`}
          className="w-70 h-100 object-contain transition-all ml-12 mt- duration-500"
        />
      </div>

      {/* Indicator buttons */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-8 h-0.5  ${
              activeSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
