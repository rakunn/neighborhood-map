import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css';

import SearchIcon from '@material-ui/icons/Search';

class Landing extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div className="Landing__hero">
        <h1 className="Landing__hero_main">City Explorer</h1>
        <h2 className="Landing__hero_secondary">Find the best venues in your neighborhood</h2>

        <form className="Landing__form">
          <label className="Landing__form__label">
            <input className="Landing__form__input" type="text" placeholder="City, address..."/><SearchIcon/>
          </label>
        </form>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Landing;