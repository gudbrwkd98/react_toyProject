import React, { useState } from 'react'
import { BrowserRouter as   Router , Route, Routes, Outlet } from "react-router-dom";
import Mainpage from './pages/MainPage';
import GrapePage from './pages/GrapePage';

function App(props) {



  return (
   <Router>
    <Routes>
      <Route path='/' element={<Mainpage tasks={props} />} />
      <Route path="/graph" element={<GrapePage />}/>
    </Routes>
   </Router>
  );
}


export default App;
