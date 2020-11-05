import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyles, MainContent } from './global.styles';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const ShopPage = lazy(() => import('./pages/shop-page/shop-page.component'));
const SignInSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout-page.component'));
const LessonsPage = lazy(() => import('./pages/lessons-page/lessons-page.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <MainContent>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/lessons' component={LessonsPage} />
            {currentUser ? (
              <Redirect to='/'/>
            ) : (
              <Route path='/signin' component={SignInSignUpPage} />
            )}
          </Suspense>
        </Switch>
      </MainContent>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
