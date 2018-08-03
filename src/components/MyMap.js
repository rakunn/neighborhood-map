import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import store from "../store";
import { filterLocations } from '../helpers';
import resetCurrentLocation from "../actions/resetCurrentLocation";

import MyMarker from './MyMarker';
import MyErrPopup from './MyErrPopup';
import MyPopup from './MyPopup';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg',
});

class MyMap extends Component {
  render() {
    const { currentLocation, filter, currentFocus } = this.props.data;
    const { venues } = this.props.data.locations.response;
    const filteredVenues = filterLocations(venues, filter);

    return (
      currentFocus && (
        <Map
          // eslint-disable-next-line
          style="mapbox://styles/rakunn/cjkdo0buecf772rs5zebi8hon"
          containerStyle={{ width: '90vw', height: '90vh' }}
          center={currentFocus}
          zoom={[13]}
          onClick={() => store.dispatch(resetCurrentLocation())}
        >
        { filteredVenues.map(venue => <MyMarker key={venue.id} venue={venue} /> )}
        { currentLocation.id && <MyPopup currentLocation={currentLocation} />}
        { filteredVenues.length === 0 && <MyErrPopup /> }
      </Map>
      )
    );
  }
}

export default MyMap;