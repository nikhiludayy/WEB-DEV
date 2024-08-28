import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";

export const Userdetails = () => {
  const { id } = useParams();
  const Navigate=useNavigate();
  const { users } = useContext(UserContext);

  return (
    <div className="mt-10  ">
      <h1 className="mt-2 text-center text-4xl text-orange-600 font-semibold">Userdetails</h1>
      <div key={id} className="mt-10 flex flex-col ">
        <h1 className="text-md font-semibold text-red-300">
          ID: {users[id].id}
        </h1>
        <h1 className="text-3xl font-semibold text-red-500">
        {users[id].usernames.toUpperCase()}
        </h1>
        <h1 className="text-sm font-semibold text-red-300">
          {users[id].city.toUpperCase()}
        </h1>
      </div>
      <button onClick={()=>Navigate(-1)} className="px-3 py-2 bg-red-300 rounded-md mt-5 text-red-600 font-semibold">GO BACK</button>
    </div>
  );
};
