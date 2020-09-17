import RegisterActionTypes from './register.types';
import { 
  addLessonToList, 
  removeLessonFromList, 
  registerPendingLessons, 
  unregisterPendingLessons 
} from './register.util';

const INITIAL_STATE = ({
  status: false,
  lessonsPerWeek: 0,
  pendingRegistration: [],
  pendingUnregistration: [],
  registeredLessons: [],
});

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek + 1
      };
    case RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK:
      return {
        ...state,
        lessonsPerWeek: state.lessonsPerWeek - 1
      };
    case RegisterActionTypes.ADD_PENDING_REGISTRATION:
      return {
        ...state,
        pendingRegistration: addLessonToList(state.pendingRegistration, action.payload)
      };
    case RegisterActionTypes.ADD_PENDING_UNREGISTRATION:
      return {
        ...state,
        pendingUnregistration: addLessonToList(state.pendingUnregistration, action.payload)
      };
    case RegisterActionTypes.REMOVE_PENDING_REGISTRATION:
      return {
        ...state,
        pendingRegistration: removeLessonFromList(state.pendingRegistration, action.payload)
      };
    case RegisterActionTypes.REMOVE_PENDING_UNREGISTRATION:
      return {
        ...state,
        pendingUnregistration: removeLessonFromList(state.pendingUnregistration, action.payload)
      };
    case RegisterActionTypes.REGISTER_PENDING_LESSONS:
      return {
        ...state,
        registeredLessons: registerPendingLessons(state.registeredLessons, state.pendingRegistration),
        pendingRegistration: []
      };
    case RegisterActionTypes.UNREGISTER_PENDING_LESSONS:
      return {
        ...state,
        registeredLessons: unregisterPendingLessons(state.registeredLessons, state.pendingUnregistration),
        pendingUnregistration: []
      };
    case RegisterActionTypes.UPDATE_REGISTERED_STATUS:
      return {
        ...state,
        status: !!state.registeredLessons.length
      };
    case RegisterActionTypes.CLEAR_PENDING_DATA:
      return {
        ...state,
        pendingRegistration: [],
        pendingUnregistration: []
      };
    default:
      return state;
  }
};

export default registerReducer;
