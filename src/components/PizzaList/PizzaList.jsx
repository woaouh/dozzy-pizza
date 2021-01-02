import React from 'react';
import { useSelector } from 'react-redux';

import classes from './PizzaList.module.sass';

import Pizza from '../Pizza/Pizza';
import PizzaSkeleton from '../Pizza/PizzaSkeleton';

import sortPizza from '../../redux/selectors';

export default function PizzaList() {
  const { status, entities } = useSelector(({ pizza }) => pizza);
  const sortedPizza = useSelector(sortPizza);

  let content;

  if (status === 'loading') {
    content = Array(12).fill(0).map(() => <PizzaSkeleton key={Math.random()} />);
  } else if (status === 'failed') {
    content = <div>Something went wrong...</div>;
  } else if (status === 'succeeded') {
    content = sortedPizza.map((id) => (
      <Pizza
        key={entities[id].id}
        id={entities[id].id}
        name={entities[id].name}
        imageUrl={entities[id].imageUrl}
        price={entities[id].price}
        types={entities[id].types}
        sizes={entities[id].sizes}
      />
    ));
  }

  return <ul className={classes.PizzaList}>{content}</ul>;
}
