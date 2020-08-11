import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer, /* div */
  DescriptionContainer, /* div */
  QuantityContainer, /* div */
  ProductImgContainer, /* div */
  PriceContainer, /* div */
  RemoveContainer /* div */
} from './checkout-item.styles';

const CheckoutItem = ({ item, removeItem }) => {
  const { name, price, quantity, imgUrl } = item;
  return (
    <CheckoutItemContainer>
    <ProductImgContainer
      style={{ backgroundImage: `url(${imgUrl})` }} 
    />
    <DescriptionContainer>
      <span>{name}</span>
    </DescriptionContainer>
    <QuantityContainer>
      <span>{quantity}</span>
    </QuantityContainer>
    <PriceContainer>
      <span>${price * quantity}</span>
    </PriceContainer>
    <RemoveContainer>
      <i className='fad fa-times' onClick={() => removeItem(item)} />
    </RemoveContainer>
  </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
