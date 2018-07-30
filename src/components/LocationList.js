import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import changeCurrentLocation from "../actions/changeCurrentLocation";
import { isCurrentLocation } from '../helpers'

const styles = theme => ({
  menuItem: {
    whiteSpace: 'normal',
    width: 200,
    height: 30,
    borderTop: '1px solid #eee',
  },
  currentVenue: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'yellow',
    }
  },
});

const LocationList = ({ classes, data }) => {
  const { venues } = data.locations.response;
  console.log(data);

  return (
      <MenuList>
        {venues.map((venue) => (
          <MenuItem
            onClick={() => store.dispatch(changeCurrentLocation(venue))}
            key={venue.id} className={isCurrentLocation(data.currentLocation, venue) ? classes.currentVenue + " " + classes.menuItem : classes.menuItem}>
              <ListItemText
                primary={venue.name}
                secondary={venue.location.address}
              />
          </MenuItem>
        ))}
      </MenuList>
  );
};

LocationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationList);