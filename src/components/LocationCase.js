import React, { useContext  } from 'react';
import { useGeolocated } from "react-geolocated";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AppContext } from '../context/AppContext';
import Map, {NavigationControl , Marker , FullscreenControl } from 'react-map-gl';

const LocationCase = ( { handleSliding } ) => {

  const {reportCase} = useContext(AppContext);
  const [caseItem , setCaseItem ] = reportCase;
  

  const {   isGeolocationAvailable , isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
   
 

  const {coordsLocation} = useContext(AppContext);

  const [coordsValue  ] = coordsLocation;


  const pushIntoCase = (  ) => {


    let tempObject = {
      
  }

    setCaseItem(oldArray => [...oldArray, tempObject]);
   
  }

  const setNext = () => {
    pushIntoCase();
    handleSliding(+1);

  }


   


 


  return (
    <>
  
    <div className="main_case_info mt-5">
  
  <h1 className="section_headline_sm">     موقع الحالة </h1>
  
  <div className="mt-3"></div>
  {/* <div className="action_div ">
  
  <label htmlFor="name" className="label_form">   انقر على العلامة للوصول للموقع  </label>
  
  <img src="/images/imgs/location.png" alt="" className="location_image" />
  
  </div> */}
  
  <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 42.5579758,
          latitude: 16.894719,
          zoom: 6.9
        }}
        
        style={{width: "100%", height: " calc(100vh )"}}
        mapStyle="https://api.maptiler.com/maps/bright-v2/?key=zcK1SXnMzuUNV1RcYU2I#-0.2/-4.11504/-17.86487"
      >
     <FullscreenControl />
  
  
    
  
  
  
        <NavigationControl position="top-left" />
      </Map>
  
  
  <button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>
  
  
  
  </div>
  
    </>
  );
 



  
}

export default LocationCase