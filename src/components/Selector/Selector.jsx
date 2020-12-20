import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Selector.module.sass';

export default function Selector({
  types,
  sizes,
  activeType,
  activeSize,
  onSelectType,
  onSelectSize,
}) {
  const doughTypes = ['thin', 'traditional'];
  const pizzaSizes = [26, 30, 40];

  return (
    <div className={classes.Selector}>
      <div className={classes.SelectorList}>
        {doughTypes.map((type, index) => (
          <div
            key={type}
            className={classNames({
              [classes.Active]: activeType === index,
              [classes.Disabled]: !types.includes(index),
            })}
            onClick={() => onSelectType(index)}
            onKeyUp={() => onSelectType(index)}
            role="button"
            tabIndex="0"
          >
            {type}
          </div>
        ))}
      </div>
      <div className={classes.SelectorList}>
        {pizzaSizes.map((size, index) => (
          <div
            key={size}
            className={classNames({
              [classes.Active]: activeSize === index,
              [classes.Disabled]: !sizes.includes(size),
            })}
            onClick={() => onSelectSize(index)}
            onKeyUp={() => onSelectSize(index)}
            role="button"
            tabIndex="0"
          >
            {size}
            sm.
          </div>
        ))}
      </div>
    </div>
  );
}

Selector.propTypes = {
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeType: PropTypes.number.isRequired,
  activeSize: PropTypes.number.isRequired,
  onSelectType: PropTypes.func.isRequired,
  onSelectSize: PropTypes.func.isRequired,
};
