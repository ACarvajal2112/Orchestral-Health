import React from 'react';

import {
  CartItemContainer, /* div */
  ItemDetailsContainer /* div */
} from './cart-item.styles';

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imgUrl} alt='cart item' />
    <div className='item-details'>
      <span>{name.toUpperCase()}</span>
      <span>${price} x {quantity}</span>
    </div>
  </CartItemContainer>
);

export default CartItem;
