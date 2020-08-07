import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import lessonReducer from './lesson/lesson-reducer';

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer,
  lesson: lessonReducer 
});

export default rootReducer;