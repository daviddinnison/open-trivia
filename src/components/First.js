import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../redux/actions/first';

class First extends Component {
  componentDidMount() {
    this.props.dispatch(test());
  }

  render() {
    return (
      <div>
        <p>{this.props.test}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.first.test
  };
};

export default connect(mapStateToProps)(First);
