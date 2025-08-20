import "./Lright.css";
import { useState } from "react";
const images = [
  { src: "src/assets/l1.jpg", w: "w-72", h: "h-70" },
  { src: "src/assets/l2.jpg", w: "w-72", h: "h-50" },
  { src: "src/assets/l3.jpg", w: "w-60", h: "h-84" },
  { src: "src/assets/l4.jpg", w: "w-80", h: "h-48" },
  { src: "src/assets/l5.jpg", w: "w-64", h: "h-66" },
  { src: "src/assets/l6.jpg", w: "w-52", h: "h-40" },
];

function Lright() {
    const [paused, setPaused] = useState(false);

  return (
    <div className="w-full h-fit overflow-hidden bg-gray-100 py-6"  >
        <div className="w-full flex justify-center items-center mb-6">
           <h1 className="text-6xl">POLLHEIM </h1>
        </div>
        
      {/* Wrapper that pauses on hover */}
      <div className="relative w-screen max-w-4xl mt-3 mx-auto overflow-hidden" onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
        {/* Track */}
        <div className= {`flex animate-carousel ${paused ? "paused" : ""}`}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 ${img.w} ${img.h} mx-2 shadow-lg overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={`card-${idx}`}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.3] transition-transform duration-300 ease-in-out"
              />
            </div>
            
          ))}
          <div className="flex w-full text-center">
            <p className="text-black">@pollheim</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lright