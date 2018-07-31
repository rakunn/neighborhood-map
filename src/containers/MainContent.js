import React, { Component } from 'react';
import store from '../store';
import './MainContent.css';

import LocationList from '../components/LocationList';
import Map from '../components/MyMap';
import {calculateAverageCoordinates} from "../helpers";
import changeMapFocus from '../actions/changeMapFocus';

class MainContent extends Component {

  componentDidMount() {
    setTimeout(() => {
      const state = store.getState();
      const locations = state.locations.response.venues;
      store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
    },1);
  };

  render() {
    const state = store.getState();
    return (
      <div className="Main">
        <LocationList data={state} />
        <Map data={state} />
      </div>
    );
  }
}

export default MainContent;
