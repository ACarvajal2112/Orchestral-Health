import { all, call, takeLatest, put } from 'redux-saga/effects';

import LessonActionTypes from './lesson.types';

import { firestore, convertLessonSnapshotToMap } from '../../firebase/firebase.utils';

import { clearPendingData } from '../register/register.actions';

import { 
  fetchLessonDataSuccess, 
  fetchLessonDataFailure, 
  setLessonData, 
  setDefaultDayOfWeek, 
  toggleLessonHidden,
  clearLessonTimesData
} from './lesson.actions';

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

export function* viewLessonTimes({ payload: { lessonData, instructorId } }) {
  yield put(setLessonData(lessonData));
  yield put(setDefaultDayOfWeek(instructorId));
  yield put(toggleLessonHidden());
}

export function* closeLessonTimes() {
  yield put(clearLessonTimesData());
  yield put(clearPendingData());
  yield put(toggleLessonHidden());
}

export function* fetchLessonsDataStart() {
  yield takeLatest(
    LessonActionTypes.FETCH_LESSON_DATA_START,
    fetchLessonDataStartAsync
  );
}

export function* onViewLessonTimes() {
  yield takeLatest(
    LessonActionTypes.VIEW_LESSON_TIMES,
    viewLessonTimes
  );
}

export function* onCloseLessonTimes() {
  yield takeLatest(
    LessonActionTypes.CLOSE_LESSON_TIMES,
    closeLessonTimes
  );
}

export function* lessonSagas() {
  yield all([
    call(fetchLessonsDataStart), 
    call(onViewLessonTimes),
    call(onCloseLessonTimes)
  ])
}
