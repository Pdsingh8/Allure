import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`relative cursor-pointer 
         px-1 py-1 
        text-black text-[16px] group overflow-hidden ${className}`}
    >
      {/* text swap animation */}
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
      </div>

      {/* underline effect */}
      <span className="absolute bottom-0 left-0 font-light w-full h-[2px] bg-current scale-x-0 
        group-hover:scale-x-100 transition-transform duration-300 ease-out 
        origin-bottom-right group-hover:origin-bottom-left rounded"></span>
    </button>
  );
};

export default Button;
