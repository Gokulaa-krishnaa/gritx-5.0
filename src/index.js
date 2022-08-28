import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import EventsSlide from './components/eventsslide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
     <Home />
     <EventsSlide />
  </React.StrictMode>
);
