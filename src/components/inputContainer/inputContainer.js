import React from 'react';
import './InputContainer.css';
import SelectRoute from './selectRoute/SelectRoute';
import SelectOption from './selectOption/SelectOption';
import StopForm from './stopForm/StopForm';
import { connect } from 'react-redux';
import { loadRoutes, loadDirections, loadStops, loadTrips, saveRoute, saveDirection, saveStop, saveStopNumber } from '../../redux/actions/nextripActions';
import { Redirect } from 'react-router-dom';

class InputContainer extends React.Component {
  state = {
		redirectToResultsPage: false
  }
  
	componentDidMount() {
		this.props.loadRoutes().catch(error => {
			alert('Loading routes failed: ' + error);
		});
	}
  
	handleRouteSelection = (selectedRoute) => {
		this.props.saveRoute(selectedRoute);
		this.props.saveDirection({});
		this.props.saveStop({});
		this.props.saveStopNumber(null);
		this.props.loadDirections(selectedRoute.Route).catch(error => {
			alert('Loading directions failed: ' + error);
		});
	}
  
	handleDirectionSelection = (selectedDirection) => {
		this.props.saveDirection(selectedDirection);
		this.props.saveStop({});
		this.props.loadStops(this.props.route.Route, selectedDirection.Value).catch(error => {
			alert('Loading stops failed: ' + error);
		});
	}

  
	handleStopSelection = (selectedStop) => {
		this.props.saveStop(selectedStop);
		this.props.loadTrips({route: this.props.route.Route, direction: this.props.direction.Value, stop: selectedStop.Value})
		.then(() => {
			this.setState({redirectToResultsPage: true});
		})
		.catch(error => {
			alert('Loading trips failed: ' + error);
		});
	}


	handleStopFormSubmit = (stopNumber) => {
		this.props.saveStopNumber(stopNumber);
		this.props.loadTrips({stopNumber: stopNumber})
		.then(() => {
			this.setState({redirectToResultsPage: true});
		})
		.catch(error => {
			alert('Loading trips failed: ' + error);
		});
	}
  
	render() {
		return(
			<>
				{this.state.redirectToResultsPage && <Redirect to='/results'/>}
				<div className="selectContainer">
					<SelectRoute 
						label={'Select Route'}
						data={this.props.routes}
						onChange={this.handleRouteSelection}
					/>
					<SelectOption
						label={'Select Direction'}
						selectId={'direction-select'}
						labelId={'direction-select-label'}
						data={this.props.directions}
						onChange={this.handleDirectionSelection}
					/>
					<SelectOption
						label={'Select Stop'}
						selectId={'stop-select'}
						labelId={'stop-select-label'}
						data={this.props.stops}
						onChange={this.handleStopSelection}
					/>
			</div>
			<div className="formContainer">
				<StopForm 
					onSubmit={this.handleStopFormSubmit}
				/>
			</div>
			</>
		)
  }
}

function mapStateToProps(state) {
	return {
		routes: state.routes,
		directions: state.directions,
		stops: state.stops,
		trips: state.trips,
		route: state.route,
		direction: state.direction,
		stop: state.stop,
		stopNumber: state.stopNumber
	}
}

const mapDispatchToProps = {
	loadRoutes,
	loadDirections,
	loadStops,
	loadTrips,
	saveRoute,
	saveDirection,
	saveStop,
	saveStopNumber
}

export default connect(mapStateToProps, mapDispatchToProps) (InputContainer);