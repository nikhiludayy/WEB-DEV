import React from "react";
import Button from "../Components/Button"
const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-6 items-center justify-between flex border-b-[1px] border-zinc-700">
      <div className="nleft items-center  flex">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
        />
        <div className="links flex gap-14  ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-0.5 h-6 bg-zinc-500"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 .45em #00FF19" }}
                    className="inline-block bg-green-500 w-1 h-1 rounded-full "
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button title={"Get Started"} />
    </div>
  );
};

export default Navbar;
