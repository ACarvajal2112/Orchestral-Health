import { all, call, takeLatest, put } from 'redux-saga/effects';

import RegisterActionTypes from './register.types';

import { 
  registerPendingLessons,
  unregisterPendingLessons, 
  updateRegisteredStatus, 
  addPendingRegistration,
  addPendingUnregistration,
  removePendingRegistration,
  incrementLessonsPerWeek,
  decrementLessonsPerWeek,
  removePendingUnregistration
} from './register.actions';

export function* updateRegisterAddPending({ payload: { lessonToAdd, toRegister } }) {
  if (toRegister) {
    yield put(addPendingRegistration(lessonToAdd));
    yield put(incrementLessonsPerWeek());
  } else {
    yield put(addPendingUnregistration(lessonToAdd));
    yield put(decrementLessonsPerWeek());
  }
}

export function* updateRegisterRemovePending({ payload: { lessonToRemove, toRegister } }) {
  if (toRegister) {
    yield put(removePendingRegistration(lessonToRemove));
    yield put(decrementLessonsPerWeek());
  } else {
    yield put(removePendingUnregistration(lessonToRemove));
    yield put(decrementLessonsPerWeek());
  }
}

export function* confirmLessonRegistration() {
  yield put(unregisterPendingLessons());
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
    RegisterActionTypes.CONFIRM_REGISTRATION,
    confirmLessonRegistration
  );
}

export function* registerSagas() {
  yield all([
    call(onConfirmLessonRegistration), 
    call(onUpdateRegisterAddPending),
    call(onUpdateRegisterRemovePending)
  ]);
}
