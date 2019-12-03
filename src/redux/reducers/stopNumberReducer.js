import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stopNumberReducer(state = initialState.stopNumber, action) {
  switch(action.type) {
    case types.SAVE_STOP_NUMBER_SUCCESS: 
      return action.stopNumber
    default: 
      return state; 
  }
}