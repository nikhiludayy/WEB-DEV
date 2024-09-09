import React from "react";

const Marquee = ({ val }) => {
  return (
    <div className="w-full flex gap-5 overflow-hidden">
      {val.map((elem, index) => {
        return <img className="flex-shrink-0 w-[7vw]" src={elem} alt="" />;
      })}
      {val.map((elem, index) => {
        return <img className="flex-shrink-0 w-[7vw]" src={elem} alt="" />;
      })}
    </div>
  );
};

export default Marquee;
