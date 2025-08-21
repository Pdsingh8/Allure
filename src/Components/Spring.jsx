import "./Spring.css"
import { MdOutlineHorizontalRule } from "react-icons/md";

function Spring() {
  return (
    <div className='relative'>
        <div className=''>
            <img src="/assets/spring.jpg" alt="" className='blur-sm w-full h-150'/>
        </div>
        
        <div className='absolute flex inset-0 items-center justify-center z-10'>
            <img src="/assets/spring.jpg" alt="" className=' w-80 h-120 object-contain'/>
        </div>
        <div className="absolute w-full h-20 bg-transparent text-white overflow-hidden whitespace-nowrap paused text-bold z-20 bottom-60">
            <div className="scrolling-text inline-block text-5xl">
                <span className="mx-8 align-middle cursor-pointer">--New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">--New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
                <span className="mx-8 align-middle cursor-pointer">-- New Spring Collections--</span>
            </div>
        </div>
    </div>
  )
}

export default Spring;