import React, { Fragment } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import UserDto from './UserDto';
import RegistrationForm from './RegistrationForm';

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      done: false
    };
    this.register = this.register.bind(this);
  }

  async register(data) {
    try {
      this.setState({ loading: true, done: false });
      await Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/register`, new UserDto(data));
      this.setState({ loading: false, done: true });
    } catch (err) {
      window.alert(err.response?.data?.error || err);
      this.setState({ loading: false, done: false });
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        <RegistrationForm onSubmit={this.register} loading={this.state.loading} />
        {this.state.done ? <Redirect to={{ pathname: '/login' }} /> : null}
      </Fragment>
    );
  }
}
