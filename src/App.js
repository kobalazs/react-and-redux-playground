import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './features/common/Home';
import Counter from './features/counter/Counter';

export default function App() {
  return (
    <Router>
      <nav>
        <strong>React Playground</strong>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/counter" activeClassName="active">Counter</NavLink>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
