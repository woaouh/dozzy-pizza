import React from 'react';
import { useSelector } from 'react-redux';

import classes from './PizzaList.module.sass';

import Pizza from '../Pizza/Pizza';
import PizzaSkeleton from '../Pizza/PizzaSkeleton';

export default function PizzaList() {
  const { status, items } = useSelector(({ pizza }) => pizza);

  let content;

  if (status === 'loading') {
    content = Array(12).fill(0).map(() => <PizzaSkeleton key={Math.random()} />);
  } else if (status === 'failed') {
    content = <div>Something went wrong...</div>;
  } else if (status === 'succeeded') {
    content = items.map((pizza) => (
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
