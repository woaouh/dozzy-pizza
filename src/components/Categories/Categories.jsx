import React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';

import classes from './Categories.module.sass';

export const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <ul className={classes.Categories}>
      <li
        className={activeCategory === null ? classes.Active : ''}
        onClick={() => onClickCategory(null)}
      >
        All
      </li>
      {items.map((category, index) => (
        <li
          key={`${category}_${index}`}
          className={activeCategory === index ? classes.Active : ''}
          onClick={() => onClickCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };
