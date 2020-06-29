import React from 'react';

export default function Size({ sizes }) {
  return (
    <ul>
      {sizes.map((size, index) => (
        <li key={index}>{size}</li>
      ))}
    </ul>
  );
}
