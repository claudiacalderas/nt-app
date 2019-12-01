import React from 'react';
import './stopForm.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class StopForm extends React.Component {
  state = {
		stopNumber: '' 
	};
    
	handleSubmit = (event) => {
		event.preventDefault();
		axios
			.get(`https://svc.metrotransit.org/NexTrip/${this.state.stopNumber}`)
			.then(data => console.log('STOPS DATA', data))
			.catch(err => {
				console.log(err);
				return null;
			}) 
		// const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
		// this.props.onSubmit(resp.data);
		// this.setState({ stopNumber: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<TextField
						required
						value={this.state.stopNumber}
						onChange={event => this.setState({ stopNumber: event.target.value })}
						id="outlined-required"
						label="Stop Number"
						margin="normal"
						variant="outlined"
					/>
					<Button 
						className="stopNumberButton"
						variant="contained" 
						type="submit" 
						color="primary" 
						size="large">
						Stop Number
					</Button>
				</div>
			</form>
		);
	}
}