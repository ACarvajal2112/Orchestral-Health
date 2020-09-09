import { takeLatest, put } from 'redux-saga/effects'

import DirectoryActionTypes from './directory.types';

import { firestore, convertDirectorySnapshotToMap } from '../../firebase/firebase.utils';

import { fetchDirectoryDataSuccess, fetchDirectoryDataFailure } from './directory.actions';

export function* fetchDirectoryDataStartAsync() {
  try {
    const collectionRef = firestore.collection('directory');
    const snapshot = yield collectionRef.get();
    const directoryMap = yield convertDirectorySnapshotToMap(snapshot);
    yield put(fetchDirectoryDataSuccess(directoryMap));
  } catch(error) {
    yield put(fetchDirectoryDataFailure(error.message))
  }
}

export function* fetchDirectoryDataStart() {
  yield takeLatest(
    DirectoryActionTypes.FETCH_DIRECTORY_DATA_START,
    fetchDirectoryDataStartAsync
  );
}
