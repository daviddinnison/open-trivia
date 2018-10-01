import React from 'react';
import RegistrationForm from '../../02-views/registration/RegistrationForm';
import { registerRequest } from '../../../redux/actions/registration/registration';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RegistrationContainer extends React.Component {
  submit = values => {
    console.log(values, 'the values that the user submitted to form');
    this.props.dispatch(registerRequest(values));
  };

  render() {
    return <RegistrationForm onSubmit={this.submit} />;
  }
}

const mapDispatchToProps = dispatch => {
  let actions = bindActionCreators({ registerRequest });
  return { ...actions, dispatch };
};

export default connect(
  null,
  mapDispatchToProps
)(RegistrationContainer);
