import React, { useState } from 'react'
import { BrowserRouter as   Router , Route, Routes, Outlet } from "react-router-dom";
import Mainpage from './pages/MainPage';
import GrapePage from './pages/GrapePage';
import BarGrapePage from './pages/BarGrapePage'; 
import SimplePieChart from './pages/SimplePieChart';
import Header from './Header';

function App(props) {



  return (

   <Router>
       <Header/> 
    <Routes>
    
      <Route path='/' element={<Mainpage tasks={props} />} />
      <Route path="/graph" element={<GrapePage />}/>
      <Route path="/barGraph" element={<BarGrapePage/>}/>
      <Route path="/pieChart" element={<SimplePieChart/>}/>
    </Routes>
   </Router>
  );
}


export default App;
