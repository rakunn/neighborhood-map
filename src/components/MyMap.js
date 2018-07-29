import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import MyMarker from './MyMarker';
import MyPopup from './MyPopup';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg',
});

class MyMap extends Component {
  render() {
    const { currentLocation } = this.props.data;
    const { venues } = this.props.data.locations.response;

    return (
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/rakunn/cjh0b1hd6001b2rlewn3g43lo"
        containerStyle={{ width: '100vw', height: '100vh'}}
        center={[21.013223575241867, 52.2300446133068]}
      >
        { venues.map(venue => <MyMarker venue={venue} /> )}
        { currentLocation.id && <MyPopup currentLocation={currentLocation} />}
      </Map>
    );
  }
}

export default MyMap;