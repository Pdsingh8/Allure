import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const Safari = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [sectionPhase, setSectionPhase] = useState("initial");
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [activeButton, setActiveButton] = useState("shirt"); // Track active button

  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const descriptionRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTouchY = useRef(0);

  // Safari suit images
  const safariImages = [
    { id: 1, src: "/assets/shirtimg-1.jpg", alt: "Safari Suit Front View" },
    { id: 2, src: "/assets/cardimg-1.webp", alt: "Safari Suit Side View" },
    { id: 3, src: "/assets/shoeimg-1.webp", alt: "Safari Suit Back View" },
    { id: 4, src: "/assets/beltimg-1.webp", alt: "Safari Suit Detail 1" },
    { id: 5, src: "/assets/pantimg-1.webp", alt: "Safari Suit Detail 2" },
    { id: 6, src: "/assets/coatsimg.jpg", alt: "Safari Suit Fabric" },
    { id: 7, src: "/assets/coatsimg.jpg", alt: "Safari Suit Styling" },
    { id: 8, src: "/assets/beltimg-1.webp", alt: "Safari Suit Complete" },
    { id: 9, src: "/assets/saleimg.jpg", alt: "Safari Suit Final Look" },
  ];
  

  // Color options
  const colorOptions = [
    { id: 1, name: "Dark Beige", src: "/assets/color1.jpg", selected: true },
    { id: 2, name: "Light Brown", src: "/assets/color2.jpg", selected: false },
    { id: 3, name: "Olive Green", src: "/assets/color3.jpg", selected: false },
  ];

  // Size options
  const sizeOptions = ["44", "46", "48", "50", "52", "54", "56", "58", "60"];

  // Product recommendations
  const recommendations = [
    {
      id: 1,
      title: "Elegant Check Blazer",
      store: "Couturist Tailors",
      price: "From $1,062.00",
      image: "/api/placeholder/120/150",
    },
    {
      id: 2,
      title: "Casual blazer & draw pant",
      store: "My Store",
      price: "From $450.99",
      image: "/api/placeholder/120/150",
    },
    {
      id: 3,
      title: "Leather classic men's shoes",
      store: "My Store",
      price: "$149.99",
      image: "/api/placeholder/120/150",
    },
    {
      id: 4,
      title: "Women's belt-lace in black",
      store: "My Store",
      price: "$199.99",
      image: "/api/placeholder/120/150",
    },
    {
      id: 5,
      title: "Casual draw pant & casual blazer",
      store: "My Store",
      price: "$79.99",
      image: "/api/placeholder/120/150",
    },
  ];

  // Product data with descriptions for each button
  const productData = {
    brand: "Couturist Tailors",
    title: "Coloured Safari Back Suit",
    price: "$1,426.00",
    originalPrice: "$1,551.00",
    descriptions: {
      shirt:
        "Our premium safari shirt is crafted from breathable cotton with reinforced stitching. Features include a classic collar, button-down front, and two chest pockets with flaps.",
      blazer:
        "The tailored safari blazer offers a sophisticated look with its structured shoulders, notch lapel, and four functional buttons. Made from durable twill fabric that resists wrinkles.",
      belt: "Complete your look with our genuine leather belt featuring a solid brass buckle. Adjustable for perfect fit and designed to complement the safari suit aesthetic.",
    },
    features: [
      "A notch lapel",
      "Two buttons at the front",
      "Two flap pockets on either side at the waist",
      "A chest pocket on the left side",
      "Structured shoulders and a sleek, tailored fit",
      "Dark beige colour",
      "Pleated Trouser",
      "Belted back waistline",
    ],
  };

  // Scroll handler with enhanced control
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    const inSection = rect.top <= 0 && rect.bottom >= windowHeight;
    setIsInSection(inSection);

    if (inSection) {
      const progress = Math.abs(rect.top) / (sectionHeight - windowHeight);

      if (progress <= 0.5) {
        setSectionPhase("images-scrolling");
        const imageProgress = progress / 0.5;
        const newIndex = Math.floor(imageProgress * 7);
        setCurrentImageIndex(Math.max(0, Math.min(6, newIndex)));
      } else if (progress <= 0.85) {
        setSectionPhase("both-scrolling");
        const bothScrollProgress = (progress - 0.5) / 0.35;
        const newIndex = Math.floor(6 + bothScrollProgress * 2);
        setCurrentImageIndex(Math.max(6, Math.min(7, newIndex)));
      } else {
        setSectionPhase("complete");
        setCurrentImageIndex(8);
      }
    } else {
      setSectionPhase("initial");
      if (rect.top > 0) {
        setCurrentImageIndex(0);
      }
    }

    lastScrollY.current = window.scrollY;
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e) => {
    lastTouchY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isInSection) return;

      const y = e.touches[0].clientY;
      const deltaY = lastTouchY.current - y;
      lastTouchY.current = y;

      if (Math.abs(deltaY) > 5) {
        e.preventDefault();
        if (deltaY > 0 && currentImageIndex < safariImages.length - 1) {
          setCurrentImageIndex((prev) => prev + 1);
        } else if (deltaY < 0 && currentImageIndex > 0) {
          setCurrentImageIndex((prev) => prev - 1);
        }
      }
    },
    [isInSection, currentImageIndex, safariImages.length]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

  const nextRecommendation = () => {
    setCurrentRecommendation((prev) =>
      prev < recommendations.length - 1 ? prev + 1 : 0
    );
  };

  const prevRecommendation = () => {
    setCurrentRecommendation((prev) =>
      prev > 0 ? prev - 1 : recommendations.length - 1
    );
  };

  // Handle button clicks to show different descriptions
//   const handleButtonClick = (buttonType) => {
//     setActiveButton(buttonType);
//   };

  return (
    <div className="min-h-screen">
      {/* Main animated section */}
      <div ref={sectionRef} className="relative" style={{ height: "400vh" }}>
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row">
          {/* Mobile header - appears above image on mobile */}
          <div className="lg:hidden p-6 bg-white z-20">
            <h1 className="text-2xl font-bold text-gray-900">
              {productData.title}
            </h1>
            <p className="text-gray-600 mt-2">{productData.brand}</p>
          </div>

          {/* Left - Hero image */}
          <div className="w-full lg:w-1/3 h-1/2 lg:h-full relative overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-amber-800">
              <img
                src="/assets/safarimain.jpg"
                alt="Safari Hero"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Desktop header - overlays image on desktop */}
              <div className="absolute top-6 left-6 text-white hidden lg:block">
                <h1 className="text-2xl font-bold">{productData.title}</h1>
                <p className="text-sm opacity-90">{productData.brand}</p>
              </div>

              {/* Interactive buttons */}
                {/* <div className="absolute bottom-6 left-6 flex space-x-3 z-10">
                 <button
                  onClick={() => handleButtonClick("shirt")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeButton === "shirt"
                      ? "bg-white text-amber-900"
                      : "bg-black/50 text-white hover:bg-black/70"
                  }`}
                 >
                  Shirt
                 </button>
                 <button
                  onClick={() => handleButtonClick("blazer")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeButton === "blazer"
                      ? "bg-white text-amber-900"
                      : "bg-black/50 text-white hover:bg-black/70"
                  }`}
                 >
                  Blazer
                 </button>
                  <button
                  onClick={() => handleButtonClick("belt")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeButton === "belt"
                      ? "bg-white text-amber-900"
                      : "bg-black/50 text-white hover:bg-black/70"
                  }`}
                 >
                  Belt
                  </button>
                </div> */}
            </div>
          </div>

          {/* Middle - Scrolling images */}
          <div className="w-full lg:w-1/3 h-1/2 lg:h-full relative overflow-hidden bg-gray-50 order-3 lg:order-2">
            <div
              ref={imagesRef}
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(-${currentImageIndex * 97}vh)`,
              }}
            >
              {safariImages.map((image, index) => (
                <div key={image.id} className="h-full w-full relative justify-center items-center text-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-120 w-90 object-cover ml-10"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div> */}
                  {/* <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(safariImages.length).padStart(2, "0")}
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product details */}
          <div
            ref={descriptionRef}
            className={`w-full lg:w-1/3 h-full lg:h-full bg-white transition-all duration-700 ease-out overflow-y-auto order-1 lg:order-3 ${
              sectionPhase === "both-scrolling" || sectionPhase === "complete"
                ? "opacity-100"
                : "opacity-70"
            }`}
            style={{
              transform:
                sectionPhase === "images-scrolling"
                  ? "translateY(5%)"
                  : sectionPhase === "both-scrolling"
                  ? `translateY(${Math.max(0, (5 - currentImageIndex) * 10)}%)`
                  : "translateY(0%)",
            }}
          >
            <div className="p-6 space-y-6">
              {/* Brand and title - hidden on mobile as we have it above */}
              <div className="space-y-2 hidden lg:block">
                <p className="text-sm text-amber-700 font-medium uppercase tracking-wide">
                  {productData.brand}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  {productData.title}
                </h2>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-gray-900">
                  {productData.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {productData.originalPrice}
                </span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full font-medium">
                  Save $125
                </span>
              </div>

              {/* Dynamic description based on button click */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 leading-relaxed">
                  {productData.descriptions[activeButton]}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-1">
                  {productData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-sm"
                    >
                      <span className="text-amber-600 font-bold mt-1">
                        {index + 1}.
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Garment type */}
              <div className="space-y-3">
                <p className="font-medium text-gray-900">Garment:</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border-2 border-black text-black bg-white hover:bg-black hover:text-white transition-colors">
                    Suit
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors">
                    Suit + Extra Trousers
                  </button>
                </div>
              </div>

              {/* Color selection */}
              <div className="space-y-3">
                <p className="font-medium text-gray-900">
                  Color: <span className="text-amber-700">Dark Beige</span>
                </p>
                <div className="flex space-x-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      className={`w-12 h-12 rounded-lg border-2 overflow-hidden ${
                        color.selected
                          ? "border-black"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      <img
                        src={color.src}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="space-y-3">
                <p className="font-medium text-gray-900">Size:</p>
                <div className="grid grid-cols-5 gap-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors text-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and purchase */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300">
                    <button className="px-3 py-2 hover:bg-gray-100">-</button>
                    <span className="px-4 py-2 border-l border-r">1</span>
                    <button className="px-3 py-2 hover:bg-gray-100">+</button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors font-medium">
                    Add to Cart
                  </button>
                  <button className="w-full bg-amber-700 text-white py-3 px-6 hover:bg-amber-800 transition-colors font-medium">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Recommendations */}
              <div className="border-t pt-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    You May Also Like
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevRecommendation}
                      className="p-2 border border-gray-300 hover:border-gray-500 transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextRecommendation}
                      className="p-2 border border-gray-300 hover:border-gray-500 transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex space-x-4">
                    <img
                      src={recommendations[currentRecommendation].image}
                      alt={recommendations[currentRecommendation].title}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {recommendations[currentRecommendation].title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {recommendations[currentRecommendation].store}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {recommendations[currentRecommendation].price}
                      </p>
                      <button className="flex items-center space-x-1 text-xs text-gray-700 hover:text-gray-900 mt-2">
                        <Plus size={12} />
                        <span>Quick View</span>
                      </button>
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
};

export default Safari;
