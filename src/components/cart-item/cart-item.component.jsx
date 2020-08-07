import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imgUrl} alt='cart item' />
    <div className='item-details'>
      <span>{name.toUpperCase()}</span>
      <span>${price} x {quantity}</span>
    </div>
  </div>
);

export default CartItem;
