import React from 'react'
import Card from './card'
function cards({users,handleRemove}) {
  // console.log(users);
  
  return (
    <div className='w-full h-96 max-h-96 overflow-auto flex flex-wrap gap-5 items-center justify-center p-4'>
        
        {users.map((item,index)=>{
            return <Card handleRemove={handleRemove} user={item} key={index} id={index}/>
        })}
        
        {/* <Card handleRemove={handleRemove} user={users}/> */}
    </div>
  )
}

export default cards