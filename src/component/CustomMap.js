import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import mapStyle from '../mapStyles';



class CustomMap extends Component {
    state ={
        showingInfoWindow:false,
        activeMarker: {},
        coords:{},
    }
    
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        });
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            coords: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
              showingInfoWindow: false,
              activeMarker: null
            })
          }
    };
    
    render() {
            
        return (
            <Map
                google={this.props.google} 
                style={this.mapStyle}
                containerStyle={{
                    position: "static",
                    width:"100%",
                    height:"100vh"
                }}
                initialCenter={{
                    //lat: 30.1260561,
                    //lng: -95.4606301
                    lat: 29.7161725,
                    lng: -95.3416357,
        
                }}
                zoom={10}
                onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                
            >
            {this.props.location.map((loc, index) => {
                //console.log(this.props.location)
                return(
                            <Marker
                            key={index}
                            position={{
                                lat: loc.latitude,
                                lng: loc.longitude
                            }}
                            onClick={this.onMarkerClick}
                            coord1={loc.latitude}
                            coord2={loc.longitude}
                            />
                            )
                        }   
                )}
                             <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                >
                                <div style={{color:"#1976d2", fontWeight:"400"}}>
                                    <span style={{display:"flex", textAlign:"center"}}>[{this.state.coords.coord1}, {this.state.coords.coord2}]</span>
                                </div>
                            </InfoWindow>
            </Map>
        )
    }
};


export default GoogleApiWrapper({
   apiKey: process.env.REACT_APP_API_KEY
    //apiKey: ""
})(CustomMap);