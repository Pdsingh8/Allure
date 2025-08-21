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
          src="/assets/videoimg.jpg"
          alt=""
          className="w-full h-180 object-cover blur-sm"
        />
        {showVideo ? (
          <div
            className="absolute flex inset-0 items-center justify-center object-cover cursor-pointer"
            onClick={handlePlay}
          >
            <iframe
              src="/assets/video.mp4"
              frameBorder="0"
              className="w-169 h-110 object-cover"
            ></iframe>
          </div>
        ) : (
          <div className="absolute flex inset-0 items-center justify-center">
            <img
              src="/assets/videoimg.jpg"
              alt="Video Thumbnail"
              className="md:w-2/4 md:h-3/5 rounded-lg shadow-lg"
              onClick={handlePlay}
            />
          </div>
        )}
        
      </div>
      
    </section>
  );
}

export default Video;
