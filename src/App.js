import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import About from './About';
import Education from './Education';
import Experience from './Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
            <div>
              <h1>Sample</h1>
              <ul className="header">
                <li><NavLink exact to="/">A</NavLink></li>
                <li><NavLink to="/experience">B</NavLink></li>
                <li><NavLink to="/education">C</NavLink></li>
              </ul>
              <p className="App-intro">
                <Route exact path="/" component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/education" component={Education} />
              </p>
            </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
