//@ts-nocheck
import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapWithDemograhics = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="rounded-[10px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />{" "}
      {/* Corrected props for TileLayer */}
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithDemograhics;