import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ val, direction }) => {
  return (
    <div className="w-full flex gap-5 overflow-hidden">
      
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >{val.map((elem, index) => {
        return (
          <img
            key={index}
            className="flex-shrink-0 w-[7vw]"
            src={elem}
            alt=""
          />
        );
      })}</motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
      {val.map((elem, index) => {
        return (
          <img
            key={index}
            className="flex-shrink-0 w-[7vw]"
            src={elem}
            alt=""
          />
        );
      })}</motion.div>
    </div>
  );
};

export default Marquee;
