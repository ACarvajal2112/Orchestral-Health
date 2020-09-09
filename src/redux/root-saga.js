import { all, call } from 'redux-saga/effects';

import { fetchShopDataStart } from './shop/shop.sagas';
import { fetchDirectoryDataStart } from './directory/directory.sagas';
import { fetchLessonsDataStart } from './lesson/lesson.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchShopDataStart),
    call(fetchDirectoryDataStart),
    call(fetchLessonsDataStart)
  ]);  
}
