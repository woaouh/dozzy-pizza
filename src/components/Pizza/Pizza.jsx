import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button/Button';
import classes from './Pizza.module.sass';

export function Pizza({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onAddPizza,
  addedCount,
}) {
  const doughTypes = ['thin', 'traditional'];
  const pizzaSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: pizzaSizes[activeSize],
      type: doughTypes[activeType],
    };
    onAddPizza(obj);
  };

  return (
    <div className={classes.Pizza}>
      <img className={classes.Image} src={imageUrl} alt={name} />
      <h4 className={classes.Title}>{name}</h4>
      <div className={classes.Selector}>
        <ul>
          {doughTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              className={classNames({
                [classes.Active]: activeType === index,
                [classes.Disabled]: !types.includes(index),
              })}
              onClick={() => onSelectType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSizes.map((size, index) => (
            <li
              key={`${size}_${index}`}
              className={classNames({
                [classes.Active]: activeSize === index,
                [classes.Disabled]: !sizes.includes(size),
              })}
              onClick={() => onSelectSize(index)}
            >
              {size} sm.
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Price}>{price} $</div>
        <Button onClick={handleAddPizza} className={classes.AddButton} outline>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Add</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};
