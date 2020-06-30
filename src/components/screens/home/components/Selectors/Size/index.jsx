import React, { useState } from 'react';

export default function Size({ sizes }) {
  const [sizeActive, setSizeActive] = useState(0);
  return (
    <ul>
      {sizes &&
        sizes.map((size, index) => (
          <li
            key={index}
            onClick={() => setSizeActive(index)}
            className={sizeActive === index ? 'active' : ''}>
            {size}
          </li>
        ))}
    </ul>
  );
}
