import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  state = { 
    Counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  };

  render() {
    return(
      <React.Fragment>
        <Home/>
      </React.Fragment>
    );
  };
}

export default App; 