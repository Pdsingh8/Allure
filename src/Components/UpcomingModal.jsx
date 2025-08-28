import React, { useEffect, useState } from "react";

function UpcomingModal({ slides, currentSlide }) {
  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // reset independently
        return prev + 1; // 4s if interval = 40ms
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const upcomingIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center p-2 shadow-lg">
      {/* Upcoming Image Preview */}
      <div className="relative w-60 h-30 overflow-hidden mb-10 shadow-md">
        <img
          src={slides[upcomingIndex].image}
          alt="Upcoming"
          className="w-full h-full object-cover"
        />

        {/* Independent Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600">
          <div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingModal;
