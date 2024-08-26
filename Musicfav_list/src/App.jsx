import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Musicfav from './components/Musicfav'
export default function App() {

  const raw=[
    {
      name:'Musicfav',img:"https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",artist:'Jai',added:false
    },
    {
      name:'Musi',img:"https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",artist:'Jaii',added:false
    },
    {
      name:'Music',img:"https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",artist:'Jaiii',added:false
    },
    {
      name:'Musicf',img:"https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",artist:'Jaiui',added:false
    },
    {
      name:'Musicfa',img:"https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",artist:'Jauiui',added:false
    }
  ]

  const[realData,setRealdata] = useState(raw)

  const handlefavClick= (index) =>{
    
    setRealdata(prev=>{
      return prev.map((item,i) => {
        if(i===index){
          return {...item,added:!item.added}
        }
        return item
      })
    })}


  return (
    <>
    <div className='w-screen h-screen bg-zinc-300 '>
    <Navbar data={realData}/>
    <div className='px-20 flex gap-10 mt-10 flex-wrap'>
    {realData.map((item,index)=>(
      <Musicfav key={index} index={index} handlefavClick={handlefavClick}values={item}/>
    ))}
    
    </div>
    
    </div>
    
    </>
  )
}
