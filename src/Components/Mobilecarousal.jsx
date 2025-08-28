import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Ui/Button";

const images = [
  "/assets/shirtimg-1.jpg",
  "/assets/cardimg-1.webp",
  "/assets/shoeimg-1.webp",
  "/assets/beltimg-1.webp",
  "/assets/pantimg-1.webp",
  "/assets/coatimg-1.jpg",
  "/assets/sneakerimg-1.jpg",
  "/assets/bagimg-1.jpg",
  "/assets/bagimg-1.jpg",
];
const products = [
  {
    image: "/assets/s1.jpg",
    title: "Dark Beige Safari Suit",
    store: "couturist tailors",
    price: "$1,426.00",
  },
  {
    image: "/assets/s2.jpg",
    title: "Classic Black Suit",
    store: "couturist tailors",
    price: "$1,550.00",
  },
  {
    image: "/assets/s3.jpg",
    title: "Navy Blue Suit",
    store: "couturist tailors",
    price: "$1,600.00",
  },
];

export default function Mobilecarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="block md:hidden w-full max-w-5xl mx-auto">
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
      {/* Third div - Description */}
      <div className="w-full bg-gray-50 relative overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col justify-center ">
            <p className="text-gray-600 ">couturist tailors</p>
          </div>

          <h1 className="font-'EB Garamond' text-4xl">
            Coloured Safari Black Suit
          </h1>
          <p className="text-gray-600">
            Introduce a touch of timeless sophistication to your wardrobe with
            our impeccably crafted dark beige suit. Designed for the discerning
            gentleman, this suit showcases a classic notch lapel and a sleek
            two-button front closure. Thoughtfully designed flap pockets at the
            waist and a chest pocket on the left side add both functionality and
            elegance. The jacket, featuring structured shoulders and a tailored
            fit, enhances your physique, providing a contemporary and polished
            appearance. The rich camel colour exudes versatility and style,
            making it suitable for various occasions. The pleated trousers add a
            touch of classic elegance and comfort. Made with fine craftsmanship,
            every stitch is carefully executed to ensure durability and a
            luxurious feel. Whether for professional settings, weddings, or
            special events, this suit represents high-end fashion and impeccable
            design. Add this distinguished suit to your collection and make a
            lasting impression.
          </p>
          <p className="flex flex-col space-y-2 text-gray-600">
            The jacket features:
            <span> 1. A notch lapel</span>
            <span> 2. Two buttons at the front.</span>
            <span> 3.Two flap pockets on either side at the waist.</span>
            <span>4. A chest pocket on the left side.</span>
            <span>5. Structured shoulders and a sleek,tailored fit.</span>
            <span>6. Dark beige colour</span>
            <span>7. Pleated Trouser</span>
            <span>8. Belted back waistline</span>
          </p>

          <div className="space-y-6 text-gray-600">
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
                  className="w-12 h-12 underline "
                />
              </button>
              <button className="mr-2">
                <img src="/assets/color2.jpg" alt="" className="w-12 h-12" />
              </button>
              <button className="mr-2">
                <img src="/assets/color3.jpg" alt="" className="w-12 h-12" />
              </button>
            </div>
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
              <p>quantity :</p>
              <div className="border border-gray-300 w-55 h-13 flex justify-evenly items-center ">
                <button
                  className="mb-1 cursor-pointer text-2xl"
                  onClick={decrease}
                >
                  -
                </button>
                <input type="text" value={count} className="w-5" />
                <button onClick={increase} className="cursor-pointer text-2xl">
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="relative cursor-pointer px-6 py-2 bg-black text-white text-[16px] group overflow-hidden rounded">
                <div className="relative h-8 flex justify-center overflow-hidden">
                  <p className="absolute inset-0 flex justify-center items-center transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                    Subscribe
                  </p>
                  <p className="absolute inset-0 flex justify-center items-center translate-y-full transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Subscribe
                  </p>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded"></div>
              </button>
              <button className="relative overflow-hidden border border-black px-6 py-3 text-black bg-white  transition-colors duration-300 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Buy it Now
                </span>
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </div>

            {/* Product Slider */}
            <div className="w-full h-fit mt-10 mb-10">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl text-black font-'Baskervville' ml-10">
                  You May Also Like
                </h1>
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

              <div className="flex justify-center ">
                <div className="flex gap-4 bg-white shadow-md  w-110 max-w-lg p-4">
                  <img
                    src={products[currentIndex].image}
                    alt={products[currentIndex].title}
                    className="w-28 h-34 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-lg text-gray-900">
                        {products[currentIndex].title}
                      </h1>
                      <p className="text-sm text-gray-500">
                        {products[currentIndex].store}
                      </p>
                      <p className="text-base font-medium">
                        {products[currentIndex].price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button className="mb-2">+ Quick view</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
