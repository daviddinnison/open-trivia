import React from 'react';

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
    </div>
  );
};

export default CategoriesView;
