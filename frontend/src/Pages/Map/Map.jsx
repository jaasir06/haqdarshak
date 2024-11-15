import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Button from "../../components/button/Button";
import 'dot-env'

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 26.1445,
    lng: 91.7362, 
  });

  const containerStyle = {
    width: "100%",
    height: "75vh",
  };

  const center = {
    lat: 26.1445,
    lng: 91.7362,
  };

  const mapOptions = {
    disableDefaultUI: true, 
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarkerPosition({ lat, lng });
    console.log("Selected Location:", { lat, lng });
  };

  const onNext = () => {
    navigate('/phone')
  }

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={mapOptions}
          onClick={handleMapClick} 
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>

     
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          padding: "20px",
          borderRadius: "20px 20px 0 0",
          textAlign: "center",
          boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ color: "#6B7280", marginBottom: "5px" }}>Selected Location:</p>
        <h3 style={{ margin: "5px 0" }}>Lat: {markerPosition.lat.toFixed(6)}</h3>
        <h3 style={{ margin: "5px 0" }}>Lng: {markerPosition.lng.toFixed(6)}</h3>
        <button
          style={{
            marginTop: "15px",
            backgroundColor: "#4F285E",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            width: "100px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => alert(`Location Selected:\nLat: ${markerPosition.lat}\nLng: ${markerPosition.lng}`)}
          >Proceed</button>
      </div>
          <Button onClick={onNext}/>
    </div>
  );
};

export default Map;