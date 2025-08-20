import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Ui/Button";
import { IoLocationSharp } from "react-icons/io5";

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
          <div className="flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 px-2 py-1 flex-1"
            />
            <button className="bg-black text-white px-4">Subscribe</button>
          </div>
        </div>

        {/* Support */}
        <div>
          {/* Mobile button */}
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
            
            <h1 className="hidden md:block font-semibold text-lg mb-2">
              Support
            </h1>
            <ul className="flex flex-col space-y-1">
              
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
        <div>
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
          <p className="flex"><span className="text-gray-400"><IoLocationSharp/></span>support@store.com</p>
          <p>+12345678910</p>
          <p>Monday - Friday, 9 am - 9 pm</p>
          <div className="flex space-x-3 mt-3">
            <button>
              <RiFacebookFill />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaXTwitter />
            </button>
          </div>
        </div>
      </div>
      {/* payments */}
      <div className="w-full flex  mt-6">
        <div className="">
          <Button>English</Button>
          <Button>US|$</Button>
        </div>
        {/* payment-methods */}
        <div className="items-end flex justify-end space-x-2 ml-auto">
          <button><img src="src/assets/visa.jpg" alt="" className="w-10 h-5"/></button>
          <button><img src="src/assets/mc.jpg" alt="" className="w-10 h-5"/></button>
          <button><img src="src/assets/amex.jpg" alt="" className="w-10 h-5" /></button>
          <button><img src="src/assets/pp.jpg" alt="" className="w-10 h-5"/></button>
          <button><img src="src/assets/dc.jpg" alt="" className="w-10 h-5"/></button>
          <button><img src="src/assets/dis.jpg" alt="" className="w-10 h-5"/></button>
        </div>
        
        
      </div>
      {/* end-footer */}
      <div className="flex justify-center items-center mt-8">
          <hr />
          <h1 className="text-[45px]">Allure</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-4">
            <p className="text-[18px] text-gray-500">Copyright © 2025. |<span className="text-black"> Powered by Shopify </span></p>
          </div>
    </footer>
  );
}

export default Footer;
