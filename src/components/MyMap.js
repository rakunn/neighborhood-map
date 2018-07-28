import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg'
});

class MyMap extends Component {
  render() {
    return (
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/rakunn/cjh0b1hd6001b2rlewn3g43lo"
        containerStyle={{ width: '100vw', height: '100vh'}}
      />
    );
  }
}

export default MyMap;