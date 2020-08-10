import React, { useState, useEffect, useRef } from 'react';

export function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const activeLabel = items[activeSort];
  const sortRef = useRef();

  const togglePopupVisibility = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectSort = (index) => {
    setActiveSort(index);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={togglePopupVisibility}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className='sort__popup'>
          <ul>
            {items.map((category, index) => (
              <li
                key={`${category}_${index}`}
                className={activeSort === index ? 'active' : ''}
                onClick={() => onSelectSort(index)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
