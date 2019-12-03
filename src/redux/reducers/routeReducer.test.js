import routeReducer from './routeReducer';
import * as actions from '../actions/nextripActions';

it('should save route whn passed SAVE_ROUTE_SUCCESS', () => {
  const initialState = {};

  const newRoute = {
    Description: 'METRO Blue Line',
    ProviderID: '8',
    Route: '901'
  }

  const action = actions.saveRouteSuccess(newRoute);
  const newState = routeReducer(initialState, action);

  expect(newState).toEqual(newRoute);
});