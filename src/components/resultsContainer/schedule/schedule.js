import React from 'react';
import './Schedule.css';

const getColoredText = (text) => {
	const realTime = text.includes(':');
	return realTime ? <span style={{color: '#D91E18'}}>{text}</span> : <span>{text}</span>
}

const Schedule = props => {
	const displayData = props.data ? props.data : [];

	return (
		<div className="scheduleList">
				<table style={{width: '100%'}}>
					<thead>
							<tr>
									<th 
											colSpan="2"
											style={{textAlign: 'left', borderBottom: '1px solid #ccc'}}>
											Route
									</th>
									<th
											style={{textAlign: 'right', borderBottom: '1px solid #ccc'}}>
											Departs
									</th>
							</tr>
					</thead>
					<tbody>
							{displayData.map((element, index) => {
								return (
									<tr key={index}>
										<td style={{color: '#0053a0'}}><strong>{element.Route}</strong></td>
										<td style={{color: '#0053a0'}}>{element.Description}</td>
										<td style={{textAlign: 'right'}}><strong>{getColoredText(element.DepartureText)}</strong></td>
									</tr>
								)
							})}
					</tbody>
					<tfoot>
							<tr>
									<th 
											colSpan="3"
											style={{textAlign: 'right', borderTop: '1px solid #ccc'}}>
											<span>&#8226; Real Time </span>
											<span style={{color: '#D91E18'}}>&#8226; Scheduled</span>
									</th>
							</tr>
					</tfoot>
				</table>
		</div>
	);
}

export default Schedule;