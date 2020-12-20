import React from 'react';
import { useSelector } from 'react-redux';

import classes from './PizzaList.module.sass';

import Pizza from '../Pizza/Pizza';
import PizzaSkeleton from '../Pizza/PizzaSkeleton';

export default function PizzaList() {
  const { status, items } = useSelector(({ pizza }) => pizza);
  const sort = useSelector(({ pizza }) => pizza.filters.sort);
  const category = useSelector(({ pizza }) => pizza.filters.category);

  function sortItems(arr) {
    let result;
    let filteredByCategoryItems = arr;
    if (category !== null) {
      filteredByCategoryItems = arr.slice().filter((pizza) => pizza.category === category);
    }
    if (sort === 'price') {
      result = filteredByCategoryItems.slice().sort((a, b) => a.price - b.price);
    }
    if (sort === 'rating') {
      result = filteredByCategoryItems.slice().sort((a, b) => a.rating - b.rating).reverse();
    }
    if (sort === 'name') {
      result = filteredByCategoryItems.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }

  let content;

  if (status === 'loading') {
    content = Array(12).fill(0).map(() => <PizzaSkeleton key={Math.random()} />);
  } else if (status === 'failed') {
    content = <div>Something went wrong...</div>;
  } else if (status === 'succeeded') {
    const sortedPizza = sortItems(items);
    content = sortedPizza.map((pizza) => (
      <Pizza
        key={pizza.id}
        id={pizza.id}
        name={pizza.name}
        imageUrl={pizza.imageUrl}
        price={pizza.price}
        types={pizza.types}
        sizes={pizza.sizes}
      />
    ));
  }

  return <ul className={classes.PizzaList}>{content}</ul>;
}
