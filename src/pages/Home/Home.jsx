import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';

import { Categories } from '../../components/Categories/Categories';
import { SortPopup } from '../../components/SortPopup/SortPopup';
import { Pizza } from '../../components/Pizza/Pizza';
import { PizzaSkeleton } from '../../components/Pizza/PizzaSkeleton';

const categoryNames = ['Meat', 'Vegan', 'Grilled', 'Spicy', 'Closed'];
const sortItems = ['rating', 'price', 'name'];

export function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
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
    <div className='container'>
      <div className='content__top'>
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
      <h2 className='content__title'>All</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaSkeleton key={index} />)}
      </div>
    </div>
  );
}
