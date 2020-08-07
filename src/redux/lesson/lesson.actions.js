import LessonActionTypes from './lesson.types';

export const toggleLessonHidden = () => ({
  type: LessonActionTypes.TOGGLE_LESSON_HIDDEN
});

export const setLessonHidden = () => ({
  type: LessonActionTypes.SET_LESSON_HIDDEN
});

export const setLessonData = lessonData => ({
  type: LessonActionTypes.SET_LESSON_DATA,
  payload: lessonData
});

export const setDefaultDayOfWeek = instructorId => ({
  type: LessonActionTypes.SET_DEFAULT_DAY_OF_WEEK,
  payload: instructorId
});

export const updateDayOfWeek = dayOfWeek => ({
  type: LessonActionTypes.UPDATE_DAY_OF_WEEK,
  payload: dayOfWeek
});