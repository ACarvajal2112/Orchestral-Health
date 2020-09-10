import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import lessonReducer from './lesson/lesson-reducer';
import registerReducer from './register/register-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'lesson', 'register']
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer,
  lesson: lessonReducer,
  register: registerReducer
});

export default persistReducer(persistConfig, rootReducer);
