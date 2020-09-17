import LessonActionTypes from './lesson.types';
import { setDefaultDayOfWeek } from './lesson.util';

const INITIAL_STATE = { 
  lessons: null,
  hidden: true,
  data: {},
  dayOfWeek: '',
  isFetching: false,
  errorMessage: null
};

const lessonReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LessonActionTypes.FETCH_LESSON_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case LessonActionTypes.FETCH_LESSON_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lessons: action.payload
      };
    case LessonActionTypes.FETCH_LESSON_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case LessonActionTypes.TOGGLE_LESSON_HIDDEN:
      return { 
        ...state,
        hidden: !state.hidden
      };
    case LessonActionTypes.SET_LESSON_DATA:
      return {
        ...state,
        data: action.payload
      };
    case LessonActionTypes.SET_DEFAULT_DAY_OF_WEEK:
      return {
        ...state,
        dayOfWeek: setDefaultDayOfWeek(state.lessons, action.payload)
      };
    case LessonActionTypes.UPDATE_DAY_OF_WEEK:
      return {
        ...state,
        dayOfWeek: action.payload
      };
    case LessonActionTypes.CLEAR_LESSON_DATA:
      return {
        ...state,
        data: {},
        dayOfWeek: ''
      };
    default:
      return state;
  }
};

export default lessonReducer;
