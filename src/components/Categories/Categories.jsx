import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setCategory } from '../../redux/pizzaSlice';

import classes from './Categories.module.sass';

function Categories({ activeCategory, items }) {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className={classes.Categories}>
      <div
        className={activeCategory === null ? classes.Active : ''}
        onClick={() => onSelectCategory(null)}
        onKeyUp={() => onSelectCategory(null)}
        role="button"
        tabIndex="0"
      >
        All
      </div>
      {items.map((category, index) => (
        <div
          key={category}
          className={activeCategory === index ? classes.Active : ''}
          onClick={() => onSelectCategory(index)}
          onKeyUp={() => onSelectCategory(index)}
          role="button"
          tabIndex="0"
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default memo(Categories);

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Categories.defaultProps = {
  activeCategory: 'Rating',
};
