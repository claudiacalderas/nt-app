import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function routesReducer(state = initialState.routes, action) {
  switch(action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      return action.routes
    default: 
      return state; 
  }
}