
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Ui/Button"; // matches your project import

const products = [
  { id: 1, title: "Elegant Check Blazer", store: "Pollheim", price: "From $1,062.00", image: "/assets/shirtimg-1.jpg" },
  { id: 2, title: "Casual blazer & draw pant", store: "My Store", price: "From $450.99", image: "/assets/cardimg-1.webp" },
  { id: 3, title: "Leather classic men's shoes", store: "My Store", price: "$149.99", image: "/assets/shoeimg-1.webp" },
  { id: 4, title: "Women's belt-lace in black", store: "My Store", price: "$199.99", image: "/assets/beltimg-1.webp" },
  { id: 5, title: "Casual draw pant & casual blazer", store: "My Store", price: "$79.99", image: "/assets/pantimg-1.webp" },
  { id: 6, title: "Wool Winter Coat", store: "My Store", price: "$249.00", image: "/assets/coatimg-1.jpg" },
  { id: 7, title: "Formal Tie Set", store: "My Store", price: "$59.00", image: "/assets/coatimg-1.jpg" },
  { id: 8, title: "Summer Casual Shoes", store: "My Store", price: "$89.00", image: "/assets/sneakerimg-1.jpg" },
  { id: 9, title: "Luxury Leather Bag", store: "My Store", price: "$299.00", image: "/assets/bagimg-1.jpg" },
];

export default function SafariDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const nextSlide = () => setCurrentIndex((i) => Math.min(products.length - 1, i + 1));

  const product = products[currentIndex];

  return (
    <div className="p-8 text-gray-700 leading-relaxed">
      <h2 className="text-3xl font-bold mb-6">Coloured Safari Back Suit</h2>

      <p className="mb-4">
        Introduce a touch of timeless sophistication to your wardrobe with our impeccably crafted dark beige suit. Designed for the discerning gentleman, this suit showcases a classic notch lapel and a sleek two-button front closure...
      </p>

      <p className="flex flex-col space-y-2 mb-4">
        <strong>The jacket features:</strong>
        <span>1. A notch lapel</span>
        <span>2. Two buttons at the front.</span>
        <span>3. Two flap pockets at the waist.</span>
        <span>4. A chest pocket on the left side.</span>
        <span>5. Structured shoulders and a tailored fit.</span>
        <span>6. Dark beige colour</span>
        <span>7. Pleated Trouser</span>
        <span>8. Belted back waistline</span>
      </p>

      <div className="mt-6 mb-6">
        <p className="font-semibold">Garment:</p>
        <div className="flex gap-3 mt-2">
          <button className="border border-black px-4 py-2 text-black">Suit</button>
          <button className="border border-gray-400 px-4 py-2 hover:border-black">Suit + Extra Pair of Trousers</button>
        </div>
      </div>

      <div className="mt-4 mb-6">
        <p className="font-semibold">Color: <span className="text-black">Dark Beige</span></p>
        <div className="flex gap-2 mt-2">
          <img src="/assets/color1.jpg" alt="" className="w-12 h-12 border" />
          <img src="/assets/color2.jpg" alt="" className="w-12 h-12 border" />
          <img src="/assets/color3.jpg" alt="" className="w-12 h-12 border" />
        </div>
      </div>

      <div className="mt-4 mb-8">
        <p className="text-black text-lg">$1,426.00 <span className="line-through text-gray-400 ml-2">$1,551.00</span></p>
        <p className="text-sm">Tax included</p>
      </div>

      {/* --- You May Also Like --- */}
      <div className="w-full h-fit mt-10 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl text-black">You May Also Like</h3>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 border-2 rounded ${currentIndex === 0 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-400 hover:border-gray-600 hover:text-gray-800"}`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === products.length - 1}
              className={`p-2 border-2 rounded ${currentIndex === products.length - 1 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-400 hover:border-gray-600 hover:text-gray-800"}`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex gap-4 bg-white shadow-md rounded-lg w-full max-w-md p-4">
            <img src={product.image} alt={product.title} className="w-28 h-34 object-cover rounded" />

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h4 className="text-lg text-gray-900">{product.title}</h4>
                <p className="text-sm text-gray-500">{product.store}</p>
                <p className="text-base font-medium">{product.price}</p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <Button>+ Quick view</Button>
                <div className="text-sm text-gray-400">{currentIndex + 1}/{products.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
