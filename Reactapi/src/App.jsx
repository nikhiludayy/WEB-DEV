import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Show } from "./components/Show";
import { Services } from "./components/Services.jsx";

function App() {
  return (
    <>
      <div className="pt-[5%] pl-[5%] ">
        <nav className="flex justify-center gap-4 border-black border-b">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/show">Show</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
