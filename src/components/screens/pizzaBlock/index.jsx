import React from 'react';
import { Type, Size, AddBtn } from './components';

export default function PizzaBlock({ items, types, sizes }) {
  return (
    <>
      <h2 class="content__title">Pizza</h2>
      <div class="content__items">
        {items.map((item, index) => {
          return (
            <div class="pizza-block">
              <img class="pizza-block__image" src={item.img} alt="Pizza" />
              <h4 class="pizza-block__title">{item.name}</h4>
              <div class="pizza-block__selector">
                <Type types={types} />
                <Size sizes={sizes} />
              </div>
              <div class="pizza-block__bottom">
                <div class="pizza-block__price">from $10</div>
                <AddBtn />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
