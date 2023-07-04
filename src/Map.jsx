import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import RecenterAutomatically from "./RecenterAutomatically";
import { renderToStaticMarkup } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import { divIcon } from "leaflet";

const Map = ({ position }) => {
    const iconMarkup = renderToStaticMarkup(<FaMapMarkerAlt size={50} />);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });
    return (
        <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RecenterAutomatically position={position} />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>You're here now.</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
