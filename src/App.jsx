import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
// import SectionBar from "./Components/SectionBar";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import Contact from "./Components/Pages/Contact";
import Image from "./Components/Pages/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/image" element={<Image />}></Route>
      </Routes>
      {/* <SectionBar /> */}
    </div>
  );
}

export default App;
