import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';

import './App.css';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;