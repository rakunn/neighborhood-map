import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { withStyles } from '@material-ui/core/styles';
import SearchFilter from './SearchFilter';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import changeCurrentLocation from "../actions/changeCurrentLocation";
import { isCurrentLocation, filterLocations } from '../helpers'
import './LocationList.css';
import changeMapFocus from "../actions/changeMapFocus";

const styles = theme => ({
  list: {
    height: '78vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    paddingTop: 0,
  },
  menuItem: {
    borderTop: '1px solid #eee',
    whiteSpace: 'normal',
    height: 60,
  },
  currentVenue: {
    background: 'linear-gradient(#33c9dc, #00bcd4)',
    '&:hover': {
      background: 'linear-gradient(#00bcd4, #33c9dc)',
    }
  },
  results: {
    padding: '0.5em',
  }
});

const LocationList = ({ classes, data }) => {
  const { filter } = data;
  const { venues } = data.locations.response;
  const { location, detail } = data.search;
  const filteredVenues = filterLocations(venues, filter);

  const handleClick = (venue) => {
    const { lng, lat } = venue.location;
    store.dispatch(changeCurrentLocation(venue));
    store.dispatch(changeMapFocus([lng, lat]));
  };

  return (
    <div className="LocationList__container">
      <SearchFilter />
      <Typography className={classes.results} variant="button">{ filteredVenues.length } results for { detail } in { location } </Typography>
      <MenuList className={classes.list}>
        {filteredVenues.map((venue) => (
          <MenuItem
            onClick={() => handleClick(venue)}
            key={venue.id} className={isCurrentLocation(data.currentLocation, venue) ? classes.currentVenue + " " + classes.menuItem : classes.menuItem}>
              <ListItemText
                primary={venue.name}
                secondary={venue.location.address}
              />
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};

LocationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationList);