import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const selectCartHidden = createSelector(
  [cartSelector],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

// select accumulated quantity of items in cart
export const selectItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedValue, currentItem) => 
    accumulatedValue += currentItem.quantity
      , 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedValue, cartItem) => 
    accumulatedValue + cartItem.price * cartItem.quantity
    , 0)
);
