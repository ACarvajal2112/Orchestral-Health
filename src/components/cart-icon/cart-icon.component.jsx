import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectItemCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartIconContainer, IncrementerContainer } from './cart-icon.styles';

const CartIcon = ({ itemCount, dispatch }) => (
  <CartIconContainer
    onClick={() => dispatch(toggleCartHidden())}>
      <i className='fal fa-shopping-cart fa-3x'></i>
      <IncrementerContainer itemCount={itemCount}>
        {itemCount}
      </IncrementerContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
});

export default connect(mapStateToProps)(CartIcon);
