import React, { useEffect, useState } from "react";
import CustomMap from "./component/CustomMap";
import Info from "./component/Info";

import "./assets/styles.css";
import "./assets/responsive.css"

const LOCALE_STORAGE_KEY = 'map.locations';

function App() {
  const [location, setLocation] = useState([
    {
        "title": "ex 1",
        "latitude": 3.938240,
        "longitude": 45.489511
      },
      {
        "title": "ex 2",
        "latitude": 1.130530,
        "longitude": 42.310954
      },
      {
        "title": "ex3",
        "latitude": 5.047171,
        "longitude": 47.411471,
      }
  ]);

  useEffect(() =>{
    const storedLocations= JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    if (storedLocations) setLocation(storedLocations)
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(location));
  }, [location]);
  
  return (
    <div className="App">
       <div className="infoCol">
        <Info setLocation={setLocation}/>
      </div>
      <div className="mapCol" >
        <CustomMap location={location} />
      </div>

    </div>
  );
}

export default App;
