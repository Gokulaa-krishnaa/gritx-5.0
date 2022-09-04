import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import EventsSlide from './components/eventsslide';
import Campusambassador from './components/campusambassador';
import Squidgame from './components/Squidgame'
import Busroute from './components/busroute';
import Description from './components/Description';
import Details from './components/Details';
import Descriptionfooter from './components/Descriptionfooter';
import  Mindtwisterdetails  from "./contents/mindtwisterdetails";
import Hyperzestdetails from "./contents/hyperzest";
import Pixmedetails from "./contents/pixme"
import Dazeplaydetails from "./contents/dazeplay";
import Squidgamedetails from './contents/squidgame';
import Campusambassadordetails from './contents/campusambassador';
import Thewarriorsleaguedetails from './contents/thewarriorsleague';
import Funnyweaver from './contents/funnyweaver';
import mindtwisterslogo from "./assets/mindtwisterslogo.png";
import hyperzestlogo from "./assets/hyperzestlogo.png";
import funnyweaverlogo from "./assets/funnyweaverlogo.png";
import dazeplaylogo from "./assets/dazeplaylogo.png";
import campusambassadorlogo from "./assets/campusambassadorlogo.png";
import pixmelogo from "./assets/pixmelogo.png";
import thewarriorsleaguelogo from "./assets/warriorsleaguelogo.png";
import squidgamelogo from "./assets/squidgamelogo.png";
import hyperzestbrochure from "./assets/hyperzestbrochure.pdf";
import dazeplaybrochure from './assets/dazeplaybrochure.pdf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes >
      <Route path="/" element={
        <>
        <Navbar />
        <Home />
        <EventsSlide />
        <Squidgame />
        <Campusambassador />
        <Busroute />
        <Footer />
        </>
      } />
      

    </Routes>
    <Routes >
      <Route path="/mindtwisters" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={mindtwisterslogo} />
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails} />
        </>
      } />

    <Route path="/hyperzest" element={
        <>
          <Description Descriptioncontent={Hyperzestdetails.Hyperzestdetails} eventlogo={hyperzestlogo} brochure={hyperzestbrochure}/>
          <Details Descriptioncontent={Hyperzestdetails.Hyperzestsroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Hyperzestdetails.Hyperzestcontactdetails} />
        </>
      } />
      <Route path="/dazeplay" element={
        <>
          <Description Descriptioncontent={Dazeplaydetails.Dazeplaydetails} eventlogo={dazeplaylogo} brochure={dazeplaybrochure}/>
          <Details Descriptioncontent={Dazeplaydetails.Dazeplaysroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Dazeplaydetails.Dazeplaycontactdetails}/>
        </>
      } />
      <Route path="/pixme" element={
        <>
          <Description Descriptioncontent={Pixmedetails.Pixmedetails} eventlogo={pixmelogo}/>
          <Details Descriptioncontent={Pixmedetails.Pixmeroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Pixmedetails.Pixmecontactdetails} />
        </>
      } />
      <Route path="/squidgame" element={
        <>
          <Description Descriptioncontent={Squidgamedetails.Squidgamedetails} eventlogo={squidgamelogo}/>
          <Details Descriptioncontent={Squidgamedetails.Squidgameroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Squidgamedetails.Squidgamecontactdetails} />
        </>
      } />
      <Route path="/funnyweaver" element={
        <>
          <Description Descriptioncontent={Funnyweaver.Funnyweaverdetails} eventlogo={funnyweaverlogo}/>
          <Details Descriptioncontent={Funnyweaver.Funnyweaverroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Funnyweaver.Funnyweavercontactdetails} />
        </>
      } />
      <Route path="/thewarriorsleague" element={
        <>
          <Description Descriptioncontent={Thewarriorsleaguedetails.Thewarriorsleaguedetails} eventlogo={thewarriorsleaguelogo}/>
          <Details Descriptioncontent={Thewarriorsleaguedetails.Thewarriorsleagueroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Thewarriorsleaguedetails.Thewarriorsleaguecontactdetails}/>
        </>
      } />
      <Route path="/campusambassador" element={
        <>
          <Description Descriptioncontent={Campusambassadordetails.Campusambassadordetails} eventlogo={campusambassadorlogo}/>
          <Details Descriptioncontent={Campusambassadordetails.Campusambassadorroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Campusambassadordetails.Campusambassadorcontactdetails}/>
        </>
      } />


    </Routes>
    
    </HashRouter>
   
  </React.StrictMode>
);
