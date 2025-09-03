import { useState } from "react";
import PulseButton from "./PulseButton.jsx";

function Features() {
  const [selected, setSelected] = useState("collar");

  const features = {
    blazer: {
      heading:"Eco-Friendly Blazer",
      description:
        "Ethically sourced materials with a commitment to eco-friendly production. Designed to minimize environmental impact without compromising on quality or style.",
      cols: [
        { img: "/assets/ft3.jpg.svg", text: "Sustainable fabric" },
        { img: "/assets/ft2.jpg.svg", text: "Modern tailoring" },
        { img: "/assets/ft1.jpg.svg", text: "Durable stitching" },
      ],
    },
    tie: {
      heading: "Signature Tie",
      description: "Benefits Introducing our signature MatchlessMerino.",
      cols: [
        { img: "/assets/ft3.jpg.svg", text: "Premium wool" },
        { img: "/assets/ft2.jpg.svg", text: "Soft texture" },
        { img: "/assets/ft1.jpg.svg", text: "Luxury feel" },
      ],
    },
    collar: {
      heading: "Merino Wool Collar",
      description:
        "Introducing our signature MatchlessMerino, made of Merino wool, thinner, softer and finer than regular wool. Luxe feeling, breathable and all-season versatility.",
      cols: [
        { img:"/assets/ft3.jpg.svg", text: "All-season wear"},
        { img:"/assets/ft2.jpg.svg", text: "Breathable design"},
        { img:"/assets/ft1.jpg.svg", text: "Elegant finish" },
      ],
    },
  };

  return (
    <div className="w-full h-full md:min-h-screen flex items-center justify-evenly mb-90 md:mb-1 bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left side: description */}
        <div className="flex-col z-10 absolute md:relative mt-89 md:mt-10 md:flex-row order-2 md:order-1 items-center md:p-6">
          <div className="bg-white shadow-md p-6 w-full md:w-90 h-120 md:min-h-[500px]">
            {selected ? (
              <>
                <h2 className="text-2xl md:text-3xl text-black font-bold md:mb-4">
                  {features[selected].heading}
                </h2>
                <p className="text-black-400 md:mb-6">
                  {features[selected].description}
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {features[selected].cols.map((col, i) => (
                    <div key={i} className="flex items-center p-2  ">
                      <img
                        src={col.img}
                        alt={col.text}
                        className="w-20 h-20 object-cover rounded-lg mb-2"
                      />
                      <p className="text-sm text-gray-700 pl-3">{col.text}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : ( 
              <p className="text-gray-500">
                Click on a hotspot to see details.
              </p>
            )}
          </div>
        </div>

        {/* Right side: image with buttons */}
        <div className="flex-1 relative flex justify-center overflow-hidden order-1 md:order-2 h-[300px] md:h-[600px]">
          <img
            src="/assets/fti.jpg"
            alt="Blazer model"
            className="relative object-cover h-[100%] md:h-[160%] w-100 md:w-[500px]"
            
          />

          <PulseButton
            onClick={() => setSelected("blazer")}
            className="absolute top-[45%] md:top-[65%] left-[30%] md:left-[35%] w-6 h-6 md:w-10 md:h-10 bg-red-500 rounded-full shadow-lg hover:scale-110 transition"
          />

          <PulseButton
            onClick={() => setSelected("tie")}
            className="absolute top-[55%] md:top-[80%] left-[40%] md:left-[43%] w-6 h-6 md:w-10 md:h-10 bg-white rounded-full shadow-lg hover:scale-110 transition"
          />

          <PulseButton
            onClick={() => setSelected("collar")}
            className="absolute top-[30%] md:top-[45%] left-[50%] md:left-[50%] w-6 h-6 md:w-10 md:h-10 bg-white rounded-full shadow-lg hover:scale-110 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
