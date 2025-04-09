import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Home";
import NavBar from "./NavBar";
import LightTracker from "./LightTracker";
import Counter from "./Counter";
import ExpensiveCalculations from "./ExpensiveCalculations";
import FavoriteColor from "./FavoriteColor";
import Footer from "./Footer";



function App() {

  return(

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/light-tracker" element={<LightTracker />} />
        <Route path="/expensive-calculations" element={<ExpensiveCalculations number={5} />} />
        <Route path="/favorite-color" element={<FavoriteColor />} />
      </Routes>
      <Footer />
    </>

  );

}

export default App;