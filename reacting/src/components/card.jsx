import React from "react";

export default function card() {
  let cardn = [
    {
      title: "Amazon Basic",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/2257704/pexels-photo-2257704.jpeg?auto=compress&cs=tinysrgb&w=400",
      instock: true,
    },
    {
      title: "Amazon Prime",
      price: "$29.99",
      image:
        "https://images.pexels.com/photos/19643875/pexels-photo-19643875/free-photo-of-amazon-package-at-the-door.jpeg?auto=compress&cs=tinysrgb&w=400",
      instock: false,
    },
    {
      title: "Amazon Prime Video",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/18434074/pexels-photo-18434074/free-photo-of-amazon-delivery-van-parked-in-city.jpeg?auto=compress&cs=tinysrgb&w=400",
      instock: true,
    },
  ];

  
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center align-center">
        <div className="flex gap-3 justify-center align-center   bg-red-200">
          {cardn.map((elem, index) => (
            <div
              key={index}
              className="w-60 bg-zinc-100 shadow-2xl  rounded-md overflow-hidden"
            >
              <div className="w-full h-32 bg-zinc-300 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className="w-full px-3 py-4">
                <h1 className="font-semibold">{elem.title}</h1>
                <h2 className="text-xs mt-1">{elem.price}</h2>
                <p className="text-xs mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ipsa sit reiciendis.
                </p>
                <button onClick={()=>(elem.instock ? alert("Instock, HURREY") : alert("Out of Stock, better luck next time"))} className={`w-24 h-7 ${elem.instock ? "bg-blue-600":"bg-red-600"} mt-2 rounded text-ms text-white font-semibold`}>
                {elem.instock ? "InStock" : "OutStock"}
              </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
