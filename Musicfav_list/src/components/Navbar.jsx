import React from 'react'

export default function Navbar({data}) {
    const {added}=data;
  return (
    <div className='w-full h-14 px-10 bg-orange-100 flex items-center justify-between'>
        <h1 className='text-md font-bold text-orange-600'>Orange</h1>
        <div className='flex justify-center item-center bg-orange-300 px-2 py-1 rounded text-sm font-semibold text-orange-800 gap-3 transition-all'>
            <h3>Favourites</h3>
            <h4 className='bg-orange-400 px-2 rounded'>{data.filter(item=> item.added).length}</h4>
        </div>
        
    </div>
  )
}
