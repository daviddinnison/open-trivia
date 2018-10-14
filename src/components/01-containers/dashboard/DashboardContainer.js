// module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { userDataRequest } from '../../../redux/actions/user/user';
import userData from '../../../data/dummy/user';

// component imports
import DashboardView from '../../02-views/dashboard/DashboardView';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.dispatch(userDataRequest(userData))
  }

  render() {
    if (this.props.data) {
      console.log('user data in comp', this.props.data);
      return (
        <div>
          <DashboardView />
        </div>
      );
    } else {
      console.log('loading user data', this.props.data);
      return <p>Loading</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.user.data
  };
};

export default connect(mapStateToProps)(DashboardContainer);
