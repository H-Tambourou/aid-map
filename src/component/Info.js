import React, { useRef } from 'react';

export default function Info({currentLocation, setLocation}) {

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


    return (
        <div>
            <h2>Tracking world hunger</h2>
            <p>This map uses the Google Map Api, to track where aid is needed. Could be used by organizations like the WFP (World Food Programme) in their mission of delivering aid in places that are in need. </p>
            <h3>Are you in neeed of Humanitarian aid?</h3>
            <button onClick={currentLocation}>Current Location</button>
             <hr/>
             <form onSubmit={handleSubmit}>
                 <input type="text" ref={latitudeRef} placeholder="Latitude" required/>
                 <input type="text" ref={longitudeRef} placeholder="Longitude" required/>
                 <input type="submit" value="submit"/>
             </form>
             <span>This map is an ongoing project.<br/>View the source code here</span>

             
        </div>
    )
}
