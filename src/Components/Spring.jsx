import "./Spring.css"
import { MdOutlineHorizontalRule } from "react-icons/md";
import { GoHorizontalRule } from "react-icons/go";

function Spring() {
  return (
    <div className='relative'>
        <div className='object-top'>
            <img src="/assets/spring.jpg" alt="" className='blur-sm shadow-lg w-[500px] object-cover object-top md:w-full h-100 md:h-170'/>
        </div>
        
        <div className='absolute flex inset-0 items-center justify-center z-10'>
            <img src="/assets/spring.jpg" alt="" className='w-50 md:w-80 h-60 md:h-120 object-contain'/>
        </div>
        <div className="absolute w-full h-20 bg-transparent text-white overflow-hidden whitespace-nowrap paused text-bold z-20 bottom-35 md:bottom-80">
            <div className="scrolling-text inline-block text-xl md:text-5xl"> 
                <span className="mx-8 align-middle cursor-pointer">New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer">New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer">New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer"> New Spring <span className="italic ">Collections</span></span>
                <span className="mx-8 align-middle cursor-pointer">New Spring <span className="italic ">Collections</span></span>
            </div>
        </div>
    </div>
  )
}

export default Spring;