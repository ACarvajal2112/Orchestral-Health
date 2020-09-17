import React from 'react';
import { useHistory } from 'react-router-dom';

import { NoItemsContainer, CustomLink } from './no-checkout-items.styles';

const NoCheckoutItems = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/shop');
  }

  return (
    <NoItemsContainer>
      <h2>There are no items in your cart!</h2>
      Click <CustomLink onClick={() => handleClick()}>here</CustomLink> to 
      browse the catalog.
  </NoItemsContainer>
  );

};

export default NoCheckoutItems;
