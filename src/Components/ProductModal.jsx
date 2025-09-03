import React, { useState } from "react";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

export default function ProductModal() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed bottom-4 md:right-4 z-[9999]">
      <div className="relative flex items-center h-30 w-[380px] bg-white border border-gray-200 shadow-lg  p-4">
        {/* Close button (top right) */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-black hover:text-red-500 text-lg"
        >
          <IoMdClose />
        </button>

        {/* Product image */}
        <img
          src="/assets/b4.jpg"
          alt="Classic Beige Suit"
          className="w-20 h-25 object-cover"
        />

        {/* Product details */}
        <div className="ml-3 flex-1">
          <h3 className="font-light ">
            Classic Double-Breasted Soft Beige Suit
          </h3>
          <span className="text-sm text-gray-800 block mt-2">
            Regular price From $1,067.00
          </span>
        </div>

        {/* Cart button (bottom right) */}
        <button className="absolute bottom-2 right-1 px-3 py-2 text-black rounded-lg ">
          <RiShoppingBag4Fill size={25}/>
        </button>
      </div>
    </div>,
    document.body
  );
}
