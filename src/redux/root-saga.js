import { all, call } from 'redux-saga/effects';

import { directorySagas } from './directory/directory.sagas';
import { lessonSagas } from './lesson/lesson.sagas';
import { registerSagas } from './register/register.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart-sagas';
import { shopSagas } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([
    call(directorySagas),
    call(lessonSagas),
    call(registerSagas),
    call(userSagas),
    call(cartSagas),
    call(shopSagas)
  ]);  
}
