import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user-reducer';

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer
});

export default rootReducer;