import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoading, logIn, selectToken, selectError } from './authSlice';
import UserDto from './UserDto';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const error = useSelector(selectError);
  const [user, setUser] = useState(new UserDto());

  const changeUser = (event) => {
    setUser(Object.assign({}, user, { [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(logIn(user));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Fragment>
      <h1>Login</h1>
      {token
      ? <span>You are logged in!</span>
      : <form onSubmit={onSubmit}>
          <fieldset disabled={loading}>
            {error ? <span className="error">{error}</span> : null}
            <label>
              Email
              <input name="email" type="email" value={user.email ?? ''} onChange={changeUser} />
            </label>
            <label>
              Password
              <input name="password" type="password" value={user.password ?? ''} onChange={changeUser} />
            </label>
            <button type="submit">Log In</button>
            {loading ? <span>Loading...</span> : null}
          </fieldset>
        </form>
      }
    </Fragment>
  );
}
