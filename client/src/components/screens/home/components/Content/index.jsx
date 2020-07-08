import React, { useState } from 'react';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';
import AddBtn from '../AddBtn';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Content({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  value,
  protein,
  carbohydrates,
  fats,
  composition,
}) {
  const [typeActive, setTypeActive] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
        onClick={() => setIsModalOpen(true)}
      />
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
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles}>
        <i className="close" onClick={() => setIsModalOpen(false)}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
              fill="white"></path>
          </svg>
        </i>
        <div className="modal-block">
          <div className="modal-block__image">
            <img src={imageUrl} alt="Pizza" />
          </div>
          <div className="modal-block__content">
            <h4 className="modal-block__title">{name}</h4>
            <div className="modal-block__composition">
              <div>{composition}</div>
            </div>
            <div className="modal-block__description">
              <h2 className="modal-block__value">Nutritional Value per 100 g:</h2>
              <section className="modal-block__section">
                <div>Energy value</div>
                <div>{value} ccal</div>
              </section>
              <section className="modal-block__section">
                <div>Protein</div>
                <div>{protein} g</div>
              </section>
              <section className="modal-block__section">
                <div>Carbohydrates</div>
                <div>{carbohydrates} g</div>
              </section>
              <section className="modal-block__section">
                <div>Fats</div>
                <div>{fats} g</div>
              </section>
            </div>
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
        </div>
      </Modal>
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  types: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  protein: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  composition: PropTypes.string.isRequired,
};
