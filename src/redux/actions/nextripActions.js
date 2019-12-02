import * as types from './actionTypes';
import * as apiCalls from '../../api/apiCalls';

export function loadRoutesSuccess(routes) {
  return { 
    type: types.LOAD_ROUTES_SUCCESS,
    routes: routes
  }
}

export function loadDirectionsSuccess(directions) {
  return { 
    type: types.LOAD_DIRECTIONS_SUCCESS,
    directions: directions
  }
}

export function loadStopsSuccess(stops) {
  return { 
    type: types.LOAD_STOPS_SUCCESS,
    stops: stops
  }
}

export function loadTripsSuccess(trips) {
  return { 
    type: types.LOAD_TRIPS_SUCCESS,
    trips: trips
  }
}

export function saveRouteSuccess(route) {
  return { 
    type: types.SAVE_ROUTE_SUCCESS,
    route: route
  }
}

export function saveDirectionSuccess(direction) {
  return { 
    type: types.SAVE_DIRECTION_SUCCESS,
    direction: direction
  }
}

export function saveStopSuccess(stop) {
  return { 
    type: types.SAVE_STOP_SUCCESS,
    stop: stop
  }
}

export function loadRoutes() {
  return function(dispatch) {
    return apiCalls.getRoutes().then(routes => {
      dispatch(loadRoutesSuccess(routes))
    }).catch(error => {
        throw error; 
    })
  }
}
 
export function loadDirections(route) {
  return function(dispatch) {
    return apiCalls.getDirections(route).then(directions => {
      dispatch(loadDirectionsSuccess(directions))
    }).catch(error => {
        throw error;
    })
  }
}

export function loadStops(route, direction) {
  return function(dispatch) {
    return apiCalls.getStops(route, direction).then(stops => {
      dispatch(loadStopsSuccess(stops))
    }).catch(error => {
        throw error;
    })
  }
}

export function loadTrips(params) {
  return function(dispatch) {
    return apiCalls.getTrips(params).then(trips => {
      dispatch(loadTripsSuccess(trips))
    }).catch(error => {
        throw error;
    })
  }
}

export function saveRoute(route) {
  return function(dispatch, getState) {
    return dispatch(saveRouteSuccess(route));
  } 
}

export function saveDirection(direction) {
  return function(dispatch, getState) {
    return dispatch(saveDirectionSuccess(direction));
  } 
}

export function saveStop(stop) {
  return function(dispatch, getState) {
    return dispatch(saveStopSuccess(stop));
  } 
}
 