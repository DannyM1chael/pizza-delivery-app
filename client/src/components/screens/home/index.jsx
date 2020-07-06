import React, { useEffect } from 'react';
import { Category, Spinner } from '../../../components';
import { Content } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../store/actions';
import Footer from '../../Footer';

export default function Home() {
  const itemData = useSelector((state) => state.main.items);
  const categories = useSelector((state) => state.filter.categories);
  const sorts = useSelector((state) => state.filter.sorts);
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
        {itemData && itemData.map((item) => <Content key={item._id} {...item} />)}
      </div>
      <Footer />
    </div>
  );
}
