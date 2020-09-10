import RegisterActionTypes from './register.types';

export const incrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK
});

export const decrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK
});

export const registerPendingLessons = () => ({
  type: RegisterActionTypes.REGISTER_PENDING_LESSONS
});

export const updateRegisteredStatus = () => ({
  type: RegisterActionTypes.UPDATE_REGISTERED_STATUS
});

export const confirmLessonRegistration = () => ({
  type: RegisterActionTypes.CONFIRM_LESSON_REGISTRATION
});

export const updateRegisterAddPending = lessonToAdd => ({
  type: RegisterActionTypes.UPDATE_REGISTER_ADD_PENDING,
  payload: lessonToAdd
});

export const addLessonToPending = lessonToAdd => ({
  type: RegisterActionTypes.ADD_LESSON_TO_PENDING,
  payload: lessonToAdd
});

export const updateRegisterRemovePending = lessonToRemove => ({
  type: RegisterActionTypes.UPDATE_REGISTER_REMOVE_PENDING,
  payload: lessonToRemove
});

export const removeLessonFromPending = lessonToRemove => ({
  type: RegisterActionTypes.REMOVE_LESSON_FROM_PENDING,
  payload: lessonToRemove
});
