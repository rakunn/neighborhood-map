import React from 'react';
import './Landing.css';

import store from '../store';
import { fetchLocations } from "../helpers/API";
import { populateLocations } from "../actions/populateLocations";
import { changeLocation, changeSearch } from "../actions/changeSearch";
import {calculateAverageCoordinates} from "../helpers";
import changeMapFocus from "../actions/changeMapFocus";
import {pressControlButton} from "../actions/pressControlButton";
import ErrorNotif from '../components/ErrorNotif';
import Buttons from '../components/Buttons';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Offline } from 'react-detect-offline';


class Landing extends React.Component {
  state = {
    open: true,
    loading: false,
    badQuery: false,
  };

  handleClick = (query, id) => (event) => {
    event.preventDefault();
    store.dispatch(changeSearch(query));
    store.dispatch(pressControlButton(id));
  };

  handleChange = (event) => {
    event.preventDefault();
    store.dispatch(changeLocation(event.target.value));
  };

  handleSubmit = (location, details) => event => {
    //Mixing redux and local state here. It made more sense to set local state for landing page, because related values are used only here.
    event.preventDefault();
    this.setState({loading: true, badQuery: false});
    fetchLocations(location, details)
      .then((response) => {
        const locations = response.response.venues;
        store.dispatch(populateLocations(response));
        store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
        this.setState({loading: false, open: false});
      })
      .catch((err) => {
        this.setState({loading: false, badQuery: true});
      });
  };

  render() {
    const state = store.getState();
    const { location, detail } = state.search;
    const { controls } = state;
    return this.state.open && (
      <div className="Landing__hero">
        <h1 className="Landing__hero_main">City Explorer</h1>
        <h2 className="Landing__hero_secondary">Find the best venues in your neighborhood</h2>
        <form className="Landing__form">
          <div className="Landing__form__buttons">
            <Buttons controls={controls} onClick={this.handleClick} variant="white" />
          </div>
          <label className="Landing__form__label">
            <input className="Landing__form__input" onChange={this.handleChange} type="text" placeholder="City, address..."/><SearchIcon/>
          </label>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleSubmit(location, detail)}
            disabled={this.state.loading}
          >
            Search
          </Button>
        </form>
        {this.state.loading && <CircularProgress color="secondary" style={{color: '#00bcd4' }} size={82} /> }
        {this.state.badQuery && <ErrorNotif message="Your query did not return any results. Please verify."/>}
        <Offline><ErrorNotif message="Whoops, it seems you have no internet connection."/></Offline>
      </div>
    );
  }
}

export default Landing;