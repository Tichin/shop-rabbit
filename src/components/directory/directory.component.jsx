import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

export default function Directory({ categories }) {
  const renderCategories = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });
  return <div className='directory-container'>{renderCategories}</div>;
}
