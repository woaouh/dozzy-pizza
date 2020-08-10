import React, { useState } from 'react';

export function Categories({ items }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const onSelectCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          All
        </li>
        {items.map((category, index) => (
          <li
            key={`${category}_${index}`}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onSelectCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
