import RegisterActionTypes from './register.types';
import { addLessonToRegister } from './register.util';
import { removeLessonFromRegister } from './register.actions';

const INITIAL_STATE = ({
  status: false,
  lessonsPerWeek: 0,
  lessons: []
});

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek + 1
      };
    case RegisterActionTypes.ADD_LESSON_TO_REGISTER:
      return {
        ...state,
        lessons: addLessonToRegister(state.lessons, action.payload)
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
