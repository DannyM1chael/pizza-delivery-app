import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchItems } from '../../../store/actions';
import Footer from '../../Footer';
import { Spinner } from '../../../components';
import { Content } from './components';

export default function Home() {
  const itemData = useSelector((state) => state.main.items);
  const categories = useSelector((state) => state.filter.categories);
  const loader = useSelector((state) => state.load.loading);
  const [activeCategory, setActiveCategory] = useState(null);

  const selectItems = () => itemData;
  const createSelectFilteredItems = (filterFunction) =>
    createSelector([selectItems], (items) => items.filter(filterFunction));

  const selectFilteredItems = React.useMemo(
    () =>
      createSelectFilteredItems(({ category }) =>
        activeCategory === null ? true : category === activeCategory,
      ),
    [activeCategory],
  );

  let filteredItems = useSelector(selectFilteredItems);
  if (activeCategory === null) {
    filteredItems = itemData;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <ul>
            <li
              className={activeCategory === null ? 'active' : ''}
              value="All"
              onClick={() => setActiveCategory(null)}>
              All
            </li>
            {categories &&
              categories.map((category, index) => (
                <li
                  key={index}
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => setActiveCategory(index)}>
                  {category}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <h2 className="content__title">Pizza</h2>
      <div className="content__items">
        {filteredItems && filteredItems.map((item) => <Content key={item._id} {...item} />)}
      </div>
      <Footer />
    </div>
  );
}
