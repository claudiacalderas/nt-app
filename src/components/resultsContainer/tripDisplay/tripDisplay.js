import React from 'react';
import './TripDisplay.css'

const TripDisplay = (props) => {
	if (!props.route)
		return (
			<div className="tripDisplay">
				<span><strong>Invalid data</strong></span>
			</div>
		)
	else
		return (
			<div className="tripDisplay">
				<div>
						<span><strong>{props.route} - </strong></span>
						<span><strong>{props.direction} </strong></span>
						<span><strong>{props.stopText}</strong></span>
				</div>
				<div>
						<span>Stop Number: </span>
						<span>{props.stopNumber}</span>
				</div>
			</div>
		);
}

export default TripDisplay;