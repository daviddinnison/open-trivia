import React from 'react';
import PropTypes from 'prop-types';

const renderCategories = categories => {
  const categoriesMap = categories.map((cat, i) => {
    return (
      <div key={i}>
        <p>{cat}</p>
      </div>
    );
  });

  return categoriesMap;
};

const CategoriesView = props => {
  return (
    <div>
      <h2>Categories</h2>
      {renderCategories(props.categories)}
      <p>test</p>
    </div>
  );
};

CategoriesView.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesView;
