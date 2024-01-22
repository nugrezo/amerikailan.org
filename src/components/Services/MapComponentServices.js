import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponentServices = ({ country, state, city, zip }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 37,
    lng: -122,
  });

  useEffect(() => {
    // Fetch coordinates based on the selected address
    const getCoordinates = async () => {
      try {
        const coordinates = await fetchCoordinates(country, state, city, zip);
        setSelectedLocation(coordinates);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    getCoordinates();
  }, [country, state, city, zip]);

  const fetchCoordinates = async (country, state, city, zip) => {
    const apiKey = "";
    const address = `${zip}, ${city}, ${state}, ${country}`;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`
    );

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  };

  const mapStyles = {
    height: "432px",
    width: "100%",
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAeptmzMg-hsMzKn-MAhSo5LDeiS3DwTzM"
      onLoad={() => console.log("Google Maps script loaded successfully")}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={selectedLocation}
        zoom={10}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponentServices;
