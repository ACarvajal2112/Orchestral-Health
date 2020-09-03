import RegisterActionTypes from './register.types';
import { addLessonToList } from './register.util';
import { removeLessonFromRegister } from './register.actions';

const INITIAL_STATE = ({
  lessonsPerWeek: 0,
  pendingLessons: [],
  registeredLessons: [],
});

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek + 1
      };
    case RegisterActionTypes.ADD_LESSON_TO_PENDING:
      return {
        ...state,
        pendingLessons: addLessonToList(state.pendingLessons, action.payload)
      };
    case RegisterActionTypes.ADD_LESSON_TO_REGISTER:
      return {
        ...state,
        registeredLessons: addLessonToList(state.registeredLessons, action.payload)
      };
    case RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek - 1
      };
    case RegisterActionTypes.REMOVE_LESSON_FROM_REGISTER:
      return {
        ...state,
        lessons: removeLessonFromRegister(state.lessons, action.payload)
      };
    default:
      return state;
  }
};

export default registerReducer;
