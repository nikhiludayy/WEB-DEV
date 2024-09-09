import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para, button, bg }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`${width} ${isHovered ? "text-black" : "text-white"} ${
        isHovered ? "bg-white" : bg
      } rounded-xl p-5 flex gap-36 flex-col justify-between transition-all ease-in-out`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>head one</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">head two.</h1>
      </div>
      <div className="w-full">
        {start && (
          <h1 className="text-8xl font-semibold mb-5 tracking-tight leading-none">
            Start a Project
          </h1>
        )}
        {button && (
          <button
            className={`py-2 px-7 border-[1px] ${
              isHovered ? "border-black" : "border-zinc-200"
            }
            rounded-full`}
          >
            Contact
          </button>
        )}
        {para && (
          <p className="text-sm  text-zinc-300 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
