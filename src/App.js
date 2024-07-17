import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <>
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
