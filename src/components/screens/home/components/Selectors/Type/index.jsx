import React from 'react';

export default function Type({ types }) {
  return <ul>{types && types.map((type, index) => <li key={index}>{type}</li>)}</ul>;
}
