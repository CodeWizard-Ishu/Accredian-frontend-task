import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ReferralFormModal from "./components/ReferralFormModal";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        {/* <HeroSection onReferNow={handleOpen} />
        <ReferralFormModal open={open} onClose={handleClose} /> */}
      </div>
      <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  );
};

export default App;
