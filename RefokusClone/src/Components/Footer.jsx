import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl px-5 mx-auto flex">
        <div className="basis-1/2  ">
          <h1 className="text-[12vw] font-medium tracking-tight ">refokus.</h1>
        </div>
        <div className="basis-1/2  flex justify-end gap-10 p-10 text-zinc-300  text-sm ">
          <div className="basis-1/6 ">
            <h4>Socials</h4>
            <div className="mt-8" >{["Instagram","Twitter(X)","LinkedIn"].map((elem,index)=>{
                return <a className="block mt-2" href="" key={index}>{elem}</a>

            })}</div>
          </div>
          <div className="basis-1/6 ">
            <h4>Sitemap</h4>
            <div className="mt-8">{["Home","Work","Careers","Contact"].map((elem,index)=>{
                return <a className="block mt-2" href="" key={index}>{elem}</a>

            })}</div>
          </div>
          <div className="basis-1/2 flex flex-col items-end justify-center gap-4">
          <p className="text-right text-base text-white">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
              className="w-32 mt-5"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex p-5 gap-5">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a
              href="#"
              key={index}
              className="text-zinc-600 font-normal text-sm"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
