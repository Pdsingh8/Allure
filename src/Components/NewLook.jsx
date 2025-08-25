import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import "./NewLook.css";
import { FaRegDotCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Button from "./Ui/Button";
// import PulseButton from "./PulseButton.jsx";
import StaticButton from "./StaticButton";

function NewLook() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ProductModal = ({ product, onClose }) => (
    <div className="absolute flex bg-white p-4 shadow-lg h-48 md:w-126 ml-6 z-50 animate-slide-down transition-all duration-0 ease-out mt-4  ">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <RxCross1 size={20} />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-38 h-44 pb-2 object-cover"
      />
      <div className="gap-4 ml-4">
        <h3 className="text-[16px] font-light">{product.name}</h3>
        <p className="text-gray-600">From ${product.price.toLocaleString()}</p>
        <Button className="mt-18">+ Quick view</Button>
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
      name: "Striped Shirt",
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
    <div className="relative w-[300px] md:w-full h-auto ">
      {/* <h1 className=" text-7xl font-sans">NEW LOOK</h1>
      <p className="">discover our new arrivals</p> */}
      <div className="block md:hidden px-4 pt-4">
        <h1 className="text-4xl font-'EB Garamond' ">NEW LOOK</h1>
        <p className="text-base">discover our new arrivals</p>
      </div>

      <div className="relative w-[300px] md:w-full h-[200px] md:h-[350px]">
        <img
          src="/assets/newlooks.jpg"
          alt=""
          className="object-cover w-full md:h-150"
        />
        <div className="hidden md:block absolute top-4 left-10 text-black z-10">
          <h1 className="text-7xl font-sans">NEW LOOK</h1>
          <p className="text-lg">discover our new arrivals</p>
        </div>

        <div className="absolute w-[300px] md:w-full h-auto inset-0 flex items-center justify-center">
          <StaticButton
            className=" w-10 h-10 rounded-full top-4/4 mr-20 absolute  hover:rounded-full hover:text-xs "
            onClick={() => {
              setSelectedProduct(products[0]);
              setShowModal(true);
            }}
            style={{ transform: "translateY(-50%)" }}
          >
            {/* <FaRegDotCircle size={30} className="text-xs" /> */}
          </StaticButton>
          <StaticButton
            className="w-10 h-10 p-3 rounded-full top-5/4 mr-20  absolute"
            onClick={() => {
              setSelectedProduct(products[1]);
              setShowModal(true);
            }}
            style={{ transform: "translateY(-50%)" }}
          >
            
          </StaticButton>
          <StaticButton
            className="w-10 h-10 p-3 rounded-full top-6/4 mr-2 absolute"
            onClick={() => {
              setSelectedProduct(products[2]);
              setShowModal(true);
            }}
            style={{ transform: "translateY(-50%)" }}
          >
            
          </StaticButton>
        </div>
        
      </div>
      {showModal && selectedProduct && (
        <div className="md:ml-4 mt-4 md:mt-0  inset-0 animate-slide-down transition-all duration-500 ease-out">
          <ProductModal
            product={selectedProduct}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}
    </div>
  );
}

export default NewLook;
