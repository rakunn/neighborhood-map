import React from 'react';
import { Popup } from 'react-mapbox-gl';

const MyPopup = ({ currentLocation }) => {
  const { lng, lat } = currentLocation.location;
  return (
    <Popup
      coordinates={[lng, lat]}
      offset={{'bottom': [0, -38]}}>
      <h1>Popup</h1>
      <img src={`https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${lat},${lng}&fov=90&heading=235&pitch=10&key=AIzaSyDicFQoRWREO_gX1sTklPjE8Kjhni7qmQU`} />
    </Popup>
  );
};

export default MyPopup;
