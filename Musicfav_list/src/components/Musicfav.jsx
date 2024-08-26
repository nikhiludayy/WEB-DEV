import React from 'react'

export default function Musicfav({values,index,handlefavClick}) {
    const {name,img,artist,added}=values;
    
  return (
    <div className='bg-zinc-100 w-60 p-4 rounded-md mt-10 flex gap-4 pb-10 relative'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className=''>
            <h1 className='text-xl leading-none font-bold'>{name}</h1>
            <h3 className='text-sm'>{artist}</h3>
        </div>
        <button onClick={()=>{handlefavClick(index)}} className={` ${added? "bg-blue-600 px-4 py-2":"bg-orange-600 px-4 py-3"} absolute text-xs bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white whitespace-nowrap rounded-full transition-all `}>{added? "ADDED":"Add to Favourites"}</button>
    </div>
  )
}
