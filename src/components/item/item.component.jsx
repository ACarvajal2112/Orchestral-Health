import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  ItemContainer, 
  BackgroundImageContainer, 
  AddItemContainer, 
  ContentContainer, 
  NameContainer, 
  PriceContainer 
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
