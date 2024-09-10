import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className='w-full '>
        <div className="max-w-screen-xl mx-auto px-5 py-20 flex gap-3">
            <Card width={"basis-1/3"} headone={'BLOG'} headtwo={'BLOG'} start={false} para={true} button={false} bg={"bg-[#46289a]"}/>
            <Card width={"basis-2/3"} headone={'GET IN TOUCH'} headtwo={'Let’s get to it.'}start={true} para={false} button={true} bg={"bg-[#7542ff]"}/>
        </div>
    </div>
  );
};

export default Cards;
