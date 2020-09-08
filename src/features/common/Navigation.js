import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser, logOut } from '../user/authSlice';

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <nav>
      <strong>React Playground</strong>
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/counter" activeClassName="active">Counter</NavLink>
      {user
      ? <button onClick={() => dispatch(logOut())}>Logout</button>
      : (
        <Fragment>
          <NavLink to="/registration" activeClassName="active">Registration</NavLink>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </Fragment>
      )}
    </nav>
  );
}
