import { all, call, takeLatest, put } from 'redux-saga/effects';

import RegisterActionTypes from './register.types';

import { 
  registerPendingLessons,
  unregisterPendingLessons, 
  addPendingRegistration,
  addPendingUnregistration,
  removePendingRegistration,
  incrementLessonsPerWeek,
  decrementLessonsPerWeek,
  removePendingUnregistration
} from './register.actions';

/* function adds lesson time to pending status in the register.
 * if toRegister is true, lessonToAdd is added to pending-registration. Increases lessons-per-week.
 * if toRegister is false, lessonToAdd is added to pending-unregistration. Decreases lessons-per-week.
 */
export function* updateRegisterAddPending({ payload: { lessonToAdd, toRegister } }) {
  if (toRegister) {
    yield put(addPendingRegistration(lessonToAdd));
    yield put(incrementLessonsPerWeek());
  } else {
    yield put(addPendingUnregistration(lessonToAdd));
    yield put(decrementLessonsPerWeek());
  }
}

/* function removes lesson time from pending status in the register.
 * if toRegister is true, lessonToAdd is removed from pending registration. Decreases lessons-per-week.
 * if toRegister is false, lessonToAdd is removed from pending unregistration. Increases lessons-per-week.
 */
export function* updateRegisterRemovePending({ payload: { lessonToRemove, toRegister } }) {
  if (toRegister) {
    yield put(removePendingRegistration(lessonToRemove));
    yield put(decrementLessonsPerWeek());
  } else {
    yield put(removePendingUnregistration(lessonToRemove));
    yield put(incrementLessonsPerWeek());
  }
}

export function* confirmLessonRegistration() {
  yield put(unregisterPendingLessons());
  yield put(registerPendingLessons());
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
