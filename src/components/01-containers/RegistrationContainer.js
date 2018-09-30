import React from 'react';
import RegistrationForm from '../02-views/RegistrationForm';

class RegistrationContainer extends React.Component {
  submit = values => {
    console.log(values, 'the values that the user submitted to form');
  };
  
  render() {
    return <RegistrationForm onSubmit={this.submit} />;
  }
}

export default RegistrationContainer;
