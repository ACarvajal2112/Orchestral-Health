import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';

import './App.css';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;