import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const selectCartItems = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

// export const selectCartItemsCount = createSelector(
//   [cartSelector],
//   cartItems => {}
// );