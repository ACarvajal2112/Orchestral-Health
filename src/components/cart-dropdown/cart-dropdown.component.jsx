import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    {cartItems.length ? (
      cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))
    ) : (
      <span className='empty-msg'>
        Your cart is empty!
      </span>
    )}
    {/* <CustomButton
      type='button'
      onClick={}>CHECKOUT</CustomButton> */}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);