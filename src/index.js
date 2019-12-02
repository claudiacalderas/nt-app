import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0053A0',
		},
		secondary: yellow,
		error: red,
	},
});

const store = configureStore();

ReactDOM.render((
	<Provider store={store}>
		<Router>  
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider> 
		</Router>
	</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
