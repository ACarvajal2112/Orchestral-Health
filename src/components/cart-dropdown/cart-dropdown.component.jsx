import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer, /* div */
  CartItemsContainer /* div */
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <span className='empty-msg'>
          Your cart is empty!
        </span>
      )}
    </CartItemsContainer>
    <CustomButton 
      type='button' 
      onClick={() => { 
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>
      CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
