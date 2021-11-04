import React, { useRef } from 'react';
import {Button, Link, Typography} from '@mui/material';

export default function Info({ setLocation }) {

const latitudeRef = useRef();
const longitudeRef = useRef();

function handleSubmit(e){
    e.preventDefault();
    const content1 = latitudeRef.current.value;
    const content2 = longitudeRef.current.value;
    const obj = {
        latitude: content1,
        longitude: content2
    }
    setLocation(prevL =>[...prevL, obj]);
        latitudeRef.current.value =null;
        longitudeRef.current.value  =null;
}

function currentLocation(e){
    e.preventDefault();
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(loc => {
        const obj1 = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude
        }
        setLocation(prevLoc =>[...prevLoc, obj1 ]);
      })
    };
  };



    return (
        <div className="infoWrapper" style={{height:"100%", width:"100%"}}>
            <div>
            <h1>Tracking world hunger</h1>
            <p>This map uses the Google Map Api, to track where aid is needed. Could be used by organizations like the WFP (World Food Programme) in their mission of delivering aid in places that are in need. </p>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2>Are you in need of Humanitarian aid?</h2>
            <Button size="small" variant="outlined" onClick={currentLocation}>Current Location</Button>
             <Typography variant="span">or</Typography>
             <form className="form" onSubmit={handleSubmit}>
                 <input type="text" style={{margin:"5px", }} ref={latitudeRef} placeholder="Latitude" required/>
                 <input type="text" ref={longitudeRef} placeholder="Longitude" required/>
                 <input className="submitButton" type="submit" value="submit" style={{margin:"5px", borderRadius:"4px", color:"#1976d2", border:"1px solid rgba(25, 118, 210, 0.5)", padding:"3px", backgroundColor:"transparent", cursor:"pointer"}}/>
             </form>
             </div>
             <Typography variant="span">This map is an ongoing project.<br/><Link href="https://github.com/H-Tambourou/Aid-Map.git">View the source code here</Link></Typography>

             
        </div>
    )
}
