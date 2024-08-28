import React, { createContext, useState } from "react";
export const UserContext = createContext();
const context = (props) => {
  const [users, setUsers] = useState([
    {id:21230,usernames:"john",city:"new York"},
    {id:14123,usernames:"doe",city:"Los Angeles"},
    {id:21241,usernames:"jane",city:"Chicago"},
    {id:31242,usernames:"mark",city:"San Francisco"},
    {id:41424,usernames:"bill",city:"Seattle"}
    
  ]);
  return <UserContext.Provider value={{users, setUsers}}>{props.children}</UserContext.Provider>;
};

export default context;
