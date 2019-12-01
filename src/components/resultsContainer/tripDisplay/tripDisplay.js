import React from 'react';
import './tripDisplay.css'

export default function TripDisplay() {
	return (
		<div className="tripDisplay">
			<div>
					<span><strong>METRO Blue Line - </strong></span>
					<span><strong>Northbound</strong></span>
					<span><strong>Mall of America Station</strong></span>
			</div>
			<div>
					<span>Stop Number: </span>
					<span>51405</span>
			</div>
		</div>
	);
}