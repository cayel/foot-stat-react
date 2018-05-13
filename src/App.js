import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueTable from './components/LeagueTable'
import SelectLeague from './components/SelectLeague'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

class StatFoot extends Component {
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
      <div>
        <SelectLeague updateParent={this.saveChange("league")}/>
        <LeagueTable league={this.state.selectedLeague}/>
      </div>
    );
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

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
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to foot-stat-react</h1>
        </header>
        <SelectLeague updateParent={this.saveChange("league")}/>
        <LeagueTable league={this.state.selectedLeague}/>
      </div>*/
<Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/statfoot">Stats</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/statfoot" component={StatFoot}/>
    </div>
  </Router>      
    );
  }
}


export default App;
