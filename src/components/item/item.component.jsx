import React from 'react';

import './item.styles.scss';

const Item = ({ name, price, imgUrl }) => (
  <div className='item'>
    <div 
      className='background-image' 
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className='add-item'>
      <h1>Add to Cart</h1>
    </div>
    <div className='content'>
      <span className='item-name'>{name.toUpperCase()}</span>
      <span className='item-price'>${price}</span>
    </div>
  </div>
);

export default Item;