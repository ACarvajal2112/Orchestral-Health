import React from 'react';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className='cart-icon'>
      <i className='fal fa-shopping-cart fa-3x'></i>
      <span className='incrementer'>0</span>
  </div>
);

export default CartIcon;