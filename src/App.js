import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueTable from './components/LeagueTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to foot-stat-react</h1>
        </header>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <LeagueTable/>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
