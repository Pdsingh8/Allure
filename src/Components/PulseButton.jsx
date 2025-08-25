import { useState } from "react";

export default function PulseButton({ onClick, className = "" }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full font-bold transition-all duration-200
        ${active ? "pulse-active scale-90" : "bg-white text-black animate-pulse-glow border-0 scale-100"}
        ${className}`}
    >
      •
    </button>
  );
}
