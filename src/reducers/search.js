import { CHANGE_QUERY_FROM_BUTTON, CHANGE_LOCATION_FROM_INPUT } from '../constants';

const initialState = {
  location: '',
  detail: 'bar'
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUERY_FROM_BUTTON: {
      if (action.payload !== 'any') {
        return {
          ...state,
          detail: action.payload,
        };
      } else {
        return {
          location: state.location,
        };
      }
    }

    case CHANGE_LOCATION_FROM_INPUT: {
      return {
        ...state,
        location: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};