import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import { ReactComponent as PlusSvg } from '../../assets/svg/plus.svg';

import classes from './CartItem.module.sass';

export default function CartItem({
  id,
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onRemoveItem,
  onPlusItem,
  onMinusItem,
}) {
  const handleRemoveItem = () => {
    onRemoveItem(id);
  };

  const handlePlusItem = () => {
    onPlusItem(id);
  };

  const handleMinusItem = () => {
    onMinusItem(id);
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
          onClick={handleMinusItem}
          className={classes.CountMinus}
          circle
          outline
        >
          <PlusSvg />
        </Button>
        <b>{totalCount}</b>
        <Button onClick={handlePlusItem} circle outline>
          <PlusSvg />
        </Button>
      </div>
      <div className={classes.Price}>
        <b>
          $
          {totalPrice.toFixed(2)}
        </b>
      </div>
      <div className={classes.Remove}>
        <Button onClick={handleRemoveItem} className={classes.RemoveButton} circle outline>
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
  totalPrice: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onPlusItem: PropTypes.func.isRequired,
  onMinusItem: PropTypes.func.isRequired,
};
