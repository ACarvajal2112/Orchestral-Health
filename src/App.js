import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage  from './pages/sign-in-sign-up/sign-in-sign-up.component';

import {
  auth,
  createUserDocument
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  
  unsubscribeFromFirebaseAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    // asynchronous connection to firebase to track when user logs in/out
    this.unsubscribeFromFirebaseAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userDocRef = await createUserDocument(userAuth);
        // use snapshot to set the current user
        userDocRef.onSnapshot(snapShot => {
          // set current user using firebase-provided id, spread data into rest of object
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      };
      setCurrentUser(userAuth);
    });
  }

  // close subscription when component is unmounted to prevent memory leaks
  componentWillUnmount() {
    this.unsubscribeFromFirebaseAuth();
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
    </div>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);