import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import  Button from "./Ui/Button";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div>
          <h1 className="font-semibold text-lg mb-2">Newsletter</h1>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for exclusive updates, style tips, and
            special offers - straight to your inbox.
          </p>
          <div className=" flex flex-col mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className=" px-2 py-1 flex-1 mb-2"
            />
            <button className="relative cursor-pointer px-6 py-2 bg-black text-white text-[16px] group overflow-hidden rounded">
              
              <div className="relative h-6 flex justify-center overflow-hidden">
                <p className="absolute inset-0 flex justify-center items-center transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                  Subscribe
                </p>
                <p className="absolute inset-0 flex justify-center items-center translate-y-full transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                  Subscribe
                </p>
              </div>

              {/* hover background overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded"></div>
            </button>
          </div>
        </div>

        
        <div className="font-Inter">
          
          <button
            onClick={() => toggleSection("support")}
            className="md:hidden flex  w-full text-left font-semibold text-lg py-2 border-b"
          >
            Support <FaChevronDown />
          </button>

          {/* Desktop always open, Mobile collapsible */}
          <div
            className={`overflow-hidden transition-all duration-300 md:block ${
              openSection === "support" ? "max-h-96" : "max-h-0 md:max-h-none"
            }`}
          >
            <h1 className="hidden md:block font-Inter font-semibold text-lg mb-2">
              Support
            </h1>
            <ul className="flex flex-col space-y-1 font-Inter">
              <li>
                <Button>FAQ</Button>
              </li>
              <li>
                <Button>Contact Us</Button>
              </li>
              <li>
                <Button>Privacy Policy</Button>
              </li>
              <li>
                <Button>Refund Policy</Button>
              </li>
              <li>
                <Button>Shipping & Returns</Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Collections */}
        <div className="font-Inter">
          <button
            onClick={() => toggleSection("collections")}
            className="md:hidden w-full text-left font-semibold text-lg py-2 border-b"
          >
            Collections <FaChevronDown />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 md:block ${
              openSection === "collections"
                ? "max-h-96"
                : "max-h-0 md:max-h-none"
            }`}
          >
            <h1 className="hidden md:block font-semibold text-lg mb-2">
              Collections
            </h1>
            <ul className="flex flex-col space-y-1">
              <li>
                <Button>All Collections</Button>
              </li>
              <li>
                <Button>Men</Button>
              </li>
              <li>
                <Button>Women</Button>
              </li>
              <li>
                <Button>Sale</Button>
              </li>
              <li>
                <Button>Lookbook</Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h1 className="font-semibold text-lg mb-2">Contact</h1>
          <p className="flex text-center items-center space-x-4">
            <span className="text-gray-500 justify-between">
              <GrLocation size={18}/>
            </span>
            support@store.com
          </p>
          <p className="flex text-center items-center space-x-4 mt-2"> 
            <span className="text-gray-500 justify-between">
             <MdOutlinePhone />
            </span>
            
            +12345678910</p>
          <p className="flex text-center items-center space-x-4 mt-2">
            <span className="text-gray-600 justify-between">
              <IoMdTime />
            </span>
            Monday - Friday, 9 am - 9 pm</p>
          <div className="flex space-x-3 mt-3">
             <button className="text-center text-black h-[48px] flex justify-center items-center  mb- w-10 border-black border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 "><RiFacebookFill size={20} /></span>
            </button>
            {/* <button>
              
            </button> */}
           <button className="text-center text-black h-[48px] flex justify-center items-center  mb- w-10 border-black border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 "><FaInstagram size={20} /></span>
            </button>
            <button className="text-center text-black h-[48px] flex justify-center items-center  mb- w-10 border-black border px-6 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 "><FaXTwitter size={20} /></span>
            </button>
          </div>
        </div>
      </div>
      {/* payments */}
      <div className="w-full flex justify-around mt-6">
        <div className="flex">
          <Button>English</Button>
          <img src="/assets/flag1.jpg" alt="" className="w-8 h-7 ml-3  rounded-full bg-transparent" />
          <Button>US|$</Button>
        </div>
        {/* payment-methods */}
        <div className="items-end flex justify-end space-x-2 ml-auto ">
          <button>
            <img src="/assets/visa.jpg" alt="" className="w-10 h-5" />
          </button>
          <button>
            <img src="/assets/mc.jpg" alt="" className="w-10 h-5" />
          </button>
          <button>
            <img src="/assets/amex.jpg" alt="" className="w-10 h-5" />
          </button>
          <button>
            <img src="/assets/pp.jpg" alt="" className="w-10 h-5" />
          </button>
          <button>
            <img src="/assets/dc.jpg" alt="" className="w-10 h-5" />
          </button>
          <button>
            <img src="/assets/dis.jpg" alt="" className="w-10 h-5" />
          </button>
        </div>
      </div>
      {/* end-footer */}
      <div className="flex justify-center items-center mt-8">
        <hr />
        <h1 className="text-[45px]">Allure</h1>
        <hr />
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-[18px] text-gray-500">
          Copyright © 2025. |
          <span className="text-black"> Powered by Shopify </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
