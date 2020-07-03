import React, { useEffect } from 'react';
import { Category } from '../../../components';
import { Content } from './components';
import Spinner from '../../Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../store/actions';

export default function Home() {
  const itemData = useSelector((state) => state.main.items.payload);
  const categories = useSelector((state) => state.cats.categories);
  const sorts = useSelector((state) => state.cats.sorts);
  const loader = useSelector((state) => state.load.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Category categories={categories} sorts={sorts} />
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {itemData && itemData.map((item) => <Content key={item.id} {...item} />)}
      </div>
    </div>
  );
}
