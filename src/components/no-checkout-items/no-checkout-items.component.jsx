import React from 'react';
import { withRouter } from 'react-router-dom';

import { NoItemsContainer, CustomLink } from './no-checkout-items.styles';

const NoCheckoutItems = ({ history }) => (
  <NoItemsContainer>
    <h2>There are no items in your cart!</h2>
    Click <CustomLink onClick={() => history.push('/shop')}>here</CustomLink> to 
    browse the catalog.
  </NoItemsContainer>
);

export default withRouter(NoCheckoutItems);