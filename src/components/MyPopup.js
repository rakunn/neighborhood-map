import React from 'react';
import { Popup } from 'react-mapbox-gl';
import Typography from '@material-ui/core/Typography';

const MyPopup = ({ currentLocation }) => {
  const { name, location, categories } = currentLocation;
  const { lng, lat, address  } = location;
  return (
    <Popup
      style={{maxWidth: 220}}
      coordinates={[lng, lat]}
      offset={{'bottom': [0, -38]}}
      closeButton={true}
      anchor="bottom"
    >
      <Typography variant="title" align="center">{ name }</Typography>
      <Typography variant="subheading" align="center">{ address }</Typography>
      <img
        alt={`${name} street view`}
        src={`https://maps.googleapis.com/maps/api/streetview?size=150x150&location=${lat},${lng}&fov=90&heading=235&pitch=10&key=AIzaSyDicFQoRWREO_gX1sTklPjE8Kjhni7qmQU`} />
      <Typography variant="button" align="center">{ categories[0].shortName }</Typography>
    </Popup>
  );
};

export default MyPopup;
