import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from '../../redux/cartSlice';

import emptyCartImage from '../../assets/img/empty-cart.png';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as TrashSvg } from '../../assets/svg/trash.svg';
import classes from './Cart.module.sass';

import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';

export default function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => items[key].items[0]);

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={classes.Cart}>
      <div className={`${classes.Container} container`}>
        {totalCount ? (
          <div className="cart">
            <div className={classes.Top}>
              <h2 className={classes.Title}>
                <CartSvg />
                Cart
              </h2>
              <div className={classes.Clear}>
                <TrashSvg />
                <span onClick={onClearCart} onKeyUp={onClearCart} role="button" tabIndex="0">Empty cart</span>
              </div>
            </div>
            <div>
              {addedPizzas.map((pizza) => (
                <CartItem
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  type={pizza.type}
                  size={pizza.size}
                  imageUrl={pizza.imageUrl}
                />
              ))}
            </div>
            <div className={classes.Bottom}>
              <div className={classes.Details}>
                <span>
                  Quantity:
                  {' '}
                  <b>{totalCount}</b>
                </span>
                <span>
                  Amount of the order:
                  {' '}
                  <b>
                    $
                    {totalPrice.toFixed(2)}
                  </b>
                </span>
              </div>
              <div className={classes.Buttons}>
                <Link
                  to="/"
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
            <img src={emptyCartImage} alt="Empty cart" />
            <Link to="/">
              <Button className={classes.BlackButton}>Turn back</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
