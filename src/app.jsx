import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Player from "./components/player"
import Button from "./components/button"
//document.addEventListener
export default function App() {



 
  return (  

  <div className="zone-container">

   <Player skin="m2"/>
   <Button />
  

    
  </div>
  );
}
