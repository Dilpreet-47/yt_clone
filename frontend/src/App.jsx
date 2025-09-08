// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Playvideo from "./components/playvideo/playvideo.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the main home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the video player page */}
        <Route path="/video" element={<Playvideo />} />
      </Routes>
    </Router>
  );
};

export default App;