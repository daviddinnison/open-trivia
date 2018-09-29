import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test, dataRequest } from '../redux/actions/first';

class First extends Component {
  componentDidMount() {
    // this.props.dispatch(test()); tests to make sure actions/sagas/reducer is working
    this.props.dispatch(dataRequest());
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
    data: state.first.data,
    error: state.first.error,
    test: state.first.test
  };
};

export default connect(mapStateToProps)(First);
