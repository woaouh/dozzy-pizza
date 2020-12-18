import React, { memo } from 'react';
import PropTypes from 'prop-types';

import classes from './Categories.module.sass';

function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className={classes.Categories}>
      <div
        className={activeCategory === null ? classes.Active : ''}
        onClick={() => onClickCategory(null)}
        onKeyUp={() => onClickCategory(null)}
        role="button"
        tabIndex="0"
      >
        All
      </div>
      {items.map((category, index) => (
        <div
          key={category}
          className={activeCategory === index ? classes.Active : ''}
          onClick={() => onClickCategory(index)}
          onKeyUp={() => onClickCategory(index)}
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
  activeCategory: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: 'Rating',
};
