import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, removeItem }) => {
  const { name, price, quantity, imgUrl } = item;
  return (
    <div className='checkout-item'>
    <div 
      className='product-img' 
      style={{ backgroundImage: `url(${imgUrl})` }} 
    />
    <div className='description'>
      <span>{name}</span>
    </div>
    <div className='quantity'>
      <span>{quantity}</span>
    </div>
    <div className='price'>
      <span>${price * quantity}</span>
    </div>
    <div className='remove'>
      <i className='fad fa-times' onClick={() => removeItem(item)} />
    </div>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
