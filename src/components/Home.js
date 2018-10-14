import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationContainer from './01-containers/registration/RegistrationContainer';
import DashboardContainer from './01-containers/dashboard/DashboardContainer';

import userData from '../data/dummy/user';

class Home extends Component {
  conditionalLogIn() {
    if (this.props.loggedIn) {
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
    loggedIn: state.user.loggedIn
  };
};

export default connect(mapStateToProps)(Home);
