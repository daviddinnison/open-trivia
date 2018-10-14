// module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { userDataRequest } from '../../../redux/actions/user/user';
import userData from '../../../data/dummy/user';

// component imports
import DashboardView from '../../02-views/dashboard/DashboardView';
import CategoriesContainer from '../../01-containers/dashboard/CategoriesContainer';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.dispatch(userDataRequest(userData))
  }

  render() {
    const {data} = this.props;
    if (data.user) {
      return (
        <div>
          <DashboardView />
          <CategoriesContainer categories={data.user.categories}/>
        </div>
      );
    } else {
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
