import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerIcon from './markers/MarkerIcon';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicmFrdW5uIiwiYSI6ImNqM2gxeHBmZzAwODgycXA2Yzh2OGJ0YTEifQ.XNd3YHnFOXAyq1etI3UDNg',
});

class MyMap extends Component {
  render() {
    const { venues } = this.props.data.locations.response;
    return (
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/rakunn/cjh0b1hd6001b2rlewn3g43lo"
        containerStyle={{ width: '100vw', height: '100vh'}}
        center={[21.013223575241867, 52.2300446133068]}
      >
        { venues.map(venue => (
            <Marker
              anchor="bottom"
              coordinates={[venue.location.lng, venue.location.lat]}
              onClick={() => {console.log(venue)}}
              key={venue.id}
            >
              <MarkerIcon style={{fill: 'orange'}}/>
            </Marker> )) }
      </Map>
    );
  }
}

export default MyMap;