import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import MarkerIcon from './markers/MarkerIcon';

import store from '../store';
import changeCurrentLocation from '../actions/changeCurrentLocation';

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
        { venues.map(venue => (
            <Marker
              anchor="bottom"
              coordinates={[venue.location.lng, venue.location.lat]}
              onClick={() => {store.dispatch(changeCurrentLocation(venue))}}
              key={venue.id}
            >
              <MarkerIcon style={{fill: 'orange'}}/>
            </Marker> )) }
        { currentLocation.id && (
          <Popup
            coordinates={[currentLocation.location.lng, currentLocation.location.lat]}
            offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}>
            <h1>Popup</h1>
          </Popup>
        )}
      </Map>
    );
  }
}

export default MyMap;