import axios from 'axios';
const baseUrl = 'https://svc.metrotransit.org/NexTrip/';

export function getRoutes() {
  return axios
    .get(baseUrl + 'routes')
    .then(data => {
      return data.data;
    })
    .catch(err => { 
      console.log(err);
      return null;
    }) 
}

export function getDirections(route) {
  return axios
    .get(baseUrl + 'Directions/' + route)
    .then(data => {
      return data.data;
    })
    .catch(err => { 
      console.log(err);
      return null;
    }) 
}

export function getStops(route, direction) {
  return axios
    .get(baseUrl + 'Stops/' + route + '/' + direction)
    .then(data => {
      return data.data;
    })
    .catch(err => { 
      console.log(err);
      return null;
    }) 
}

export function getTrips(params) {
  let url = baseUrl;
  
  params.stopNumber 
    ? url += params.stopNumber
    : url += params.route + '/' + params.direction + '/' + params.stop;

  return axios
    .get(url)
    .then(data => {
      return data.data;
    })
    .catch(err => { 
      console.log(err);
      return null;
    }) 
}
