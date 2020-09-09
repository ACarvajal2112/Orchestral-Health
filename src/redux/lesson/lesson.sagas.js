import { takeEvery, put } from 'redux-saga/effects';

import LessonActionTypes from './lesson.types';

import { firestore, convertLessonSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchLessonDataSuccess, fetchLessonDataFailure } from './lesson.actions';

export function* fetchLessonDataStartAsync() {
  try {
    const collectionRef = firestore.collection('lesson');
    const snapshot = yield collectionRef.get();
    const lessonsMap = yield convertLessonSnapshotToMap(snapshot);
    yield put(fetchLessonDataSuccess(lessonsMap));
  } catch(error) {
    yield put(fetchLessonDataFailure(error.message));
  }
}

export function* fetchLessonsDataStart() {
  yield takeEvery(
    LessonActionTypes.FETCH_LESSON_DATA_START,
    fetchLessonDataStartAsync
  );
}
