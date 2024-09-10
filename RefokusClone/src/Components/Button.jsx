import React from "react";
import { motion } from "framer-motion";
import { IoMdReturnRight } from "react-icons/io";
const Button = ({ title = "Get Started" }) => {
  return (
    <motion.div
      initial={{ scale: 1, backgroundColor: "#f4f4f5" }} // Default state
      whileHover={{
        scale: 1.05,
        backgroundColor: ["#f4f4f5", "#3B82F6", "#f4f4f5"], // Lighter on hover
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }} // Scale effect on hover
      whileTap={{ scale: 0.95, backgroundColor: "#1D4ED8" }} // Slight shrink on click
      className="max-w-40 px-4 py-2 bg-zinc-100 text-black overflow-hidden rounded-full flex gap-5 justify-between items-center"
    >
      <span className="text-sm font-medium cursor-none">{title}</span>
      <IoMdReturnRight className="text-sm" />
    </motion.div>
  );
};

export default Button;
