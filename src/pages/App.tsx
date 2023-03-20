import { Box, Container } from '@mui/system';
import '../styles/App.css';
import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import {
  Routes,
  Route,
  Router,
  BrowserRouter 
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Box className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Navbar />} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </Box>
    </BrowserRouter>
  );
}

export default App;