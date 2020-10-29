import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  ItemContainer, 
  BackgroundImageContainer, 
  AddItemContainer, 
  ContentContainer, 
  NameLabel, 
  PriceLabel,
  AddItemLabel
} from './item.styles';

const Item = ({ title, item, addItem }) => {
  const { name, price, imgUrl } = item;
  return (
    <ItemContainer>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${encodeURI(imgUrl)})`
        }}
      />
      <AddItemContainer className='add-item' onClick={() => addItem({...item, title})}>
        <AddItemLabel>Add to Cart</AddItemLabel>
      </AddItemContainer>
      <ContentContainer>
        <NameLabel>{name.toUpperCase()}</NameLabel>
        <PriceLabel>${price}</PriceLabel>
      </ContentContainer>
    </ItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(Item);
