import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <strong className='BulletStyle'>Ws-UI</strong>
        <Home/>
      </div>
    );
  }
}

export default App;
