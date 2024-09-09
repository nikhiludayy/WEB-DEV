import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
const Button = ({title="Get Started"}) => {
  return (
    <div className='max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex gap-5 justify-between items-center'>
        <span className='text-sm font-medium '>{title}</span>
        <IoMdReturnRight className='text-sm' />
    </div>
  )
}

export default Button