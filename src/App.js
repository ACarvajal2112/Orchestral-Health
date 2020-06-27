import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';

import './App.css';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;