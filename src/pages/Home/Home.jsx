import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizza } from '../../redux/pizzaSlice';

import Categories from '../../components/Categories/Categories';
import SortPopup from '../../components/SortPopup/SortPopup';
import PizzaList from '../../components/PizzaList/PizzaList';

import classes from './Home.module.sass';

const categoryNames = ['Meat', 'Vegan', 'Grilled', 'Spicy', 'Closed'];
const sortItems = ['rating', 'price', 'name'];

export default function Home() {
  const dispatch = useDispatch();
  const filters = useSelector(({ pizza }) => pizza.filters);

  useEffect(() => {
    dispatch(fetchPizza(filters));
  }, [filters]);

  return (
    <div className="container">
      <div className={classes.Top}>
        <Categories
          items={categoryNames}
          activeCategory={filters.category}
        />
        <SortPopup
          items={sortItems}
          activeSortType={filters.sort}
        />
      </div>
      <PizzaList />
    </div>
  );
}
