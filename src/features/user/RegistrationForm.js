import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegistrationForm(props) {
  const { register, handleSubmit, errors, getValues } = useForm();
  const validateAndSubmit = event => {
    event.preventDefault();
    if (!props.loading) {
      handleSubmit(props.onSubmit)(event);
    }
  };
  const matchesPreviousPassword = value => {
    const { password } = getValues();
    return password === value || 'Passwords should match!';
  };
  return (
    <form onSubmit={validateAndSubmit}>
      <fieldset disabled={props.loading}>
        <label>
          Name
          <input
            name="name"
            type="text"
            ref={register({ required: 'Name is required!' })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            ref={register({
              required: 'Email is required!',
              pattern: {
                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Email should be valid!'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            ref={register({
              required: 'Password is required!',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters long!'
              }
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </label>
        <label>
          Confirm Password
          <input
            name="passwordConfirmation"
            type="password"
            ref={register({
              required: 'Please confirm your password!',
              validate: { matchesPreviousPassword }
            })}
          />
          {errors.passwordConfirmation && <span className="error">{errors.passwordConfirmation.message}</span>}
        </label>
        <button type="submit">Register</button>
        <button type="reset">Reset</button>
        {props.loading ? <span>Loading...</span> : null}
      </fieldset>
    </form>
  );
}
