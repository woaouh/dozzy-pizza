import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';

import Categories from '../../components/Categories/Categories';
import SortPopup from '../../components/SortPopup/SortPopup';
import PizzaList from '../../components/PizzaList/PizzaList';

import classes from './Home.module.sass';

const categoryNames = ['Meat', 'Vegan', 'Grilled', 'Spicy', 'Closed'];
const sortItems = ['rating', 'price', 'name'];

export default function Home() {
  const dispatch = useDispatch();
  const { sortBy, category } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className={classes.Top}>
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <PizzaList />
    </div>
  );
}
