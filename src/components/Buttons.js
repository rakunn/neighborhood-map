import React from 'react';
import './Buttons.css';

const Buttons = ({ controls, onClick, variant }) => {
  return (
    <div className="Landing__form__buttons">
      { controls.map((button, id) => {
        const active = button.active ? 'active' : '';
        return <button key={button.query} className={`Landing__form__button ${active}`} onClick={onClick(button.query, id)}>{button.icon}</button>
      })}
    </div>
  )
};

export default Buttons;