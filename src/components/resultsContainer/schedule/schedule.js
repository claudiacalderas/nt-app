import React from 'react';
import './schedule.css';

export default function Schedule() {
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
							<tr>
									<td style={{color: '#0053a0'}}><strong>Blue</strong></td>
									<td style={{color: '#0053a0'}}>to Mall of America</td>
									<td style={{textAlign: 'right'}}><strong>Due</strong></td>
							</tr>
							<tr>
									<td style={{color: '#0053a0'}}><strong>Blue</strong></td>
									<td style={{color: '#0053a0'}}>to Mpls-Target Field</td>
									<td style={{textAlign: 'right'}}><strong>10:53</strong></td>
							</tr>
							<tr>
									<td style={{color: '#0053a0'}}><strong>Blue</strong></td>
									<td style={{color: '#0053a0'}}>to Mall of America</td>
									<td style={{textAlign: 'right'}}><strong>12 Min</strong></td>
							</tr>
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