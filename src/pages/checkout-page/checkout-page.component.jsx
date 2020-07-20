import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { 
  selectCartItems,
  selectTotalPrice
} from '../../redux/cart/cart.selectors';

import './checkout-page.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice, history }) => (
  <div className='checkout-page'>
    {cartItems.length ? (
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <div className='no-items-container'>
        <h2>There are no items in your cart!</h2>
        <span className='custom-link' onClick={() => history.push('/shop')}>
          Click here
        </span> to browse the catalog.
      </div>
    )}
    <div className='items-total'>
      <span>Total: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
