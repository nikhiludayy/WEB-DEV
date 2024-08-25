import React, { useState } from "react";
import Card from "./components/card";
import Card1 from "./components/card1";
function App() {
  const raw = [
    {
      name: "John",
      profession: "Painter",
      img: "https://plus.unsplash.com/premium_photo-1675804300600-888042d9e90d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
      friend: false,
    },
    {
      name: "Amit",
      profession: "Artist",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
      friend: false,
    },
    {
      name: "Rahul",
      profession: "Thalaaa",
      img: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
      friend: false,
    },
    {
      name: "Sumit",
      profession: "Coder",
      img: "https://images.unsplash.com/photo-1721356043080-88c72fa368da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      friend: false,
    },
  ];

  // usestate usecase
  const [realData,setrealData]=useState(raw);
  const handleFriends=(cindex)=>{
    
    setrealData((prev)=>{
     return  prev.map((item,index)=>{
        if(index===cindex){
          return {...item,friend:!item.friend};
        }
        return item;
      })
    })
  }


  return (
    <div className="w-screen h-screen bg-yellow-100 flex gap-2 items-center justify-center">
    {/*  usecaseof prop */}
      {/* {raw.map((item,index)=>(
        <Card1 key={item.id} name={item.name} profession={item.profession} img={item.img}/>
      ))} */}
      {/* OR */}
      
      {realData.map((item,index)=>(
        <Card1 key={index} index={index} handleClick={handleFriends} values={item}/>
      ))}
    </div>
  );
}

export default App;
