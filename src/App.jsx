import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import SigIn from "./Layout/SignIn/SingIn";
import LogIn from "./Layout/LogIn/LogIn";
import Navbar from "./Layout/NavBar/NavBar";
import Home from "./Layout/Home/Home";

function App() {

  const userisAuth = localStorage.getItem("Token")
  return (
    <>
      {userisAuth === null ? (
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/SigIn" element={<SigIn />} />
        </Routes>
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
