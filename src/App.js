import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Beach from "./components/Beaches";
import Birds from "./components/Birds";
import Food from "./components/Food";
import Mountaines from "./components/Mountaines";


function App() {
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/beaches" element={<Beach/>} />
        <Route path="/mountains" element={<Mountaines/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/birds" element={<Birds/>} />

      </Routes>
    </Router>
      );
}

export default App;
