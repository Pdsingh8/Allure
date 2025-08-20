import { useState } from "react";
function Video() {
  const [showVideo, setShowVideo] = useState(false);
  

    const handlePlay = () => {
      setShowVideo(true);
    };
  
  return (
    <section className="h-full mt-50">
      <div className="relative">
        <img
          src="src/assets/videoimg.jpg"
          alt=""
          className="w-full h-180 object-cover blur-sm"
        />
        {showVideo ? (
          <div
            className="absolute flex inset-0 items-center justify-center object-cover cursor-pointer"
            onClick={handlePlay}
          >
            <iframe
              src="src/assets/video.mp4"
              frameBorder="0"
              className="w-169 h-110 object-cover"
            ></iframe>
          </div>
        ) : (
          <div className="absolute flex inset-0 items-center justify-center">
            <img
              src="src/assets/videoimg.jpg"
              alt="Video Thumbnail"
              className="md:w-2/4 md:h-3/5 rounded-lg shadow-lg"
              onClick={handlePlay}
            />
          </div>
        )}
        {/* <div className="flex absolute inset-4 items-center justify-center top-90 w-screen">
          <div className="scrolling-text inline-block bg-transparent absolute items-center inset-0 justify-center text-white">
            <span className="mx-8 align-middle cursor-pointer text-2xl">
              Get free shipping on purchases over $100-- Get free shipping on
              purchases over $100
            </span>
            <span className="mx-8 align-middle cursor-pointer text-2xl">
              Get free shipping on purchases over $100--Get free shipping on
              purchases over $100
            </span>
           
          </div>
        </div> */}
      </div>
      
    </section>
  );
}

export default Video;
