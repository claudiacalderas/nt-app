import React, { Component } from 'react';
import './App.css';
import AppRoutes from './routes/routes';
import Header from './components/common/header/Header'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        { AppRoutes }
      </div>
    );
   }
}

export default App;
