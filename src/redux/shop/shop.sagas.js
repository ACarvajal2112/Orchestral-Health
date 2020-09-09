// listens for every action of a specific type passed into it 
import { takeLatest, call, put } from 'redux-saga/effects'; 

import ShopActionTypes from './shop.types';

import { firestore, convertShopSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchShopDataSuccess, fetchShopDataFailure } from './shop.actions';

export function* fetchShopDataAsync() {
  try {
    const collectionRef = firestore.collection('shop');
    const shopSnapshot = yield collectionRef.get();
    const shopMap = yield call(convertShopSnapshotToMap, shopSnapshot);
    yield put(fetchShopDataSuccess(shopMap));
  } catch(error) {
    yield put(fetchShopDataFailure(error.message))
  }
}

export function* fetchShopDataStart() {
  // pause whenever specific action type comes in
  // first param type to listen for, 2nd param, 2nd gen function that runs in response to this takeEvery listener
  // takevery creates non-blocking call
  yield takeLatest(
    ShopActionTypes.FETCH_SHOP_DATA_START, 
    fetchShopDataAsync
  );
}