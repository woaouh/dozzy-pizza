import React, {
  useState,
  useEffect,
  useRef,
  memo,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setSort } from '../../redux/pizzaSlice';

import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow-top.svg';
import classes from './SortPopup.module.sass';

function SortPopup({ items, activeSortType }) {
  const dispatch = useDispatch();
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

  const onSelectSortType = useCallback((type) => {
    dispatch(setSort(type));
  }, []);

  const onSelectSort = (type) => {
    onSelectSortType(type);
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
        <span onClick={togglePopupVisibility} onKeyUp={togglePopupVisibility} role="button" tabIndex="0">{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className={classes.SortPopup}>
          <div className={classes.SortList}>
            {items.map((type) => (
              <div
                key={type}
                className={activeSortType === type ? classes.Active : ''}
                onClick={() => onSelectSort(type)}
                onKeyUp={() => onSelectSort(type)}
                role="button"
                tabIndex="0"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(SortPopup);
SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSortType: PropTypes.string.isRequired,
};
