import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../redux/actions/cart';

import Pizza from '../Pizza/Pizza';
import PizzaSkeleton from '../Pizza/PizzaSkeleton';

import classes from './PizzaList.module.sass';

export default function PizzaList() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const handleAddPizza = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <ul className={classes.PizzaList}>
      {isLoaded ? items.map((pizza) => (
        <Pizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          imageUrl={pizza.imageUrl}
          price={pizza.price}
          types={pizza.types}
          sizes={pizza.sizes}
          addPizzaHandler={handleAddPizza}
          addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
        />
      )) : Array(12).fill(0).map(() => <PizzaSkeleton key={Math.random()} />)}
    </ul>
  );
}
