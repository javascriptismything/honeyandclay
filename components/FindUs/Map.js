import { useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Tooltip,
} from "react-leaflet";
import styled from "styled-components";
import L from "leaflet";
const Cont = styled.div`
  width: 100%;
  height: 400px;
`;
const Map = () => {
  const mapRef = useRef(null);
  const [center, setCenter] = useState({
    lat: 45.3107637,
    lng: -76.0738949,
  });
  const ZOOM_LEVEL = 10;

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const myIcon = new L.Icon({
    iconUrl: "/icon.png",
    iconSize: [32, 32],
  });

  const point = L.point(0, -24);

  return (
    <Cont>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="leaflet-container"
      >
        {" "}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIcon} position={center}>
          <Tooltip offset={point} direction={"top"}>
            <p>159 Country Meadow Drive, Carp, Ontario</p>
          </Tooltip>
        </Marker>
        <ChangeView center={center} zoom={ZOOM_LEVEL} />
      </MapContainer>
    </Cont>
  );
};

export default Map;
