import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

import classes from './App.module.sass';

export default function App() {
  return (
    <div className={classes.Wrapper}>
      <Header />
      <div className={classes.Content}>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
