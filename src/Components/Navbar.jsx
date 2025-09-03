import { useState, useEffect } from 'react';
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import Button from "./Ui/Button";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isTop = lastScrollY < 50;
  const navBg = isTop ? "bg-transparent" : "bg-white shadow-lg";
  const navText = isTop ? "text-white" : "text-black";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(y < lastScrollY || y < 100);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full h-20 px-1 py-4
        flex justify-between items-center mt-1
        transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100  " : "-translate-y-full opacity-0 "}
        ${navBg} ${navText} 
        lg:px-6 md:px-4 sm:px-3
      `}
    >
      {/* Left */}
      <div className="flex items-center text-xl">
        <CiMenuBurger
          size={30}
          className={`cursor-pointer hover:scale-110 transition-transform ${navText}`}
        />
        <Button><CiSearch size={24} className={` md:hidden mt-1 hover:scale-110 transition-transform ${navText}`} /></Button>
        <ul className={`hidden lg:flex ml-8 space-x-6 ${navText}`}>
          <Button className={`${navText}`}><li className="cursor-pointer hover:scale-105 transition">About Us</li></Button>
          <Button className={`${navText}`}><li className="cursor-pointer hover:scale-105 transition">Blog</li></Button>
          <Button className={`${navText}`}><li className="cursor-pointer hover:scale-105 transition">Contact Us</li></Button>
        </ul>
      </div>

     
      <h1
        className={`text-3xl font-'EB Garamond' mr-6 font-normal tracking-wider cursor-pointer hover:scale-105 transition-transform ${navText}`}
      >
        ALLURE
      </h1>

      {/* Right */}
      <div className={`flex items-center space-x-4 ${navText}`}>
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <Button className={`${navText}`}><span className={navText}>English</span></Button>
          <Button className={`${navText}`}><span className={navText}>US|$</span></Button>
          <Button className={`${navText}`}><CgProfile size={24} className={`hover:scale-110 transition-transform ${navText}`} /></Button>
        </div>
        
        <Button><IoBagHandleOutline size={24} className={`hover:scale-110 transition-transform ${navText}`} /></Button>
      </div>
    </nav>
  );
}

export default Navbar;
