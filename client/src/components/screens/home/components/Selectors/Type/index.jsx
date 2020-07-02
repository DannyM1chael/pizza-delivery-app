import React, { useState } from 'react';

export default function Type({ types }) {
  const [typeActive, setTypeActive] = useState(0);
  return (
    <ul>
      {types &&
        types.map((type, index) => (
          <li
            key={index}
            onClick={() => setTypeActive(index)}
            className={typeActive === index ? 'active' : ''}>
            {type}
          </li>
        ))}
    </ul>
  );
}
