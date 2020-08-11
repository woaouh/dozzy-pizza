import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';

export function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route path='/' render={() => <Home items={pizzas} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    </div>
  );
}
