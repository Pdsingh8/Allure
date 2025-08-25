import { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Ui/Button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Mobilecarousel from "./Mobilecarousal";

function SafariGl() {
  const scrollerRef = useRef(null);
  const lastTouchY = useRef(0);

//  you-may-also-like 

const [currentIndex, setCurrentIndex] = useState(0);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  const products = [
    {
      id: 1,
      title: "Elegant Check Blazer",
      store: "Pollheim",
      price: "From $1,062.00",
      image: "/assets/shirtimg-1.jpg",
    },
    {
      id: 2,
      title: "Casual blazer & draw pant",
      store: "My Store",
      price: "From $450.99",
      image: "/assets/cardimg-1.webp",
    },
    {
      id: 3,
      title: "Leather classic men's shoes",
      store: "My Store",
      price: "$149.99",
      image: "/assets/shoeimg-1.webp",
    },
    {
      id: 4,
      title: "Women's belt-lace in black",
      store: "My Store",
      price: "$199.99",
      image: "/assets/beltimg-1.webp",
    },
    {
      id: 5,
      title: "Casual draw pant & casual blazer",
      store: "My Store",
      price: "$79.99",
      image: "/assets/pantimg-1.webp",
    },
    {
      id: 6,
      title: "Wool Winter Coat",
      store: "My Store",
      price: "$249.00",
      image: "/assets/coatimg-1.jpg",
    },
    {
      id: 7,
      title: "Formal Tie Set",
      store: "My Store",
      price: "$59.00",
      image: "/assets/coatimg-1.jpg",
    },
    {
      id: 8,
      title: "Summer Casual Shoes",
      store: "My Store",
      price: "$89.00",
      image: "/assets/sneakerimg-1.jpg",
    },
    {
      id: 9,
      title: "Luxury Leather Bag",
      store: "My Store",
      price: "$299.00",
      image: "/assets/bagimg-1.jpg",
    },
  ];

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = () => {
    if (windowWidth < 640) return 1; 
    if (windowWidth < 1024) return 2; 
    return 3; 
  };

  const getMaxIndex = () => products.length - getVisibleCount();

  const nextSlide = () => {
    if (currentIndex < getMaxIndex()) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };







//  you-may-also-like 




  const handleWheel = useCallback((e) => {
    const el = scrollerRef.current;
    if (!el) return;

    // prevent page/body from scrolling, and scroll the images column instead
    e.preventDefault();
    el.scrollTop += e.deltaY *2;
  }, []);

  const handleTouchStart = useCallback((e) => {
    lastTouchY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    const el = scrollerRef.current;
    if (!el) return;

    const y = e.touches[0].clientY;
    const deltaY = lastTouchY.current - y; // +down, -up
    lastTouchY.current = y;

    e.preventDefault();
    el.scrollTop += deltaY * 2;
  }, []);

  return (
    // main-div
    <div className=" flex flex-col md:flex-row justify-around  mt-5 w-full h-[160vh] md:h-[162vh] overflow-hidden"  onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove} >
      {/* first-div */}
      <div className="hidden sm:block justify-evenly ml-7 items-center ">
        <img src="/assets/safarimain.jpg" alt="" className="w-160 h-250 object-cover " />
      </div>
      {/* second-div */}
      {/* scroller-div */}
      <div className="hidden sm:block overflow-y-auto scrollbar-none mr-3 gap-3 md:flex flex-col ml-3 items-center inset-0 w-120" ref={scrollerRef}>
        <img src="/assets/s1.jpg" alt="" className="h-140 w-120 mb-2 " />
        <img src="/assets/s2.jpg" alt="" className="h-140 w-120 mb-2 " />
        <img src="/assets/s3.jpg" alt="" className="h-140 w-120 mb-2" />
        <img src="/assets/s4.jpg" alt="" className="h-140 w-120 mb-2" />
        <img src="/assets/s5.jpg" alt="" className="h-140 w-120 mb-2" />
        <img src="/assets/s6.jpg" alt="" className="h-140 w-120 mb-2 " />
        
        <img src="/assets/s7.jpg" alt="" className="h-140 w-120 mb-2 " />
        <img src="/assets/s8.jpg" alt="" className="h-140 w-120 mb-2" />
      </div>
       <Mobilecarousel/>
      {/* description */}
      <div className=" w-170 text-gray-500 h-screen">
        <div className="flex flex-col justify-center ">
          <p className="text-black text-xl">couturist tailors</p>
        </div>
        
        <h1>Coloured Safari Back Suit</h1>
        <p>
          Introduce a touch of timeless sophistication to your wardrobe with our
          impeccably crafted dark beige suit. Designed for the discerning
          gentleman, this suit showcases a classic notch lapel and a sleek
          two-button front closure. Thoughtfully designed flap pockets at the
          waist and a chest pocket on the left side add both functionality and
          elegance. The jacket, featuring structured shoulders and a tailored
          fit, enhances your physique, providing a contemporary and polished
          appearance. The rich camel colour exudes versatility and style, making
          it suitable for various occasions. The pleated trousers add a touch of
          classic elegance and comfort. Made with fine craftsmanship, every
          stitch is carefully executed to ensure durability and a luxurious
          feel. Whether for professional settings, weddings, or special events,
          this suit represents high-end fashion and impeccable design. Add this
          distinguished suit to your collection and make a lasting impression.
        </p>
        <p className="flex flex-col space-y-2">
          The jacket features:
          <span>1. A notch lapel</span>
          <span> 2. Two buttons at the front.</span>
          <span> 3.Two flap pockets on either side at the waist.</span>
          <span>4. A chest pocket on the left side.</span>
          <span>5. Structured shoulders and a sleek,tailored fit.</span>
          <span>6. Dark beige colour</span>
          <span>7. Pleated Trouser</span>
          <span>8. Belted back waistline</span>
        </p>
        <div className="w-full">
          <p>Garment:</p>
          <button className="border-1 text-[22px] text-center text-black border-black w-18 h-15">
            suit
          </button>
          <button className="w-60 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            suit + extra pair of trousers
          </button>
          <p>
            Color: <span className="text-black mb-4">Dark Beige</span>
          </p>
          <button className="mr-2 underline">
            <img
              src="/assets/color1.jpg"
              alt=""
              className="w-12 h-12 underline"
            />
          </button>
          <button className="mr-2">
            <img src="/assets/color2.jpg" alt="" className="w-12 h-12" />
          </button>
          <button className="mr-2">
            <img src="/assets/color3.jpg" alt="" className="w-12 h-12" />
          </button>
        </div>
        {/* size-section */}
        <div>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            44
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            46
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            48
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            50
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            52
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            54
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            56
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            58
          </button>
          <button className="w-20 border-1 text-[18px] border-gray-400 hover:border-black hover:border-1 h-15 text-bold hover:text-black ml-2">
            60
          </button>
        </div>
        <div>
          <p className="text-black">$1,426.00 Regular price $1,551.00</p>
          <p>tax included</p>
          <p>quantity</p>
          {/* counter-button */}
          {/* <button>
            {" "}
            <button>+</button> {} <button>-</button>{" "}
          </button> */}
          <div>
            {/* <div className="">
              <button className="bg-black text-black h-[51px] mb- w-30 border-gray-300 px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:opacity-5 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 ">Add to Cart </span>
            </button>
          </div> */}
          {/* <div className="">
              <button className="bg-white text-black h-[51px] mb- w-30 border-gray-300 px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 ">Buy it Now</span>
            </button>
          </div> */}
        </div>
        {/* you may also like  */}
        <div className="w-full h-fit mt-10 mb-10">
      {/* Heading and Button*/}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl text-black">You May Also Like</h1>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 border-2 mr-4 rounded ${
              currentIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-400 hover:border-gray-600 hover:text-gray-800"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === products.length - 1}
            className={`p-2 border-2 mr-4 rounded ${
              currentIndex === products.length - 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-400 hover:border-gray-600 hover:text-gray-800"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="flex justify-center ">
        <div className="flex gap-4 bg-white shadow-md rounded-lg  w-100 max-w-lg mr-30 ">
         
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].title}
            className="w-28 h-34 object-cover rounded"
          />

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className=" text-lg text-gray-900">
                {products[currentIndex].title}
              </h1>
              <p className="text-sm text-gray-500">{products[currentIndex].store}</p>
              <p className="text-base font-medium">{products[currentIndex].price}</p>
            </div>
            <div className="flex justify-between items-center">
             <Button className="mb-10 ">+ Quick view</Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
        {/* <div className="w-full h-fit mt-10 mb-10">
          <div className="flex items-center mb-4">
           <h1 className="text-4xl">You May Also Like</h1>
          <button><FaChevronLeft /></button>
          <button><FaChevronRight /></button>
          </div>
          
          <div className="flex mt-5">
            <img src="src/assets/shirtimg-1.jpg" alt="" className="w-28 h-34" />
            <div>
              <h1></h1>
              <p></p>
              <p></p>
               <Button>+ Quick view</Button>

            </div>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default SafariGl;
