import React, { useState } from 'react';
import SortBy from '../SortBy';

export default function Category({ categories, sorts }) {
  const [active, setActive] = useState(0);

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          <li className={active === null ? 'active' : ''} onClick={() => setActive(null)}>
            All
          </li>
          {categories &&
            categories.map((category, index) => (
              <li
                key={index}
                className={active === index ? 'active' : ''}
                onClick={() => setActive(index)}>
                {category}
              </li>
            ))}
        </ul>
      </div>
      <SortBy sorts={sorts} />
    </div>
  );
}
