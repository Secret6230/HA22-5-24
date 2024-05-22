import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Listing from './Listing.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div style={{color: "red"}}/>

  <Listing Name={prompt("Gebe die Marke ein :")} Preis={prompt("Gebe den Preis an : ")}/>
  <Listing Name={"Marken"} Preis={"50000"}/>

  {/* Hab mit prompt() und ohne gemacht um den Unterschied für mich zu erkennen */}



  </>


);