import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import { ReactComponent as PlusSvg } from '../../assets/svg/plus.svg';
import classes from './Pizza.module.sass';
import Selector from '../UI/Selector/Selector';

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
    <li className={classes.Pizza}>
      <img className={classes.Image} src={imageUrl} alt={name} />
      <h4 className={classes.Title}>{name}</h4>
      <Selector
        types={types}
        sizes={sizes}
        onSelectSize={onSelectSize}
        onSelectType={onSelectType}
        activeSize={activeSize}
        activeType={activeType}
      />
      <div className={classes.Bottom}>
        <div className={classes.Price}>{price} $</div>
        <Button onClick={handleAddPizza} className={classes.AddButton} outline>
          <PlusSvg />
          <span>Add</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </li>
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
