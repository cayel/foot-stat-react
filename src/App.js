import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueTable from './components/LeagueTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to foot-stat-react</h1>
        </header>
        <LeagueTable/>
      </div>
    );
  }
}


export default App;
