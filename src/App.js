import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Navigation from './features/common/Navigation';
import Home from './features/common/Home';
import Counter from './features/counter/Counter';
import Registration from './features/user/Registration';
import Login from './features/user/Login';
import NotFound from './features/common/NotFound';
import TaskList from './features/task/TaskList';

export default function App() {
  return (
    <Router>
      <Navigation />
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
          <Route path="/tasks">
            <TaskList />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
