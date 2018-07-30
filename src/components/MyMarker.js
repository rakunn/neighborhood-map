import React from 'react';
import MarkerIcon from './markers/MarkerIcon';
import { Marker } from 'react-mapbox-gl';

import store from "../store";
import changeCurrentLocation from "../actions/changeCurrentLocation";
import { isCurrentLocation } from '../helpers';

const MyMarker = ({ venue }) => {
  const currentLocation = store.getState().currentLocation;
  return(
    <Marker
      anchor="bottom"
      coordinates={[venue.location.lng, venue.location.lat]}
      onClick={() => store.dispatch(changeCurrentLocation(venue))}
      key={venue.id}>
      <MarkerIcon style={{fill: isCurrentLocation(venue, currentLocation ) ? 'red' : 'orange'}}/>
    </Marker>
  )
};

export default MyMarker;