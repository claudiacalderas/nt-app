import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stopReducer(state = initialState.stop, action) {
  switch(action.type) {
    case types.SAVE_STOP_SUCCESS: 
      return action.stop
    default: 
      return state; 
  }
}