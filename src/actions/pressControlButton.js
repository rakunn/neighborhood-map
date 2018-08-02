import { PRESS_CONTROL_BUTTON } from '../constants';

export const pressControlButton = (id) => {
  return {
    type: PRESS_CONTROL_BUTTON,
    payload: id,
  };
};