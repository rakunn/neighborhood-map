import { OPEN_HOMEPAGE } from '../constants';

export const openHomepage = (nextState) => {
  return {
    type: OPEN_HOMEPAGE,
    payload: nextState
  }
};