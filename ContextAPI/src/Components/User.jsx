import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/context";
export const User = () => {
  const { users, setUsers } = useContext(UserContext);
  return (
    <>
      <h1 className="mt-5  text-center text-4xl text-orange-600 font-semibold">Userlist</h1>
      <div className="mt-10   p-1 flex flex-col ">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.usernames}`} className="w-fit rounded-md font-semibold text-center uppercase bg-blue-100 mb-3 px-5 py-3">
            {u.usernames}
          </Link>
        ))}
      </div>
    </>
  );
};
