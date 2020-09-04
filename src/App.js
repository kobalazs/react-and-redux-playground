import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';
import Home from './features/common/Home';
import Counter from './features/counter/Counter';
import Registration from './features/user/Registration';
import Login from './features/user/Login';
import NotFound from './features/common/NotFound';

export default function App() {
  return (
    <Router>
      <nav>
        <strong>React Playground</strong>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/counter" activeClassName="active">Counter</NavLink>
        <NavLink to="/registration" activeClassName="active">Registration</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
