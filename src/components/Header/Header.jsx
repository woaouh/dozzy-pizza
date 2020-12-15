import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSVG from '../../assets/svg/pizza-logo.svg';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import classes from './Header.module.sass';

import { Button } from '../Button/Button';

export function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  return (
    <div className={classes.Header}>
      <div className={`container ${classes.HeaderContainer}`}>
        <Link to='/'>
          <div className={classes.Logo}>
            <img width='38' src={logoSVG} alt='Pizza logo' />
            <div>
              <h1>Dozzy Pizza</h1>
              <p>the best pizza in the world</p>
            </div>
          </div>
        </Link>

        <div>
          <Link to='/cart'>
            <Button className={classes.CartButton}>
              <span>{totalPrice} $</span>
              <div className={classes.Delimiter}></div>
              <CartSvg />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
