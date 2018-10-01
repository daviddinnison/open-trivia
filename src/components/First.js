import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationContainer from './01-containers/RegistrationContainer';
import Second from './Second';

class First extends Component {
  conditionalLogIn() {
    if (this.props.user.loggedIn) {
      console.log('user is logged in');
      return <Second/>
    } 
    return <RegistrationContainer/>
  }

  render() {
    return (
      <div>
        {this.conditionalLogIn()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(First);
