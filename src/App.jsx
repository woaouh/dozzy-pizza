import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';

export function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route path='/' component={Home} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    </div>
  );
}
