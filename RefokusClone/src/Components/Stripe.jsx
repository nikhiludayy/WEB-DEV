import React from "react";

const Stripe = ({val}) => {
    let {url,number}=val;
  return (
    <div className="w-[16.66%] mt-20 px-4 py-5 border-t-[1px]  border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
      <span className="w-[85%] "><img src={url} alt="" /></span>
      <span className="w-[12%] text-center  font-semibold">{number}</span>
    </div>
  );
};

export default Stripe;
