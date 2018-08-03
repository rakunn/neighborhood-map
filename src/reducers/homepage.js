import { OPEN_HOMEPAGE } from '../constants';

export const homepageIsOpen = (state = true, action) => {
  switch (action.type) {
    case OPEN_HOMEPAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};