import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectItemCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, dispatch }) => (
  <div 
    className='cart-icon' 
    onClick={() => dispatch(toggleCartHidden())}>
      <i className='fal fa-shopping-cart fa-3x'></i>
      <span className='incrementer'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
});

export default connect(mapStateToProps)(CartIcon);