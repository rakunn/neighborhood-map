import { FOCUS_MAP } from '../constants';

export const currentFocus = (state = null, action) => {
  switch (action.type) {
    case FOCUS_MAP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};