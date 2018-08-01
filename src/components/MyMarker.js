import React from 'react';
import MarkerIcon from './markers/MarkerIcon';
import { Marker } from 'react-mapbox-gl';

import store from "../store";
import changeCurrentLocation from "../actions/changeCurrentLocation";
import changeMapFocus from '../actions/changeMapFocus';
import { isCurrentLocation } from '../helpers';

const MyMarker = ({ venue }) => {
  const currentLocation = store.getState().currentLocation;

  const handleClick = (venue) => {
    const { lng, lat } = venue.location;
    store.dispatch(changeCurrentLocation(venue));
    store.dispatch(changeMapFocus([lng, lat]));
  };

  return(
    <Marker
      anchor="bottom"
      coordinates={[venue.location.lng, venue.location.lat]}
      onClick={() => handleClick(venue)}
      key={venue.id}>
      <MarkerIcon style={{fill: isCurrentLocation(venue, currentLocation ) ? '#008394' : '#33c9dc'}}/>
    </Marker>
  )
};

export default MyMarker;