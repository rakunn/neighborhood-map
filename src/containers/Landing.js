import React from 'react';
import './Landing.css';

import store from '../store';
import { fetchLocations } from "../helpers/API";
import { populateLocations } from "../actions/populateLocations";
import { changeLocation, changeSearch } from "../actions/changeSearch";
import {calculateAverageCoordinates} from "../helpers";
import changeMapFocus from "../actions/changeMapFocus";
import Buttons from '../components/Buttons';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';


class Landing extends React.Component {
  state = {
    open: true,
    loading: false,
  };

  handleClick = (query) => (event) => {
    event.preventDefault();
    store.dispatch(changeSearch(query));
  };

  handleChange = (event) => {
    event.preventDefault();
    store.dispatch(changeLocation(event.target.value));
  };

  handleSubmit = (location, details) => evt => {
    this.setState({loading: true})
    fetchLocations(location, details)
      .then((response) => {
        const locations = response.response.venues;
        store.dispatch(populateLocations(response));
        store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
        this.setState({loading: false, open: false});
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { location, detail } = store.getState().search;
    return this.state.open && (
      <div className="Landing__hero">
        <h1 className="Landing__hero_main">City Explorer</h1>
        <h2 className="Landing__hero_secondary">Find the best venues in your neighborhood</h2>
        <form className="Landing__form">
          <div className="Landing__form__buttons">
            <Buttons variant="white" />
          </div>
          <label className="Landing__form__label">
            <input className="Landing__form__input" onChange={this.handleChange} type="text" placeholder="City, address..."/><SearchIcon/>
          </label>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit(location, detail)}
            disabled={this.state.loading}
          >
            Search
          </Button>
        </form>
        {this.state.loading && <CircularProgress color="secondary" style={{color: '#00bcd4' }} size={82} /> }
      </div>
    );
  }
}

export default Landing;