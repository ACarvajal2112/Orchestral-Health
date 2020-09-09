import { take, put } from 'redux-saga/effects';

import RegisterActionTypes from './register.types';

export function* confirmLessonRegistration() {
  yield put(RegisterActionTypes.REGISTER_PENDING_LESSONS);
  yield put(RegisterActionTypes.UPDATE_REGISTERED_STATUS);
}

export function* confirmLessonRegistrationStart() {
  while(true) {
    yield take(
      RegisterActionTypes.CONFIRM_LESSON_REGISTRATION,
      confirmLessonRegistration
    );
  }
}
