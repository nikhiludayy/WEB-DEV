import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center'>
        <span className='text-sm font-medium '>Get Started</span>
        <IoMdReturnRight className='text-sm' />
    </div>
  )
}

export default Button