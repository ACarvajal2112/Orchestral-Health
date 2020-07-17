// add or increase item in cart and return array of updated cart items
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

