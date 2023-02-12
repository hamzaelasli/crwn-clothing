/* eslint-disable import/order */
/* eslint-disable react/prop-types */
import CategoryItem from '../category-item/category.component';
import './categories.styles.scss';
import React from 'react';

function Categories({ categories }) {
  return (
    <div className="categories--container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Categories;
