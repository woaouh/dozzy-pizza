import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button/Button';
import { ReactComponent as PlusSvg } from '../../assets/svg/plus.svg';
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
          <PlusSvg />
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
