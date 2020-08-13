import RegisterActionTypes from './register.types';

export const updateLessonsPerWeek = numLessons => ({
  type: RegisterActionTypes.UPDATE_LESSONS_PER_WEEK,
  payload: numLessons
});

export const addLessonToRegister = lessonToAdd => ({
  type: RegisterActionTypes.ADD_LESSON_TO_REGISTER,
  payload: lessonToAdd
});
