import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerIcon from './markers/MarkerIcon';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg'
});

class MyMap extends Component {
  render() {
    return (
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/rakunn/cjh0b1hd6001b2rlewn3g43lo"
        containerStyle={{ width: '100vw', height: '100vh'}}>
        <Marker
          coordinates={[-0.2416815, 51.5285582]}
          anchor="bottom"
          onClick={() => {console.log('click')}}
        >
          <MarkerIcon style={{fill: 'orange'}}/>
        </Marker>
      </Map>
    );
  }
}

export default MyMap;