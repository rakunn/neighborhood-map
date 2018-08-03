import React from 'react';
import './Toolbar.css';
import Buttons from '../components/Buttons';
import Chip from '@material-ui/core/Chip';

import { fetchLocations } from "../helpers/API";
import { withStyles } from '@material-ui/core/styles';
import store from '../store/index';
import {changeSearch} from "../actions/changeSearch";
import {pressControlButton} from "../actions/pressControlButton";
import {calculateAverageCoordinates} from "../helpers";
import {populateLocations} from "../actions/populateLocations";
import changeMapFocus from "../actions/changeMapFocus";

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: '#33c9dc',
    color: '#fff',
    margin: theme.spacing.unit / 2,
    textTransform: 'uppercase',
  },
});

const Toolbar = ({classes}) => {
  const state = store.getState();
  const { controls } = state;
  const { location, detail } = state.search;

  const handleClick = (query, id) => (event) => {
    event.preventDefault();
    store.dispatch(changeSearch(query));
    fetchLocations(location, query)
      .then((response) => {
        const locations = response.response.venues;
        store.dispatch(populateLocations(response));
        store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
        store.dispatch(pressControlButton(id),100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Map__toolbar__container">
      <div>
        <Chip label={location} className={classes.chip} />
        <Chip label={detail} className={classes.chip} />
      </div>
      <Buttons onClick={handleClick} controls={controls}/>
    </div>
  )
};

export default withStyles(styles)(Toolbar);