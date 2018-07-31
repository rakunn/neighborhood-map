import { APPLY_NEW_FILTER } from "../constants";

export const filter = (state = '', action) => {
  switch (action.type) {
    case APPLY_NEW_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};