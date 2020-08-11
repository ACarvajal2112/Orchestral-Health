import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutOverview from '../../components/checkout-overview/checkout-overview.component';
import NoCheckoutItems from '../../components/no-checkout-items/no-checkout-items.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems }) => (
  <div className='checkout-page'>
    {cartItems.length ? <CheckoutOverview cartItems={cartItems}/> : <NoCheckoutItems />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
