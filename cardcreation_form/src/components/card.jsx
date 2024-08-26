import React from "react";

function card({ user, handleRemove, id }) {
  const { name, email, img } = user;
  return (
    <>
      <div className="w-52  bg-zinc-100 py-2 rounded-lg flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-100 overflow-hidden rounded-full">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl font-semibold">{name}</h1>
          <h1 className="text-sm opacity-50 font-semibold">{email}</h1>
          <p className="text-xs  leading-none mt-3 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatum ut quia.
          </p>
        </div>
        <button
          onClick={() => {handleRemove(id)}}
          className="px-2 py-1 bg-red-400 rounded-full text-white font-semibold text-xs mt-5"
        >
          Remove it
        </button>
      </div>
    </>
  );
}

export default card;
