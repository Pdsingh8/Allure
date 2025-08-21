import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

function BestSelling() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      id: 1,
      title: "Elegant Check Blazer",
      store: "Pollheim",
      price: "From $1,062.00",
      image1: "/assets/shirtimg-1.jpg",
      image2: "/assets/blazerimg-2.jpg",
    },
    {
      id: 2,
      title: "casual blazer & casual draw pant",
      store: " My Store",
      price: "from $450.99",
      image1: "/assets/cardimg-1.webp",
      image2: "/assets/cardimg-2.webp",
    },
    {
      id: 3,
      title: "leather classic men's shoes",
      store: "my store",
      price: "$149.99",
      image1: "/assets/shoeimg-1.webp",
      image2: "/assets/shoeimg-2.webp",
    },
    {
      id: 4,
      title: "women's belt-lace in black",
      store: "my store",
      price: "$199.99",
      image1: "/assets/beltimg-1.webp",
      image2: "/assets/beltimg-2.webp",
    },
    {
      id: 5,
      title: "casual draw pant & casual blazer",
      store: "my store",
      price: "$79.99",
      image1: "/assets/pantimg-1.webp",
      image2: "/assets/pantimg-1.webp",
    },
  ];

  const getMaxIndex = () => {
    if (window.innerWidth < 768) {
      return products.length - 1;
    }
    return products.length - 3;
  };

  const nextSlide = () => {
    if (currentIndex < getMaxIndex()) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 h-230 py-12">
        <div className=" items-center mb-8 ">
          

          <div className="text-center mb-8 flex justify-between ">
            <h1 className="text-3xl">Best Selling Products Up to 70% Off</h1>
            
            <div className="flex justify-center gap-2 mt-4">
                <h2 className="">see all products </h2>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`p-2  border-2 transition-all duration-200 ${
                  currentIndex === 0
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800"
                }`}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= getMaxIndex()}
                className={`p-2  border-2 transition-all duration-200 ${
                  currentIndex >= getMaxIndex()
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out mt-8"
              style={{
                transform:
                  window.innerWidth < 768
                    ? `translateX(-${currentIndex * 100}%)`
                    : `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-1 "
                >
                  <div className="bg-white  shadow-md  transition-shadow duration-300 overflow-hidden group ">
                    {/* Product Image */}
                    <div
                      className="relative h-124 overflow-hidden cursor-pointer "
                      onMouseEnter={() => setHoveredCard(product.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <img
                        src={
                          hoveredCard === product.id
                            ? product.image2
                            : product.image1
                        }
                        alt={product.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        by {product.store}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl  ">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSelling;
