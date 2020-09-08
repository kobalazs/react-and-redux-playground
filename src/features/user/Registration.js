import React, { Fragment } from 'react';

import UserDto from './UserDto';
import RegistrationForm from './RegistrationForm';

export default class Registration extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
  }

  changeUser(event) {
    const user = Object.assign({}, this.state.user, { [event.target.name]: event.target.value });
    this.setState(Object.assign({}, this.state, { user }));
  }

  register(data) {
    const user = new UserDto(data);
    console.log('Register', user);
  }

  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        <RegistrationForm onSubmit={this.register} />
      </Fragment>
    );
  }
}
