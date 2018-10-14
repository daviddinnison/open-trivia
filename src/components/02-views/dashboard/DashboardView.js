import React from 'react';
import PropTypes from 'prop-types';

const DashboardView = props => {
  const { name } = props;
  return (
    <div>
      <h1>{name}'s dashboard</h1>
    </div>
  );
};

DashboardView.propTypes = {
  name: PropTypes.string.isRequired
};

export default DashboardView;