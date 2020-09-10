import { all, call, takeLatest, put } from 'redux-saga/effects';

import RegisterActionTypes from './register.types';

import { 
  registerPendingLessons, 
  updateRegisteredStatus, 
  addLessonToPending,
  removeLessonFromPending,
  incrementLessonsPerWeek,
  decrementLessonsPerWeek
} from './register.actions';

export function* updateRegisterAddPending({ payload }) {
  yield put(addLessonToPending(payload));
  yield put(incrementLessonsPerWeek());
}

export function* updateRegisterRemovePending({ payload }) {
  yield put(removeLessonFromPending(payload));
  yield put(decrementLessonsPerWeek());
}

export function* confirmLessonRegistration() {
  yield put(registerPendingLessons());
  yield put(updateRegisteredStatus());
}

export function* onUpdateRegisterAddPending() {
  yield takeLatest(
    RegisterActionTypes.UPDATE_REGISTER_ADD_PENDING,
    updateRegisterAddPending
  );
}

export function* onUpdateRegisterRemovePending() {
  yield takeLatest(
    RegisterActionTypes.UPDATE_REGISTER_REMOVE_PENDING,
    updateRegisterRemovePending
  );
}

export function* onConfirmLessonRegistration() {
  yield takeLatest(
    RegisterActionTypes.CONFIRM_LESSON_REGISTRATION,
    confirmLessonRegistration
  );
}

export function* registerSagas() {
  yield all([
    call(onConfirmLessonRegistration), 
    call(onUpdateRegisterAddPending),
    call(onUpdateRegisterRemovePending)
  ])
}
