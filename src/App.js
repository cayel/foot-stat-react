import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import StatFoot from './components/StatFoot'
import Topics from './components/Topics'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/statfoot">Stats</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/statfoot" component={StatFoot} />
        </div>
      </Router>
    );
  }
}


export default App;
