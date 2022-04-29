import React from 'react';
import './category-item.styles.scss';

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <img src={imageUrl} alt={title} />
      <div className='category-body-container'>
        <a href='/' className='underline-effect'>
          {title}
        </a>
      </div>
    </div>
  );
}
