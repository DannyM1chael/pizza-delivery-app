import React from 'react';

export default function Size({ sizes }) {
  return <ul>{sizes && sizes.map((size, index) => <li key={index}>{size}</li>)}</ul>;
}
