import { useSelector, useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../redux/actions/cart';

import { Pizza } from "../Pizza/Pizza";
import { PizzaSkeleton } from '../Pizza/PizzaSkeleton';

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
          onAddPizza={handleAddPizza}
          addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
          {...pizza}
        />
      )) : Array(12).fill(0).map((_, index) => <PizzaSkeleton key={index} />)}
    </ul>
  )
}
