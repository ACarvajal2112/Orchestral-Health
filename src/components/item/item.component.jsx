import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import './item.styles.scss';

const Item = ({ item, addItem }) => {
  const { name, price, imgUrl } = item;
  return (
    <div className='item'>
      <div 
        className='background-image' 
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className='add-item' onClick={() => addItem(item)}>
        <h1>Add to Cart</h1>
      </div>
      <div className='content'>
        <span className='item-name'>{name.toUpperCase()}</span>
        <span className='item-price'>${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(Item);