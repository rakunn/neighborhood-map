import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import MyMarker from './MyMarker';
import MyPopup from './MyPopup';
import { calculateAverageCoordinates } from '../helpers';
const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg',
});

class MyMap extends Component {
  render() {
    const { currentLocation } = this.props.data;
    const { venues } = this.props.data.locations.response;
    const averageCoordinates = calculateAverageCoordinates(venues);
    return (
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/rakunn/cj64v83dy5qv22rpcgy1y7zgt"
        containerStyle={{ width: '100vw', height: '100vh', marginTop: '8px'}}
        center={averageCoordinates}>
        { venues.map(venue => <MyMarker key={venue.id} venue={venue} /> )}
        { currentLocation.id && <MyPopup currentLocation={currentLocation} />}
      </Map>
    );
  }
}

export default MyMap;