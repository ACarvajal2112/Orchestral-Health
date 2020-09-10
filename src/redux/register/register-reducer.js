import RegisterActionTypes from './register.types';
import { addLessonToList, removeLessonFromList, registerPendingLessons } from './register.util';

const INITIAL_STATE = ({
  status: false,
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
    case RegisterActionTypes.REMOVE_LESSON_FROM_PENDING:
      return {
        ...state,
        pendingLessons: removeLessonFromList(state.pendingLessons, action.payload)
      };
    case RegisterActionTypes.REGISTER_PENDING_LESSONS:
      return {
        ...state,
        registeredLessons: registerPendingLessons(state.registeredLessons, state.pendingLessons),
        pendingLessons: []
      };
    case RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek - 1
      };
    case RegisterActionTypes.UPDATE_REGISTERED_STATUS:
      return {
        ...state,
        status: state.registeredLessons.length ? true : false
      };
    default:
      return state;
  }
};

export default registerReducer;
