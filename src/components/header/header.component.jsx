import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/OH-Logo.svg';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { 
  HeaderContainer,
  LogoContainer, 
  OptionsContainer, 
  OptionLink 
} from './header.styles';

const Header = ({ hidden, currentUser, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer>
      <Link to='/'>
        <Logo />
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
        <OptionLink to='/signin' onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
