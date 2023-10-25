import React, { useState } from 'react'
import { BrowserRouter as   Router , Route, Routes, Outlet } from "react-router-dom";
import Mainpage from './pages/MainPage';
import GrapePage from './pages/GrapePage';
import BarGrapePage from './pages/BarGrapePage';
import { PieChart } from '@amcharts/amcharts4/charts';

function App(props) {



  return (
   <Router>
    <Routes>
      <Route path='/' element={<Mainpage tasks={props} />} />
      <Route path="/graph" element={<GrapePage />}/>
      <Route path="/barGraph" element={<BarGrapePage/>}/>
      <Route path="/pieChart" element={<PieChart/>}/>
    </Routes>
   </Router>
  );
}


export default App;
