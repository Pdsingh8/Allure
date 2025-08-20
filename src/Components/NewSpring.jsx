import React from "react";

function NewSpring() {
  return (
    <div className="w-full h-screen flex relative bg-[url(src/assets/springc.jpg)] bg-center justify-center bg-no-repeat bg-cover items-center">
      
      <div className=" text-white text-center jusitfy-center">+
        <h1 className="text-5xl">New Spring Collections</h1>
        <p className="items-center justify-center inset-0 mt-5">Ready to wear bespoke items</p>
        <div className="text-center mt-4">
          <button className="bg-white text-black border border-gray-300 mr-4 px-9 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
                        <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10">Shop New </span>
                        </button>
          <button className="bg-white text-black border border-gray-300 px-9 py-2 relative overflow-hidden group transition-colors duration-300 hover:text-white">
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Shop All </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSpring;
