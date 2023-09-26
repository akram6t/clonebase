import React, { useEffect, useState } from "react";
import './App.scss';
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Link, Routes, useLocation }
  from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Database from "./pages/firestore/Database";
import CRUD from "./pages/firestore/crud/CRUD";
import Usage from "./pages/firestore/usage/Usage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

const App = () => {

  return (
    <>
    <div className="app">
      {/* <Sidebar /> */} 
      <div className="main">
        {/* <!-- Example single danger button --> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/database/:project" element={<Database />}>
            <Route path="" element={<CRUD />} />
            <Route path="usage" element={<Usage />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App;