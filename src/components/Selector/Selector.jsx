import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Selector.module.sass';

export default function Selector({
  types, sizes, activeType, activeSize, onSelectType, onSelectSize,
}) {
  const doughTypes = ['thin', 'traditional'];
  const pizzaSizes = [26, 30, 40];

  function renderOptions(option, activeKind, kinds, handler) {
    return option.map((type, index) => (
      <div
        key={type}
        className={classNames({
          [classes.Active]: activeKind === index,
          [classes.Disabled]: !kinds.includes(option === doughTypes ? index : type),
        })}
        onClick={() => handler(index)}
        onKeyUp={() => handler(index)}
        role="button"
        tabIndex="0"
      >
        {type}
      </div>
    ));
  }

  return (
    <div className={classes.Selector}>
      <div className={classes.SelectorList}>
        {renderOptions(doughTypes, activeType, types, onSelectType)}
      </div>
      <div className={classes.SelectorList}>
        {renderOptions(pizzaSizes, activeSize, sizes, onSelectSize)}
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
