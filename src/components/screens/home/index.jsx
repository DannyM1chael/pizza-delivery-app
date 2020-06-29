import React from 'react';
import { Type, Size, AddBtn } from './components';

export default function Home({ items, types, sizes }) {
  return (
    <>
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {items.map((item, index) => {
          return (
            <div className="pizza-block" key={index}>
              <img className="pizza-block__image" src={item.img} alt="Pizza" />
              <h4 className="pizza-block__title">{item.name}</h4>
              <div className="pizza-block__selector">
                <Type types={types} />
                <Size sizes={sizes} />
              </div>
              <div className="pizza-block__bottom">
                <div className="pizza-block__price">from $10</div>
                <AddBtn />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
