import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="sm:p-[4rem] p-[1rem] sm:-mt-[0rem] mt-[2rem] h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
