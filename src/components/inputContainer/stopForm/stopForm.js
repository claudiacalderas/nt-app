import React from 'react';
import './StopForm.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class StopForm extends React.Component {
  state = {
		stopNumber: '' 
	};
    
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.stopNumber);
		this.setState({ stopNumber: '' });
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