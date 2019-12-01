import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0053A0',
		},
		secondary: yellow,
		error: red,
	},
});


ReactDOM.render((
  <BrowserRouter>  
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider> 
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
