import React, { useEffect, useState } from "react";

function UpcomingModal({ slides, currentSlide }) {
  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; 
        return prev + 1; 
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const upcomingIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="absolute hidden md:block bottom-4 right-4 z-20  flex-col items-center p-2 shadow-lg">
      {/* upcoming image*/}
      <div className="relative w-60 h-30 overflow-hidden mb-10 shadow-md">
        <img
          src={slides[upcomingIndex].image}
          alt="Upcoming"
          className="w-full h-full object-cover"
        />

        {/* progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600">
          <div
            className="h-full bg-black"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingModal;
