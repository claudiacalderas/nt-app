import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home.js'
import Results from './pages/results'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/results' component={Results}/>
        </Switch>
      </div>
    );
   }
}

export default App;
