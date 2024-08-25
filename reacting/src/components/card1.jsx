import React from 'react'

export default function card1({values,handleClick,index}) {
    let {name,img,profession,friend}=values;
  return (
    <div  className="w-52 bg-white rounded-xl overflow-hidden">
        <div className="w-full h-32 bg-red-100 ">
          <img className="w-full h-full  object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="w-full p-3 bg-white">
          <h1 className="font-semibold">{name}</h1>
          <h3 className="text-xs font-semibold">{profession}</h3>
          <button onClick={()=>(handleClick(index))} className={`px-3 py-1 mt-2 text-xs text-white font-bold rounded-md ${friend? "bg-blue-300":"bg-red-300"}`}>{friend?"FRIENDS":"ADD FRIEND"}</button>
        </div>
              </div>
  )
}
