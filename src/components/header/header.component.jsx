import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { 
  HeaderContainer, /* div */
  LogoContainer, /* div */
  OptionsContainer, /* div */
  OptionLink /* Link */
} from './header.styles';

const Header = ({ hidden, currentUser }) => (
  <HeaderContainer>
    <LogoContainer>
      <Link to='/'>
        <img 
          src={require('../../assets/drum-logo.png')} 
          alt='drum logo' 
        />
      </Link>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/lessons'>
        LESSONS
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink to='/signin' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? ( <CartDropdown /> ) : null }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
