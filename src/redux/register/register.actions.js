import RegisterActionTypes from './register.types';

export const updateLessonsPerWeek = numLessons => ({
  type: RegisterActionTypes.UPDATE_LESSONS_PER_WEEK,
  payload: numLessons
});

export const addLessonToRegister = lessonToAdd => ({
  type: RegisterActionTypes.ADD_LESSON_TO_REGISTER,
  payload: lessonToAdd
});

export const incrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK
});

export const addLessonToPending = lessonToAdd => ({
  type: RegisterActionTypes.ADD_LESSON_TO_PENDING,
  payload: lessonToAdd
});

export const addLessonAndUpdateRegister = lessonToAdd => {
  return dispatch => {
    dispatch(incrementLessonsPerWeek());
    dispatch(addLessonToRegister(lessonToAdd));
  };
};

export const removeLessonFromRegister = lessonToRemove => ({
  type: RegisterActionTypes.REMOVE_LESSON_FROM_REGISTER,
  payload: lessonToRemove
});

export const decrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK
});

export const removeLessonAndUpdateRegister = lessonToRemove => {
  return dispatch => {
    dispatch(decrementLessonsPerWeek());
    dispatch(removeLessonFromRegister(lessonToRemove))
  };
};

export const registerPendingLessons = () => ({
  type: RegisterActionTypes.REGISTER_PENDING_LESSONS
});

export const updateRegisteredStatus = () => ({
  type: RegisterActionTypes.UPDATE_REGISTERED_STATUS
});

export const confirmLessonRegistration = () => {
  return dispatch => {
    dispatch(registerPendingLessons());
    dispatch(updateRegisteredStatus());
  }
};
