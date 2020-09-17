import RegisterActionTypes from './register.types';

export const incrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.INCREMENT_LESSONS_PER_WEEK
});

export const decrementLessonsPerWeek = () => ({
  type: RegisterActionTypes.DECREMENT_LESSONS_PER_WEEK
});

export const confirmRegistration = () => ({
  type: RegisterActionTypes.CONFIRM_REGISTRATION
});

export const registerPendingLessons = () => ({
  type: RegisterActionTypes.REGISTER_PENDING_LESSONS
});

export const unregisterPendingLessons = () => ({
  type: RegisterActionTypes.UNREGISTER_PENDING_LESSONS
});

export const updateRegisterAddPending = lessonToAdd => ({
  type: RegisterActionTypes.UPDATE_REGISTER_ADD_PENDING,
  payload: lessonToAdd
});

export const addPendingRegistration = lessonToAdd => ({
  type: RegisterActionTypes.ADD_PENDING_REGISTRATION,
  payload: lessonToAdd
});

export const addPendingUnregistration = lessonToAdd => ({
  type: RegisterActionTypes.ADD_PENDING_UNREGISTRATION,
  payload: lessonToAdd
});

export const removePendingRegistration = lessonToRemove => ({
  type: RegisterActionTypes.REMOVE_PENDING_REGISTRATION,
  payload: lessonToRemove
});

export const removePendingUnregistration = lessonToRemove => ({
  type: RegisterActionTypes.REMOVE_PENDING_UNREGISTRATION,
  payload: lessonToRemove
});

export const updateRegisterRemovePending = lessonToRemove => ({
  type: RegisterActionTypes.UPDATE_REGISTER_REMOVE_PENDING,
  payload: lessonToRemove
});

export const updateRegisteredStatus = () => ({
  type: RegisterActionTypes.UPDATE_REGISTERED_STATUS
});

export const clearPendingData = () => ({
  type: RegisterActionTypes.CLEAR_PENDING_DATA
});