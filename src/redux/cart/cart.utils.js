// Add or increase item quantity in cart and return array of updated cart items.
export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItemExists = cartItems.find(
    item => item.id === itemToAdd.id
  );
  if (cartItemExists) {
    return cartItems.map(item => 
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

// Remove or decrease item in cart, return update or cleared array.
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.id !== itemToRemove.id
    );
  }

  return cartItems.map(
    cartItem => 
      cartItem.id === itemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
  );
};
