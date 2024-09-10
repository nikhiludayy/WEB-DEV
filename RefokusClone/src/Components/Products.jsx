import { motion } from "framer-motion";
import React, { useState } from "react";
import Product from "./Product";
const Products = () => {
  let products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bg: "#5355ee",
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      bg: "#4a576b",
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      bg: "#1626f3",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      bg: "#46289a",
    },
  ];

  let [pos, setpos] = useState({
    poss: 0,
    index: 0,
    opca: false,
    bg: "transparent",
  });
  let mover = (val, opcaa, bgg) => {
    setpos((prev) => {
      return {
        ...prev,
        index: val,
        poss: val * 17,
        opca: opcaa,
        bg: bgg,
      };
    });
  };

  return (
    <div className="relative w-full mt-20">
      {products.map((elem, index) => {
        return (
          <Product
            key={index}
            mover={mover}
            pos={pos}
            index={index}
            val={elem}
          />
        );
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos.poss, x: "-50%" }}
          animate={{ y: pos.poss + `rem`, x: "-50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
          className={`window absolute  w-[22rem] h-[17rem] left-[34%] ${
            pos.opca ? "opacity-100" : "opacity-0"
          } overflow-hidden transition-opacity duration-[.4s] `}
        >
          {products.map((elem, i) => (
            <motion.div
              key={i}
              animate={{ y: -pos.poss + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full "
            >
              <video
                className="rounded-lg"
                src={`https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/${elem.title
                  .toLowerCase()
                  .replace(/\s/g, "")}-43.webm`}
                autoPlay
                muted
                loop
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
