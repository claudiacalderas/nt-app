import * as nextripActions from './nextripActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import { routes } from '../../../tools/mockData';

// configure mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('load routes thunk', () => {
    it('should create LOAD_ROUTES_SUCCESS when loading routes', () => {
      fetchMock.mock('*', {
        body: routes,
        headers: { 'content-type': 'application/json'}
      });

      const expectedAction = [
        { type: types.LOAD_ROUTES_SUCCESS, routes}
      ];

      const store = mockStore({ routes: []});
      return store.dispatch(nextripActions.loadRoutes()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    })
  });
});

describe('saveRouteSuccess', () => {
  it('should create a SAVE_ROUTE_SUCCESS action', () => {
    const route = {
      Description: 'METRO Blue Line',
      ProviderID: '8',
      Route: '901'
    };
    const expectedAction = {
      type: types.SAVE_ROUTE_SUCCESS,
      route: route
    };
    const action = nextripActions.saveRouteSuccess(route);
    expect(action).toEqual(expectedAction);
  })
});

describe('saveDirectionSuccess', () => {
  it('should create a SAVE_DIRECTION_SUCCESS action', () => {
    const direction = {
      Text: 'NORTHBOUND',
      Value: '4'
    };
    const expectedAction = {
      type: types.SAVE_DIRECTION_SUCCESS,
      direction: direction
    };
    const action = nextripActions.saveDirectionSuccess(direction);
    expect(action).toEqual(expectedAction);
  })
});