import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={encodeURI(imgUrl)} alt='cart item' />
    <ItemDetailsContainer>
      <span>{name.toUpperCase()}</span>
      <span>${price} x {quantity}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
