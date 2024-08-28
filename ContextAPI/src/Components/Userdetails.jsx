import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";

export const Userdetails = () => {
  const { usernames } = useParams();
  const Navigate=useNavigate();
  const { users } = useContext(UserContext);
  console.log(users.filter(user => user.usernames===usernames))
  return (
    <div className="mt-10  ">
      <h1 className="mt-2 text-center text-4xl text-orange-600 font-semibold">Userdetails</h1>
      {/* {users.filter(user => user.usernames===usernames)} */}
      {users.filter(user => user.usernames===usernames).map((user,index )=>{
        return <div key={index} className="mt-10 flex flex-col ">
        <h1 className="text-md font-semibold text-red-300">
          ID: {user.id}
        </h1>
        <h1 className="text-3xl font-semibold text-red-500">
        {user.usernames.toUpperCase()}
        </h1>
        <h1 className="text-sm font-semibold text-red-300">
          {user.city.toUpperCase()}
        </h1>
      </div>
      })}
      
      <button onClick={()=>Navigate(-1)} className="px-3 py-2 bg-red-300 rounded-md mt-5 text-red-600 font-semibold">GO BACK</button>
    </div>
  );
};
