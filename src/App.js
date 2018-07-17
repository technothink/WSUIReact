import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4 className='BulletStyle'>Ws-UI</h4>
        <Home/>
      </div>
    );
  }
}

export default App;
