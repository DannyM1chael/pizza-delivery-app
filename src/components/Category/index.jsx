import React from 'react';
import SortBy from '../SortBy';

export default function Category({ categories, sorts }) {
  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <SortBy sorts={sorts} />
    </div>
  );
}
