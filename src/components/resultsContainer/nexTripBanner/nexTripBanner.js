import React from 'react';
import './NexTripBanner.css';
import Clock from 'react-live-clock';

const getDisplayText = (text) => {
	if (!text) return <span>No trips available</span>
	if (text.includes(':')) {
		return <span><strong><i>Nex</i></strong>Trip departs at {text}</span>
	} else {
		return <span><strong><i>Nex</i></strong>Trip departs in {text}</span>
	}
}

const NexTripBanner = props => {

	return (
		<>
			<div className="topBanner">
					{getDisplayText(props.data)}
			</div>
			<div className="bottomBanner">
				<span>Current time: </span>
					<Clock 
						format={'hh:mm a'} 
						ticking={false} 
						interval={6000}/>
			</div>
		</>
	);
}

export default NexTripBanner;