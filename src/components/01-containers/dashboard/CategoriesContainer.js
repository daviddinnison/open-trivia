// module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// component imports
import CategoriesView from '../../02-views/dashboard/CategoriesView';

class CategoriesContainer extends Component {
  render() {
    return <CategoriesView categories={this.props.categories}/>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(CategoriesContainer);
