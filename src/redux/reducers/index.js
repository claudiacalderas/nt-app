import { combineReducers } from 'redux';
import routes from './routesReducer';
import directions from './directionsReducer';
import stops from './stopsReducer';
import trips from './tripsReducer';
import route from './routeReducer';
import direction from './directionReducer';
import stop from './stopReducer';


const rootReducer = combineReducers({
  routes,
  directions,
  stops,
  trips,
  route,
  direction,
  stop
});

export default rootReducer;