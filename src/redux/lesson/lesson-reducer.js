import LESSONS_DATA from './lesson.data';
import LessonActionTypes from './lesson.types';
import { 
  setDefaultDayOfWeek,
  toggleLessonHidden 
} from './lesson.util';

const INITIAL_STATE = {
  lessons: LESSONS_DATA,
  hidden: true,
  data: {},
  dayOfWeek: ''
};

const lessonReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LessonActionTypes.TOGGLE_LESSON_HIDDEN:
      return { 
        ...state,
        hidden: toggleLessonHidden(state.hidden, action.payload)
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
    default:
      return state;
  }
};

export default lessonReducer;
