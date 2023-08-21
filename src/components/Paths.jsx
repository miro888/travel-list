import React, { useState, useEffect } from "react";
import L from "leaflet";
import TextField from "@mui/material/TextField";
import "./scss/Paths.scss";
import { Stack } from "@mui/material";
import ruka from "./ruka.json";

const Paths = () => {
  const [city, setCity] = useState("");

  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map("map").setView([41.6782, 42.297], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const customIcon = new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      shadowSize: [41, 41],
    });

    const selectedCity = ruka.find((item) => item.cityName === city);

    if (selectedCity) {
      const trueMarker = L.marker(selectedCity.markerCoordinates, {
        icon: customIcon,
        className: "my-custom-icon",
      });
      trueMarker
        .addTo(map)
        .bindPopup(`This is ${selectedCity.cityName}!`)
        .openPopup();

      L.polyline(selectedCity.polylineCoordinates, { color: "blue" }).addTo(
        map
      );
    }

    return () => {
      map.remove();
    };
  }, [city]);

  return (
    <div>
      <div id="map"></div>

      <Stack direction="row" spacing={2} className="ruka">
        <TextField label="Current Location" variant="outlined" />
        <TextField
          label="Destination"
          variant="outlined"
          onSelect={(e) => setCity(e.target.value)}
        />
      </Stack>
    </div>
  );
};

export default Paths;
