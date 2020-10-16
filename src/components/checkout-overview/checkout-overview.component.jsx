import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectTotalPrice } from '../../redux/cart/cart.selectors';

import {
  CheckoutOverviewContainer, 
  HeaderContainer, 
  HeaderBlock, 
  HeaderTitle, 
  ItemsTotalContainer,
  CheckoutItemList
} from './checkout-overview.styles';

const CheckoutOverview = ({ cartItems, totalPrice }) => (
  <CheckoutOverviewContainer>
    <HeaderContainer>
      <HeaderBlock>
        <HeaderTitle>Product</HeaderTitle>
      </HeaderBlock>
      <HeaderBlock>
        <HeaderTitle>Description</HeaderTitle>
      </HeaderBlock>
      <HeaderBlock>
        <HeaderTitle>Quantity</HeaderTitle>
      </HeaderBlock>
      <HeaderBlock>
        <HeaderTitle>Price</HeaderTitle>
      </HeaderBlock>
      <HeaderBlock>
        <HeaderTitle>Remove</HeaderTitle>
      </HeaderBlock>
    </HeaderContainer>
    <CheckoutItemList>
      {cartItems.map(item => (
        <li key={item.name}>
          <CheckoutItem key={item.name} item={item} />
        </li>
      ))}
    </CheckoutItemList>
    <ItemsTotalContainer>
      <span>Total:</span> ${totalPrice}
    </ItemsTotalContainer>
  </CheckoutOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(CheckoutOverview);
