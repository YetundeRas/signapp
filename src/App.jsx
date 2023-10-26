import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/component/navbar/Navbar";
import "./App.css";
import Signup from "./assets/pages/signup/Signup";
import Login from "./assets/pages/login/Login";
import Reset from "./assets/pages/reset/Reset";
import Changepassword from "./assets/pages/changepassword/Changepassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/changepassword" element={<Changepassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
