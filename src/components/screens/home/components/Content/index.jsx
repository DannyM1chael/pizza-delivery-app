import React from 'react';
import { Type, Size, AddBtn } from '../';

export default function Content({ imageUrl, name, types, sizes, price }) {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <Type types={types} />
        <Size sizes={sizes} />
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from ${price}</div>
        <AddBtn />
      </div>
    </div>
  );
}
