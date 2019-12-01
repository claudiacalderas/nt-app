import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function BackButton() {
	return (
		<Button
			component={Link} to="/"
			className="backButton"
			variant="contained" 
			color="primary" 
			size="large">
			Back to stop
		</Button>
	);
}