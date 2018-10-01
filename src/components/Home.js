import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationContainer from './01-containers/registration/RegistrationContainer';
import DashboardContainer from './01-containers/dashboard/DashboardContainer';

class Home extends Component {
  conditionalLogIn() {
    if (this.props.user.loggedIn) {
      console.log('user is logged in');
      return <DashboardContainer />;
    }
    return <RegistrationContainer />;
  }

  render() {
    return <div>{this.conditionalLogIn()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
