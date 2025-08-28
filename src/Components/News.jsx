import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io"; // install react-icons if not already
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Ui/Button";

export default function News() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show after 5s (adjust as needed)
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showOverlay) return null;

  const images1 = [
    "/assets/blazerimg-2.jpg",
    "/assets/cardimg-1.webp",
    "/assets/p3.jpg",
    "/assets/cardimg-2.webp",
    "/assets/shoeimg-1.webp",
    "/assets/shoeimg-2.webp",
  ];
  const images2 = ["/assets/p3.jpg", "/assets/p4.jpg", "/assets/jackets.jpg"];
  const images3 = [
    "/assets/blazerimg-2.jpg",
    "/assets/p4.jpg",
    "/assets/cardimg-2.webp",
  ];

  const Carousel = ({ images, animClass }) => (
    <div className="relative h-80 md:h-150 s-30 md:w-40 overflow-hidden mt-5 md:mt-0 shadow-md">
      <div className={`flex flex-col ${animClass}`}>
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            className="h-60 w-full object-cover mb-2"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[9999] flex text-center mt-40 md:mt-0 items-center justify-center bg-black/70 p-6">
      <div className="relative flex flex-col md:flex-row max-w-5xl items-center gap-10 bg-white p-6  shadow-xl">
        <button
          onClick={() => setShowOverlay(false)}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black cursor-pointer">
          <IoMdClose />
        </button>

        {/* LEFT: 3 Carousels */}
        <div className="flex gap-4">
          <Carousel images={images1} animClass="animate-scroll-slow" />
          <Carousel images={images2} animClass="animate-scroll-medium-down" />
          <Carousel images={images3} animClass="animate-scroll-fast" />
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-md flex flex-col text-left space-y-4">
          <h1 className="text-4xl font-extralight">
            Subscribe to our newsletter
          </h1>
          <p className="text-base text-gray-600">
            Be the first to know about sales, exclusive offers and promotions.
          </p>
          <div className="relative w-80">
            <input
              type="text"
              id="email"
              placeholder=" "
              className="peer w-full h-11 border-0 border-b border-gray-400 focus:outline-none focus:border-black"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400">
              john.smith@example.com *
            </label>
          </div>
          {/* <input type="text" placeholder="john.smith@example.com *" className=" peer w-90 h-11 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-black"/> */}
          <button className="relative cursor-pointer px-6 py-2 bg-black text-white text-[16px] group overflow-hidden rounded">
            <div className="relative h-8 flex justify-center overflow-hidden">
              <p className="absolute font-'Inter' inset-0 flex justify-center items-center transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Sign up
              </p>
              <p className="absolute inset-0 flex justify-center items-center translate-y-full transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                Sign up
              </p>
            </div>

            {/* hover background overlay */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded"></div>
          </button>
          <div className="text-normal justify-center ml-42 items-center font-'Inter'">
            <Button>No Thanks</Button>
          </div>
          <div>
            <div className="flex space-x-3 mt-3 ml-29">
              <button className="text-center text-black h-[40px] flex justify-center items-center  mb- w-9 border-gray-400 border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 ">
                  <RiFacebookFill size={20} />
                </span>
              </button>
              {/* <button>
                          
               </button> */}
              <button className="text-center text-black h-[40px] flex justify-center items-center  mb- w-9 border-gray-400 border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 ">
                  <FaInstagram size={20} />
                </span>
              </button>
              <button className="text-center text-black h-[40px] flex justify-center items-center  mb- w-9 border-gray-400 border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 ">
                  <FaXTwitter size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
