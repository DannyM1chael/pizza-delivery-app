import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import AddBtn from '../AddBtn';

export default function Content({ id, imageUrl, name, types, sizes, price }) {
  const [typeActive, setTypeActive] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
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
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setSizeActive(index)}
                className={sizeActive === index ? 'active' : ''}>
                {size}"
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from &euro;{price}</div>
        <AddBtn id={id} type={typeActive} size={sizeActive} />
      </div>
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  types: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
};
