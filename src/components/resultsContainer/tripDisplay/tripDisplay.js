import React from 'react';
import './tripDisplay.css'

const TripDisplay = (props) => {
	if (!props.route && !props.stopNumber) 
		return (
			<div className="tripDisplay">
				<span><strong>Invalid data</strong></span>
			</div>
		)
	else
		if(props.stopNumber) {
			return (
				<div className="tripDisplay">
					<div>
							<span><strong>Stop Number: </strong></span>
							<span><strong>{props.stopNumber}</strong></span>
					</div>
				</div>
			);		
		} else {
			return (
				<div className="tripDisplay">
					<div>
							<span><strong>{props.route} - </strong></span>
							<span><strong>{props.direction} </strong></span>
							<span><strong>{props.stopText}</strong></span>
					</div>
				</div>
			);				
		}

}

export default TripDisplay;