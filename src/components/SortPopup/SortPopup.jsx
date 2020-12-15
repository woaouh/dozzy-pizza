import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow-top.svg';

import classes from './SortPopup.module.sass';

export const SortPopup = memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = activeSortType;
  const sortRef = useRef();

  const togglePopupVisibility = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectSort = (type) => {
    onClickSortType(type);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={classes.Sort}>
      <div className={classes.Label}>
        <ArrowSvg className={visiblePopup ? classes.Rotated : ''} />
        <b>Sort by:</b>
        <span onClick={togglePopupVisibility}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className={classes.SortPopup}>
          <ul>
            {items.map((type, index) => (
              <li
                key={`${type}_${index}`}
                className={activeSortType === type ? classes.Active : ''}
                onClick={() => onSelectSort(type)}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSortType: PropTypes.string.isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = { items: [], activeSortType: 'popularity' };
