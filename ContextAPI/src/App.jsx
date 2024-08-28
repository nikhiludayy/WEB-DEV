import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { User } from "./Components/User";
import { About } from "./Components/About";
import { Userdetails } from "./Components/Userdetails";
const App = () => {
  return (
    <>
      <div className="p-10 container m-auto">
        <nav className="mt-5 flex justify-center p-3 rounded-full bg-red-100 gap-10 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<Userdetails />}></Route>

          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
