import { createSelector } from 'reselect';

const registerSelector = state => state.register;

export const selectRegisterStatus = createSelector(
  [registerSelector],
  register => register.status
);

export const selectLessonsPerWeek = createSelector(
  [registerSelector],
  register => register.lessonsPerWeek
);
