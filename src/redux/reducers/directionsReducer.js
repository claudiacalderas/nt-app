import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function directionsReducer(state = initialState.directions, action) {
  switch(action.type) {
    case types.LOAD_DIRECTIONS_SUCCESS:
      return action.directions
    default: 
      return state; 
  }
}