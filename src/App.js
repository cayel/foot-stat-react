import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueTable from './components/LeagueTable'
import SelectLeague from './components/SelectLeague'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedLeague: '450'};
  }

  saveChange = (field) => (newValue) => {
    // do something with this field's newValue
    // newValue is whatever is typed into input
    this.setState({selectedLeague: newValue});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to foot-stat-react</h1>
        </header>
        <SelectLeague updateParent={this.saveChange("league")}/>
        <LeagueTable league={this.state.selectedLeague}/>
      </div>
    );
  }
}


export default App;
