import { useState } from "react";

function Features() {
  const [selected, setSelected] = useState("collar");

  
  const features = {
    blazer: {
      heading: "Eco-Friendly Blazer",
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
        { img: "/assets/ft3.jpg.svg", text: "All-season wear"},
        { img: "/assets/ft2.jpg.svg", text: "Breathable design"},
        { img: "/assets/ft1.jpg.svg", text: "Elegant finish" },
      ],
    },
  };

  return (
    <div className="w-fullmin-h-screen flex items-center justify-evenly bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left side: description */}
        <div className="flex-col md:flex-row order-2 md:order-1  items-center  p-6">
          <div className="bg-white shadow-md p-6 w-full md:w-90 md  min-h-[500px]">
            {selected ? (
              <>
                <h2 className="text-3xl text-black font-bold mb-4">
                  {features[selected].heading}
                </h2>
                <p className="text-black-400 mb-6">
                  {features[selected].description}
                </p>
                <div className="grid grid-cols-1  gap-1">
                  {features[selected].cols.map((col, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2  "
                    >
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
        <div className="flex-1 relative flex justify-center order-1 md:order-2">
          <img
            src="/assets/fti.jpg"
            alt="Blazer model"
            className="w-[250px] md:w-[400px] max-w-[400px] h-auto object-cover"
          />

          <button
            onClick={() => setSelected("blazer")}
            className="absolute top-[40%] left-[35%] w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full shadow-lg hover:scale-110 transition"
          />

          <button
            onClick={() => setSelected("tie")}
            className="absolute top-[50%] left-[43%] w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-lg hover:scale-110 transition"
          />

          <button
            onClick={() => setSelected("collar")}
            className="absolute top-[30%] left-[48%] w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-lg hover:scale-110 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
