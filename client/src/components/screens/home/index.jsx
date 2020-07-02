import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { sorts, categories } from '../../../api';
import { Category, Banner } from '../../../components';
import { Content } from './components';

export default function Home() {
  const [items, setItems] = useState([]);

  const API = 'http://localhost:4000/';

  useEffect(() => {
    axios.get(API).then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="container">
      <Banner />
      <Category categories={categories} sorts={sorts} />
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {items && items.map((item) => <Content key={item.id} {...item} />)}
      </div>
    </div>
  );
}
