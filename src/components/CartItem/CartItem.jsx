import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { removeCartItem, plusCartItem, minusCartItem } from '../../redux/cartSlice';

import { ReactComponent as PlusSvg } from '../../assets/svg/plus.svg';
import classes from './CartItem.module.sass';

import Button from '../Button/Button';

export default function CartItem({
  id,
  name,
  type,
  size,
  imageUrl,
}) {
  const dispatch = useDispatch();
  const items = useSelector(({ cart }) => cart.items);

  const onMinusItem = () => {
    if (items[id].items.length === 1) {
      dispatch(removeCartItem(id));
    } else {
      dispatch(minusCartItem(id));
    }
  };

  const onPlusItem = () => {
    dispatch(plusCartItem(id));
  };

  const onRemoveItem = () => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className={classes.CartItem}>
      <div className={classes.ImageContainer}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className={classes.Info}>
        <h3>{name}</h3>
        <p>
          {type}
          {' '}
          dough,
          {' '}
          {size}
          sm.
        </p>
      </div>
      <div className={classes.Count}>
        <Button
          onClick={onMinusItem}
          className={classes.CountMinus}
          circle
          outline
        >
          <PlusSvg />
        </Button>
        <b>{items[id].items.length}</b>
        <Button onClick={onPlusItem} circle outline>
          <PlusSvg />
        </Button>
      </div>
      <div className={classes.Price}>
        <b>
          $
          {(items[id].totalPrice).toFixed(2)}
        </b>
      </div>
      <div className={classes.Remove}>
        <Button onClick={onRemoveItem} className={classes.RemoveButton} circle outline>
          <PlusSvg />
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
