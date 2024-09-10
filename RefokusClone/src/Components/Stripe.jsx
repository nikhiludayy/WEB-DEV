import React from "react";

const Stripe = ({val ,index}) => {
    let {url,number}=val;
  return (
    <div className={`w-[16.66%]  px-4 py-5  ${(index===5)? null:"border-r-[1px]"}  flex items-center justify-between`}>
      <span className="w-[85%] "><img src={url} alt="" /></span>
      <span className="w-[12%] text-center  font-semibold">{number}</span>
    </div>
  );
};

export default Stripe;
