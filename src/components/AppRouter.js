import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function AppRouter() {
  return (
    <div>
      <Router>
        <nav>
          <NavLink className="dc" exact to="/">DC</NavLink>
          <div className="Links">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  )
}