import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => <div><h2>Home</h2></div>
const Results = () => <div><h2>Results</h2></div>

class App extends Component {

  render() {
    return (
     <HashRouter basename='/'>
      <div>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/results">Results</Link></li>
       </ul>
       <hr />
       <Route exact path="/" component={Home} />
       <Route path="/results" component={Results} />
      </div>
     </HashRouter>
    );
   }
}

export default App;

