import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer, 
  DescriptionContainer, 
  QuantityContainer, 
  ProductImgContainer, 
  PriceContainer, 
  RemoveContainer
} from './checkout-item.styles';

const CheckoutItem = ({ item, removeItem }) => {
  const { title, name, price, quantity, imgUrl } = item;
  const description = `${name} ${title.slice(0,-1)}`;
  return (
    <CheckoutItemContainer>
    <ProductImgContainer
      style={{ backgroundImage: `url(${encodeURI(imgUrl)})` }} 
    />
    <DescriptionContainer>
      <span>{description.toUpperCase()}</span>
    </DescriptionContainer>
    <QuantityContainer>
      <span>{quantity}</span>
    </QuantityContainer>
    <PriceContainer>
      <span>${price * quantity}</span>
    </PriceContainer>
    <RemoveContainer>
      <i className='fad fa-times' onClick={() => removeItem({ ...item, title })} />
    </RemoveContainer>
  </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
