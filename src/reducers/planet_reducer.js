import {
  REQUEST_PLANETS,
  RECIEVE_PLANETS,
} from '../actions/types';

export default function planetsbyStringSearch(state = {}, action) {
    switch (action.type) {
      case REQUEST_PLANETS:
      return Object.assign({}, state, {
        isFetching: true,
      });
     
      case RECIEVE_PLANETS:
      return Object.assign({}, state, {
        planets: action.payload.response.results,
        isFetching: false,
      });
      default:
        return state;
    }
  }
  