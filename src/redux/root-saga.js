import { all, call } from 'redux-saga/effects';

import { fetchShopDataStart } from './shop/shop.sagas';
import { fetchDirectoryDataStart } from './directory/directory.sagas';
import { fetchLessonsDataStart } from './lesson/lesson.sagas';
import { confirmLessonRegistrationStart } from './register/register.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchShopDataStart),
    call(fetchDirectoryDataStart),
    call(fetchLessonsDataStart),
    call(confirmLessonRegistrationStart),
    call(userSagas)
  ]);  
}
