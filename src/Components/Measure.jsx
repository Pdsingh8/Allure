import "./Measure.css";
import { useRef } from "react";

function Measure() {
  const scrollableDivRef = useRef(null);

  // Handle wheel event on the image div
  const handleWheel = (event) => {
    if (scrollableDivRef.current) {
      event.preventDefault();

      scrollableDivRef.current.scrollTop += event.deltaY;
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly font-inter-van w-full">
      {/* <h1 className="">THE PASSION BLOG POST</h1> */}
      {/* first image */}
      <div
        className="w-full md:w-160 h-[80vh] bg-[url(src/assets/measure.jpg)]"
        onWheel={handleWheel}
      >
        <div className="text-white absolute w-160 backdrop-blur-sm float-left mt-110">
          <p className="font-serif text-sm font-light">Posted on March 13, 2025</p>
          <h1 className="text-4xl">Benefits of Made-to-Measure</h1>
          <p>
            When it comes to clothing, finding the perfect fit can be a real
            challenge. That's where made-to-measure tailoring comes in. Unlike
            off-the-rack garments, made-
          </p>
          <button className="">Read more</button>
        </div>
      </div>
      {/* second-div */}
      <div
        className="flex flex-col md:flex-row w-200 md:overflow-y-scroll h-[80vh] scrollbar-none scrollbar-none gap-4"
        ref={scrollableDivRef}
      >
        {/* col-1 */}
        <div className=" md:flex-col w-170">
          {/* first card */}
          <div className="flex md:flex-col">
            <img
              src="/assets/p1.jpg"
              alt=""
              className="w-86 h-65 hover:scale-110 "
            />
            <div className="">
              <p className="text-gray-400 font-sans mt-2.5">
                Posted on February 27, 2025
              </p>
              <h1>The Ultimate Travel Companion: Protecting Your...</h1>
              <p>
                In the world of high fashion, the preservation of quality and
                elegance is...
              </p>
            </div>
          </div>
          {/* first card */}

          {/* secondcard */}

          <div className="flex md:flex-col">
           <img src="/assets/p3.jpg" alt="" className="w-85 h-120  " />
           <p className="text-gray-400">Posted on February 27, 2025</p>
            <h1>Be Different, Go Navy. The Modern Black Tie Attire</h1>
           <p>
            In the world of black tie, tradition reigns supreme. Black dinner
            jackets paired with...
            </p>
          </div>
          {/* secondcard */}
          {/* 3rd */}
          <div className="flex md:flex-col">
            <img
            src="/assets/p5.jpg"
            alt=""
            className="w-86 h-65 .hover:scale-110 "
          />
          <p className="text-gray-400">Posted on February 27, 2025</p>
          <h1>Cashmere Luxury</h1>
          <p>
            Cashmere is synonymous with luxury, softness, and warmth. For
            centuries, it has...
          </p>
          </div>
          
        </div>
        {/* col-2 */}
        <div className="w-140">

          <div className="flex md:flex-col gap-2">
              <img
            src="/assets/p2.jpg"
            alt=""
            className="w-80 h-90 .hover:scale-110 "
          />
          <p className="text-gray-400">Posted on February 27, 2025</p>
          <h1>What Colour Buttons to Choose?</h1>
          <p>
            The Art of Customisation: Why Less is More with Tailored Suits The
            allure of a custom-made suit or jacket lies in its personalised
          </p>
          </div>
          
           <div className="flex md:flex-col">
                 <img
            src="/assets/p4.jpg"
            alt=""
            className="w-86 h-71 .hover:scale-110 "
          />
          <p className="text-gray-400">Posted on February 27, 2025</p>
          <h1>The Difference Between a Sports Coat and a Suit Jacket</h1>
          <p>
            While sports coats and suit jackets may seem similar at first
            glance, they serve...
          </p>
           </div>
          
             <div className="flex md:flex-col ">
                  <img
            src="/assets/p6.jpg"
            alt=""
            className="w-86 h-71 .hover:scale-110 "
          />
          <p className="text-gray-400">Posted on February 27, 2025</p>
          <h1>Where to Wear? - The Sports Coat</h1>
          <p>
            The beauty of a sports coat lies in its versatility. Unlike a suit
            jacket, which is...
          </p>
             </div>
          
        </div>
      </div>
      <div>
      </div>
    </div>
    
  );
}

export default Measure;
