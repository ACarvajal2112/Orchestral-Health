import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage  from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import LessonsPage from './pages/lessons-page/lessons-page.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ({ currentUser }) => (
  <div className='app'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/lessons' component={LessonsPage} />
      {currentUser ? (
        <Redirect to='/'/>
      ) : (
        <Route path='/signin' component={SignInSignUpPage} />
      )}
    </Switch>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
