function Perfect() {
  return (
    <div className="flex-col md:flex w-full min-h-screen md:h-[120vh] overflow-hidden">
      <h1 className="text-5xl mt-10 mb-10 ml-6">Your Perfect-Fit Blazer</h1>
      {/* cards-div */}
      <div className="  flex flex-col md:flex-row justify-evenly  items-start gap-6">
        {/* card-1 */}
        <div className="justify-evenly overflow-hidden group relative">
          <img
            src="/assets/perfect1.jpg"
            alt=""
            className="w-70 md:w-[24rem] h-[50vh] md:h-[80vh] object-cover transform scale-100 group-hover:scale-[1.1] transition-transform duration-300 ease-in-out"
          />
          <div className="backdrop-blur-sm absolute bottom-0 mb:7 md:mb-9 ml-5 w-60 md:w-100 text-white h-25 md:h-30 group-hover:block">
            <h1 className="ml-10 text-3xl mt-5">Jackets</h1>
            <p className="ml-10 ">See all products</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="overflow-hidden group relative">
          <img
            src="/assets/perfect2.jpg"
            alt=""
            className="w-70 md:w-[24rem] h-[50vh] md:h-[80vh] object-cover origin-bottom transform scale-100 group-hover:scale-[1.667] transition-transform duration-40 ease-in-out "
          />
          <div className=" backdrop-blur-sm absolute bottom-20 text-white md:hidden flex justify-center items-center group-hover:opacity-100">
            <button className="">+</button>
            <button>Quick view </button>
          </div>
          {/* quick-view-blur */}
           {/* <div className="backdrop-blur-sm absolute bottom-16 left-0 w-full md:hidden p-4 flex justify-center items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-3 py-1 bg-white text-black rounded">+</button>
            <button className="px-3 py-1 bg-white text-black rounded">Quick view</button>
          </div> */}
          {/* <div>
            <p className="hover:hidden text-gray-400">3 colors</p>
          </div> */}
          {/* description-button */}
          <div className="flex relative group md:hidden group-hover:block ">
            <button className="">
              <img
                src="/assets/color1.jpg"
                alt=""
                className="w-12 h-2 mr-2 "
              />
            </button>
            <button className="">
              <img
                src="/assets/color2.jpg"
                alt=""
                className="w-12 h-2 mr-2"
              />
            </button>
            <button className="">
              <img src="/assets/color3.jpg" alt="" className="w-12 h-2" />
            </button>
          </div>
          {/* description */}
          <div>
            <h1>Luxe Summer Blazer</h1>
            <p>Pollheim</p>
            <p>from $1069.00</p>
          </div>
        </div>
        {/* 3rd card */}
        <div>
          <div className="overflow-hidden group relative">
          <img
            src="/assets/perfect3.jpg"
            alt=""
            className="w-70 md:w-[24rem] h-[50vh] md:h-[80vh] object-cover origin-bottom transform scale-100 group-hover:scale-[1.667] transition-transform duration-40 ease-in-out "
          />
          {/* quick-view-blur */}
          {/* <div className="flex backdrop-blur-sm absolute bottom-0 w-100  text-white h-[5vh] md:hidden group-hover:block text-center">
            <button>+</button>
            <button>Quick view</button>
          </div>  */}

          {/* <div>
            <p className="hover:hidden text-gray-400">3 colors</p>
          </div>
          {/* description-button */}
          <div className="flex relative group md:hidden group-hover:block ">
            <button className="">
              <img
                src="/assets/color1.jpg"
                alt=""
                className="w-12 h-2 mr-2 "
              />
            </button>
            <button className="">
              <img
                src="/assets/color2.jpg"
                alt=""
                className="w-12 h-2 mr-2"
              />
            </button>
            <button className="">
              <img src="/assets/color3.jpg" alt="" className="w-12 h-2" />
            </button>
          </div>
          {/* description */}
          <div>
            <h1>Luxe Summer Blazer</h1>
            <p>Pollheim</p>
            <p>from $1069.00</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Perfect;
