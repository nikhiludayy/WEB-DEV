import React from "react";
import Button from "./Button";

const Product = ({ val, mover, index, opca, pos }) => {
  return (
    <div
      onMouseEnter={() => {
        mover(index, (opca = true), val.bg);
      }}
      onMouseLeave={() => {
        mover(index, (opca = false), "transparent");
      }}
      style={{ backgroundColor: pos.index === index ? pos.bg : "transparent" }}
      className={`w-full px-5 py-14 hover:py-[5rem] text-white border-b-[1px] border-zinc-600 } transition-all duration-[.6s]`}
    >
      <div className="max-w-screen-xl mx-auto h-[10rem]  flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/2 ">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
