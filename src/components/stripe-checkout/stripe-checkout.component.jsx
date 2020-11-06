import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // convert price to cents as per Stripe requirement 
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_51HkKIEF9MH5NJX6jWhCMROUxkahrsJBn1rSIzXd4czAzHfJ7oCsJFG4V7KNQ7qsuEbcIRA2m0vQ7dUcM4V4V9qaj00FVpGdqLD';
  
  // callback to receive token returned from successful transaction
    const onToken = token => {
    console.log(token);
    alert('Payment was successful!');
  }

  return (
    <StripeCheckout 
      currency='CAD'
      label='Pay With Stripe'
      name='Orchestral Health'
      shippingAddress
      billingAddress
      description={`Total amount is $${price}`}
      amount={priceInCents}
      panelLabel='Pay With Stripe'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
