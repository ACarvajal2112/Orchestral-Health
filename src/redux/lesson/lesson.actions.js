import LessonActionTypes from './lesson.types';

export const toggleLessonHidden = isHidden => ({
  type: LessonActionTypes.TOGGLE_LESSON_HIDDEN,
  payload: isHidden
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

export const fetchLessonDataStart = () => ({
  type: LessonActionTypes.FETCH_LESSON_DATA_START
});

export const fetchLessonDataSuccess = lessonData => ({
  type: LessonActionTypes.FETCH_LESSON_DATA_SUCCESS,
  payload: lessonData
});

export const fetchLessonDataFailure = errorMessage => ({
  type: LessonActionTypes.FETCH_LESSON_DATA_FAILURE,
  payload: errorMessage
});
