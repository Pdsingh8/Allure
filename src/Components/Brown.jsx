function Brown() {
  return (
    <div className="bg-yellow-950 w-full  md:h-[300vh] relative">
      <div className="sticky h-20 top-[41%] flex justify-center z-10 ">
        <p className="text-4xl text-white text-center max-w-2xl mt-2 mx-auto ">
          POLLHEIM - For Men and Women
        </p>
      </div>
      {/* image-div */}
      <div className="flex flex-col space-y-8 p-4">
        <div className=" w-full flex justify-end ">
          <img src="/assets/b1.jpg" alt="" className=" "/>
        </div>
        <div className="w-full flex justify-start">
          <img src="/assets/b2.jpg" alt="" className=" ml-4 " />
        </div>
        <div className="w-full">
          <img src="/assets/b3.jpg" alt="" className=" w-100 h-130 float-right" />
        </div>
        <div className="w-full flex justify-start">
          <img src="/assets/b4.jpg" alt="" className="w-100 h-130" />
        </div>
      </div>
    </div>
  );
}

export default Brown;
