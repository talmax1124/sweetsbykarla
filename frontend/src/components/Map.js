/* eslint-disable no-undef */
import React from "react";
import { Map } from "pigeon-maps";

const MapComponent = () => {
  return (
    <>
      <Map
        provider={osm}
        height={200}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      />
    </>
  );
};

export default MapComponent;
