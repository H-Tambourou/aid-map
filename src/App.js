import React, { useState } from "react";
import CustomMap from "./component/CustomMap";
import Info from "./component/Info";

import "./assets/styles.css";
import "./assets/responsive.css"


function App() {
  const [location, setLocation] = useState([
    {
        "title": "ex 1",
        "latitude": 29.72950496131556,
        "longitude": -95.24091984214154
      },
      {
        "title": "ex 2",
        "latitude": 29.662824995069542,
        "longitude": -95.23262479700527
      },
      {
        "title": "ex3",
        "latitude": 29.619859673341484,
        "longitude": -95.375396,
      }
  ]);

  function currentLocation(e){
    e.preventDefault();
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(coords => {
        setLocation(prevLoc =>[...prevLoc, coords.coords ]);
      })
    };
  };

  
  return (
    <div className="App" style={{backgroundColor:"#282c34", width:"100%", height:"100%", position:"relative"}}>
       <div className="infoCol" style={{with:"30%", height:"100%", float:"left", position:"relative"}}>
        <Info currentLocation={currentLocation} setLocation={setLocation}/>
      </div>
      <div className="mapCol" style={{width:"70%", height:"100%", float:"left", position:"relative"}}>
        <CustomMap location={location} />
      </div>

    </div>
  );
}

export default App;
