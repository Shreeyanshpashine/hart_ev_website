/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Features from './components/Features';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutUs />
      <Features />
    </div>
  );
};

export default App;
