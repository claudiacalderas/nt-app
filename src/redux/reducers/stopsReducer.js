import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stopsReducer(state = initialState.stops, action) {
  switch(action.type) {
    case types.LOAD_STOPS_SUCCESS:
      return action.stops
    default: 
      return state; 
  }
}