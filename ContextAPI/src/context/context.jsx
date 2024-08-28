import React, { createContext, useState } from "react";
export const UserContext = createContext();
const context = (props) => {
  const [users, setUsers] = useState([
    {id:0,usernames:"john",city:"new York"},
    {id:1,usernames:"doe",city:"Los Angeles"},
    {id:2,usernames:"jane",city:"Chicago"},
    {id:3,usernames:"mark",city:"San Francisco"},
    {id:4,usernames:"bill",city:"Seattle"}
    
  ]);
  return <UserContext.Provider value={{users, setUsers}}>{props.children}</UserContext.Provider>;
};

export default context;
