import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import store from '../store';
import { openHomepage } from "../actions/openHomepage";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 8,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            City Explorer
          </Typography>
          <Button onClick={() => store.dispatch(openHomepage(true))}><HomeIcon className={classes.icon} color="primary" /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);