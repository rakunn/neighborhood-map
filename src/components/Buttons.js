import React from 'react';
import './Buttons.css';
import Tooltip from '@material-ui/core/Tooltip';

const Buttons = ({ controls, onClick, variant }) => {
  return (
    <div className="Landing__form__buttons">
      { controls.map((button, id) => {
        const active = button.active ? 'active' : '';
        return (
          <Tooltip key={button.query}  title={button.query} placement="top">
            <button
              type="button"
              className={`Landing__form__button ${active}`}
              onClick={onClick(button.query, id)}>{button.icon}
            </button>
          </Tooltip>
          )
      })}
    </div>
  )
};

export default Buttons;