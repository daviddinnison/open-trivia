import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

RegistrationForm = reduxForm({
  // a unique name for the form
  form: 'registration'
})(RegistrationForm);

export default RegistrationForm;
