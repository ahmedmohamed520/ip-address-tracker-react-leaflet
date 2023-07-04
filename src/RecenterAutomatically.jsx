import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterAutomatically = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position);
    }, position);
    return null;
};

export default RecenterAutomatically;
