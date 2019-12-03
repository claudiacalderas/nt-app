import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function directionReducer(state = initialState.direction, action) {
  switch(action.type) {
    case types.SAVE_DIRECTION_SUCCESS: 
      return action.direction
    default: 
      return state; 
  }
}