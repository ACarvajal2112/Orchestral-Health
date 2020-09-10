import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutOverview from '../../components/checkout-overview/checkout-overview.component';
import NoCheckoutItems from '../../components/no-checkout-items/no-checkout-items.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer } from './checkout-page.styles';

const CheckoutPage = ({ cartItems }) => (
  <CheckoutPageContainer>
    {cartItems.length ? <CheckoutOverview cartItems={cartItems}/> : <NoCheckoutItems />}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
