"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeColumnScroll() {
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",   
              end: "top 50%",     
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 h-screen">
      {/* LEFT PANEL */}
      <div className="sticky top-0 h-screen bg-gray-800 text-white flex items-center justify-center text-2xl font-bold">
        Left Panel
      </div>

      {/* SCROLLABLE MIDDLE */}
      <div className="overflow-y-auto h-screen space-y-12 p-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center shadow-lg"
          >
            Image {i + 1}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="sticky top-0 h-screen bg-gray-800 text-white flex items-center justify-center text-2xl font-bold">
        Right Panel
      </div>
    </div>
  );
}
