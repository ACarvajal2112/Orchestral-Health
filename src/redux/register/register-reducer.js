import RegisterActionTypes from './register.types';
import { addLessonToRegister } from './register.util';

const INITIAL_STATE = ({
  status: false,
  lessonsPerWeek: 0,
  lessons: []
});

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RegisterActionTypes.ADD_LESSON_TO_REGISTER:
      return {
        ...state,
        lessons: addLessonToRegister(state.lessons, action.payload)
      };
    case RegisterActionTypes.UPDATE_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: action.payload
      };
    default:
      return state;
  }
};

export default registerReducer;
