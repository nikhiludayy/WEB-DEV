import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
