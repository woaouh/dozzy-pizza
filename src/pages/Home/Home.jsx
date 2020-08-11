import React from 'react';

import { Categories } from '../../components/Categories/Categories';
import { SortPopup } from '../../components/SortPopup/SortPopup';
import { Pizza } from '../../components/Pizza/Pizza';

export function Home({ items }) {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={['Meat', 'Vegan', 'Grilled', 'Spicy', 'Closed']} />
        <SortPopup items={['Popularity', 'Price', 'Alphabetically']} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items.map((pizza) => (
          <Pizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
