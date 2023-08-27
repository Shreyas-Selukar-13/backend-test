import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeViewComponent from "./Home";
import WeekViewComponent from "./WeekView";

const App = () => {
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeViewComponent/>}/>
      <Route path="/week-view" element={<WeekViewComponent/>}/>
    </Routes>
    </>
  );
};

export default App;
