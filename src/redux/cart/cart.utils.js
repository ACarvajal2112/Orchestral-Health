// Add or increase item quantity in cart and return array of updated cart items.
export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItemExists = cartItems.find(
    ({ name, title }) => name === itemToAdd.name && title === itemToAdd.title
  );
  if (cartItemExists) {
    // increase existing cart item's quantity by 1
    return cartItems.map(item => 
      item.name === itemToAdd.name && item.title === itemToAdd.title 
      ? { ...item, quantity: item.quantity + 1 } 
      : item
    );
  }
  // add new cart item to list
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

// Remove or decrease item in cart, return update or cleared array.
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    ({ name, title }) => name === itemToRemove.name && title === itemToRemove.title
  );

  if (existingCartItem.quantity === 1) {
    // filter existing cart item from list
    return cartItems.filter(
      ({ name, title }) => !(name === itemToRemove.name && title === itemToRemove.title)
    );
  }
  // decrease existing cart item's quantity by 1
  return cartItems.map(
    cartItem => 
      cartItem.name === itemToRemove.name && cartItem.title === itemToRemove.title 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
  );
};
