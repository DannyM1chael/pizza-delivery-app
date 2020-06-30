import React, { useState, useEffect } from 'react';
import { sorts, categories } from '../../../api';
import { Category, Banner } from '../../../components';
import { Content } from './components';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        setItems(json.items);
      });
  }, []);

  return (
    <div className="container">
      <Banner />
      <Category categories={categories} sorts={sorts} />
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {items.map((item) => (
          <Content key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
