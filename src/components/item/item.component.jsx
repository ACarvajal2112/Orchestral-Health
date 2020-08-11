import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  ItemContainer, /* div */
  BackgroundImageContainer, /* div */
  AddItemContainer, /* div */
  ContentContainer, /* div */
  NameContainer, /* span */
  PriceContainer /* span */
} from './item.styles';

const Item = ({ item, addItem }) => {
  const { name, price, imgUrl } = item;
  return (
    <ItemContainer>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <AddItemContainer className='add-item' onClick={() => addItem(item)}>
        <h1>Add to Cart</h1>
      </AddItemContainer>
      <ContentContainer>
        <NameContainer>{name.toUpperCase()}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </ContentContainer>
    </ItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(Item);
