import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import "./NewLook.css";
import { FaRegDotCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Button from "./Ui/Button.jsx";
import StaticButton from "./StaticButton";

function NewLooks() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ProductModal = ({ product, onClose }) => (
    <div className="relative bg-white p-4 shadow-lg w-full max-w-md mx-auto md:absolute md:left-[20%] md:-translate-x-1/2 md:top-3/4 md:-translate-y-1/2 md:h-50 md:w-126 z-50 animate-slide-down transition-all duration-300 ease-out rounded-lg md:rounded-none mt-4 md:mt-0">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <RxCross1 size={20} />
      </button>
      <div className="flex md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-30 md:w-38 h-32 md:h-44 object-cover mb-4 md:mb-0"
        />
        <div className="ml-2 md:ml-4">
          <h3 className="text-[16px] font-light">{product.name}</h3>
          <p className="text-gray-600 mb-4">From ${product.price.toLocaleString()}</p>
          <Button className="">+ Quick view</Button>
        </div>
      </div>
    </div>
  );

  const products = [
    {
      name: "Casual Draw Pant & Check Blazer",
      price: 1061.0,
      image: "/assets/shirtimg-1.jpg",
    },
    { 
      name: "Women's Belt",
      price: 500.0, 
      image: "/assets/beltimg-1.webp"
    },
    {
      name: "Black Pant",
      price: 750.0,
      image: "/assets/pantimg-1.webp"
    },
  ];

  return (
    <div className="relative w-full h-150">
      {/* Mobile header */}
      <div className="block md:hidden px-4 pt-4">
        <h1 className="text-4xl font-['EB_Garamond']">NEW LOOK</h1>
        <p className="text-base">discover our new arrivals</p>
      </div>

      <div className="relative w-full">
        <div className="relative h-[300px] md:h-[550px]">
          <img
            src="/assets/newlooks.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
          
          {/* Desktop header overlay */}
          <div className="hidden md:block absolute top-4 left-10 text-black z-10">
            <h1 className="text-7xl font-sans">NEW LOOK</h1>
            <p className="text-lg">discover our new arrivals</p>
          </div>

          {/* Interactive buttons */}
          <div className="absolute inset-0">
            {/* Button 1 */}
            <StaticButton
              className="w-8 h-8 md:w-13 md:h-13 rounded-full absolute z-20 top-[35%] left-[46%] md:top-[37%] md:right-20 transform -translate-y-1/2"
              onClick={() => {
                setSelectedProduct(products[0]);
                setShowModal(true);
              }}
            />
            
            {/* Button 2 */}
            <StaticButton
              className="w-8 h-8 md:w-13 md:h-13 rounded-full absolute z-20 top-[75%] left-[46%] md:top-[76%] md:right-25 transform -translate-y-1/2"
              onClick={() => {
                setSelectedProduct(products[1]);
                setShowModal(true);
              }}
            />
            
            {/* Button 3 */}
            <StaticButton
              className="w-8 h-8 md:w-13 md:h-13 rounded-full absolute z-20 top-[90%] right-[45%] md:top-[92%] md:right- transform -translate-y-1/2"
              onClick={() => {
                setSelectedProduct(products[2]);
                setShowModal(true);
              }}
            />
          </div>
        </div>
        
        {/* Modal */}
        {showModal && selectedProduct && (
          <div className="w-full mt-4 md:mt-0">
            <ProductModal
              product={selectedProduct}
              onClose={() => setShowModal(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewLooks;