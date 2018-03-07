import React, { Component } from 'react';
import logo from './logo.svg';
import lilogo from './li-logo.png'
import ghlogo from './gh-logo.png';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import About from './About';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <h1>Dave Clark</h1>
            <ul className="header">
              <li><NavLink exact to="/">About</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
              <li><NavLink to="/certification">Certification</NavLink></li>
              <li><a href="//linkedin.com/in/davidjbclark" target="_blank" class="right"><img src={lilogo} alt="LinkedIn" /></a></li>
              <li><a href="//github.com/camelCaseDave" target="_blank" class="right"><img src={ghlogo} alt="GitHub" /></a></li>
            </ul>
            <p className="App-intro">
              <Route exact path="/" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="/education" component={Education} />
              <Route path="/certification" component={Certification} />
            </p>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
