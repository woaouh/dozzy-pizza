import { createSelector } from '@reduxjs/toolkit';

function filterTickets(ids, pizza, category) {
  return category !== null ? ids.slice().filter((id) => pizza[id].category === category) : ids;
}

const sortPizza = createSelector(
  [
    ({ pizza }) => pizza.ids,
    ({ pizza }) => pizza.entities,
    ({ pizza }) => pizza.filters.sort,
    ({ pizza }) => pizza.filters.category,
  ],
  (ids, entities, sort, category) => {
    const filteredByCategoryItems = filterTickets(ids, entities, category);
    switch (sort) {
      case 'price':
        return filteredByCategoryItems.slice()
          .sort((a, b) => entities[a].price - entities[b].price);
      case 'rating':
        return filteredByCategoryItems.slice()
          .sort((a, b) => entities[a].rating - entities[b].rating).reverse();
      case 'name':
        return filteredByCategoryItems.slice()
          .sort((a, b) => entities[a].name.localeCompare(entities[b].name));
      default:
        return entities;
    }
  },
);

export default sortPizza;
