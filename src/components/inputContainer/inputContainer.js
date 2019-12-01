import React from 'react';
import './inputContainer.css';
import axios from 'axios';
import SelectRoute from './selectRoute/selectRoute.js';
import SelectOption from './selectOption/selectOption.js';
import StopForm from './stopForm/stopForm'

export default class InputContainer extends React.Component {
  state = {
    routes: null,
		directions: null,
		stops: null,
		route: null,
		direction: null,
		stop: null,
		valid: false
  }
  
	componentDidMount() {
		this.getRoutes();
	}
  
	getRoutes = () => {
		console.log('GET ROUTES')
		axios
			.get('https://svc.metrotransit.org/NexTrip/routes')
			.then(data => this.setState({routes: data.data}))
			.catch(err => {
				console.log(err);
				return null;
			})  
	}
  
	handleRouteSelection = (selectedRoute) => {
		this.setState({route: selectedRoute}, () => {
			this.setState({direction: null, stop: null, stops: null})
			axios
				.get(`https://svc.metrotransit.org/NexTrip/Directions/${this.state.route}`)
				.then(data => {
					this.setState({directions: data.data});
					this.setState({direction: null})
				})
				.catch(err => {
					console.log(err);
					return null;
				}) 
		});
	}
  
	handleDirectionSelection = (selectedDirection) => {
		this.setState({direction: selectedDirection}, () => {
			this.setState({stop: null, stops: null})
			axios
				.get(`https://svc.metrotransit.org/NexTrip/Stops/${this.state.route}/${this.state.direction}`)
				.then(data => {
					this.setState({stops: data.data});
				})
				.catch(err => {
					console.log(err);
					return null;
				}) 
		});
	}
  
	handleStopSelection = (selectedStop) => {
		this.setState({stop: selectedStop}, () => {
			axios
			.get(`https://svc.metrotransit.org/NexTrip/${this.state.route}/${this.state.direction}/${this.state.stop}`)
			.then(data => {
				console.log('DATA (SELECTS)', data)
			})
			.catch(err => {
				console.log(err);
				return null;
			}) 
		});
	}
  
	render() {
		return(
			<>
				<div className="selectContainer">
					<SelectRoute 
						label={'Select Route'}
						data={this.state.routes}
						onChange={this.handleRouteSelection}
					/>
					<SelectOption
						disabled={!this.state.directions}
						label={'Select Direction'}
						selectId={'direction-select'}
						labelId={'direction-select-label'}
						data={this.state.directions}
						onChange={this.handleDirectionSelection}
					/>
					<SelectOption
						disabled={!this.state.stops}
						label={'Select Stop'}
						selectId={'stop-select'}
						labelId={'stop-select-label'}
						data={this.state.stops}
						onChange={this.handleStopSelection}
					/>
			</div>
				<div className="formContainer">
					<StopForm />
				</div>
			</>
		)
  }
}