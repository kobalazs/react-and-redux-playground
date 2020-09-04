import React, { Fragment } from 'react';

import UserDto from './UserDto';

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      user: new UserDto(),
    };
    this.changeUser = this.changeUser.bind(this);
    this.register = this.register.bind(this);
    this.reset = this.reset.bind(this);
  }

  changeUser(event) {
    const user = Object.assign({}, this.state.user, { [event.target.name]: event.target.value });
    this.setState(Object.assign({}, this.state, { user }));
  }

  register(event) {
    event.preventDefault();
    console.log('Register', this.state.user);
  }

  reset() {
    this.setState(Object.assign({}, this.state, { user: new UserDto() }));
  }

  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
        <form onSubmit={this.register} onReset={this.reset}>
          <label>
            Name
            <input name="name" type="text" value={this.state.user.name ?? ''} onChange={this.changeUser} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={this.state.user.email ?? ''} onChange={this.changeUser} />
          </label>
          <label>
            Password
            <input name="password" type="password" value={this.state.user.password ?? ''} onChange={this.changeUser} />
          </label>
          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </form>
      </Fragment>
    );
  }
}
