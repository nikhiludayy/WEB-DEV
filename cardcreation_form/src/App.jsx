import React, { useState } from "react";
import Cards from "./components/cards";
import Forms from "./components/forms";
export default function App() {

  const [users,setUsers]=useState([]);
  const handlesubmitData=(data) => {
    setUsers([...users, data])
  }
  const handleRemove=(id) => {
    setUsers(()=>users.filter((item,index)=>index !== id))
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Cards handleRemove={handleRemove} users={users}/>
        <Forms handlesubmitData={handlesubmitData}/>
      </div>
    </div>
  );
}
