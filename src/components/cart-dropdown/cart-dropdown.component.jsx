import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/checkout')
  }

  return (
    <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(item => (
          <CartItem key={item.name} item={item} />
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
        handleClick();
        dispatch(toggleCartHidden())
      }}>
      CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
