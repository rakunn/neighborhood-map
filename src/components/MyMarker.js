import React from 'react';
import MarkerIcon from './markers/MarkerIcon';
import { Marker } from 'react-mapbox-gl';

import changeCurrentLocation from "../actions/changeCurrentLocation";
import store from "../store";

const MyMarker = ({ venue }) => {
  return(
    <Marker
      anchor="bottom"
      coordinates={[venue.location.lng, venue.location.lat]}
      onClick={() => {store.dispatch(changeCurrentLocation(venue))}}
      key={venue.id}>
      <MarkerIcon style={{fill: 'orange'}}/>
    </Marker>
  )
};

export default MyMarker;