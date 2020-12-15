import React from 'react';
import { Button } from '../Button/Button';
import {ReactComponent as PlusSvg} from '../../assets/svg/plus.svg';

import classes from './CartItem.module.sass';

export function CartItem({
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
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className={classes.Info}>
        <h3>{name}</h3>
        <p>
          {type} dough, {size} sm.
        </p>
      </div>
      <div className={classes.Count}>
        <Button
          onClick={handleMinusItem}
          className={`${classes.CircleButton} ${classes.CountMinus}`}
          outline
        >
          <PlusSvg />
        </Button>
        <b>{totalCount}</b>
        <Button
          onClick={handlePlusItem}
          className={`${classes.CircleButton}`}
          outline
        >
          <PlusSvg />
        </Button>
      </div>
      <div className={classes.Price}>
        <b>{totalPrice} $</b>
      </div>
      <div className={classes.Remove}>
        <Button
          onClick={handleRemoveItem}
          className={`${classes.CircleButton} ${classes.RemoveButton}`} 
          outline
        >
          <PlusSvg />
        </Button>
      </div>
    </div>
  );
}
