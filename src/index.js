import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import EventsSlide from './components/eventsslide';
import Campusambassador from './components/campusambassador';
import Busroute from './components/busroute';
import Description from './components/Description';
import Details from './components/Details';
import Descriptionfooter from './components/Descriptionfooter';
import Mindtwisterdetails from './contents/mindtwisterdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={
        <>
        <Navbar />
        <Home />
        <EventsSlide />
        <Campusambassador />
        <Busroute />
        <Footer />
        </>
      } />

    </Routes>
    <Routes >
      <Route path="/events" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails}/>
          <Details />
          <Descriptionfooter />
        </>
      } />

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);
