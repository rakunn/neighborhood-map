import React from 'react';
import { Popup } from 'react-mapbox-gl';

const MyPopup = ({ currentLocation }) => {
  const { lng, lat } = currentLocation.location;
  return (
    <Popup
      coordinates={[lng, lat]}
      offset={{'bottom': [0, -38]}}>
      <h1>Popup</h1>
    </Popup>
  );
};

export default MyPopup;
