import React from 'react';
import './nexTripBanner.css'

export default function NexTripBanner() {
	return (
		<>
			<div className="topBanner">
					<span><strong><i>Nex</i></strong>Trip departs in </span>
					<span className="departTime">5 min</span>
			</div>
			<div className="bottomBanner">
					<span>Current time: 9:50am</span>
			</div>
		</>
	);
}