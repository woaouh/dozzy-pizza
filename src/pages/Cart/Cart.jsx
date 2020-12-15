import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import emptyCartImage from '../../assets/img/empty-cart.png';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as TrashSvg } from '../../assets/svg/trash.svg';

import { CartItem } from '../../components/CartItem/CartItem';

import classes from './Cart.module.sass';

import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from '../../redux/actions/cart';
import { Button } from '../../components/Button/Button';

export function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (
      window.confirm(
        'Are you sure you want to remove this pizza from the cart?'
      )
    ) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <div className={classes.Cart}>
      <div className={`${classes.Container} container`}>
        {totalCount ? (
          <div className='cart'>
            <div className={classes.Top}>
              <h2 className={classes.Title}>
                <CartSvg />
                Cart
              </h2>
              <div className={classes.Clear}>
                <TrashSvg />
                <span onClick={onClearCart}>Empty cart</span>
              </div>
            </div>
            <div className='content__items'>
              {addedPizzas.map((pizza) => (
                <CartItem
                  key={`${pizza.id}_${pizza.name}`}
                  id={pizza.id}
                  name={pizza.name}
                  type={pizza.type}
                  size={pizza.size}
                  imageUrl={pizza.imageUrl}
                  totalPrice={items[pizza.id].totalPrice}
                  totalCount={items[pizza.id].items.length}
                  onRemoveItem={onRemoveItem}
                  onPlusItem={onPlusItem}
                  onMinusItem={onMinusItem}
                />
              ))}
            </div>
            <div className={classes.Bottom}>
              <div className={classes.Details}>
                <span>
                  Quantity: <b>{totalCount}</b>{' '}
                </span>
                <span>
                  Amount of the order: <b>{totalPrice} $</b>{' '}
                </span>
              </div>
              <div className={classes.Buttons}>
                <Link
                  to='/'
                >
                  <Button className={classes.BlackButton}>Turn back</Button>
                </Link>
                <div>
                  <Button className={classes.PayButton}>Buy now</Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.EmptyCart}>
            <h2>Cart is empty</h2>
            <p>
              You did not choose a pizza yet.
              <br />
              If you would like to order something just get back to the home
              page.
            </p>
            <img src={emptyCartImage} alt='Empty cart' />
            <Link to='/' >
              <Button className={classes.BlackButton}>Turn back</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
