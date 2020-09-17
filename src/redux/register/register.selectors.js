import { createSelector } from 'reselect';

import { removeLessonFromList } from './register.util';

const registerSelector = state => state.register;

export const selectRegisterStatus = createSelector(
  [registerSelector],
  register => register.status
);

export const selectLessonsPerWeek = createSelector(
  [registerSelector],
  register => register.lessonsPerWeek
);

export const selectLessonsFromRegister = createSelector(
  [registerSelector],
  register => register.registeredLessons
);

export const selectPendingRegistration = createSelector(
  [registerSelector],
  register => register.pendingRegistration
);

export const selectPendingUnregistration = createSelector(
  [registerSelector],
  register => register.pendingUnregistration
);

export const selectRegisteredLessonsByTitle = title => {
  return createSelector(
    [selectLessonsFromRegister],
    registeredLessons => registeredLessons.filter(lesson => lesson.title === title)
  );
}

/* Compares registered lessons against lessons pending unregistration.
   Returns list of available registered lessons */
export const selectRegisteredLessonsForPreview = title => {
  return createSelector(
    [selectPendingUnregistration, selectRegisteredLessonsByTitle(title)],
    (pendingUnregistration, registeredByTitle) => {
      if(!pendingUnregistration.length) return registeredByTitle;

      let tempLessons = [...registeredByTitle];

      pendingUnregistration.forEach(pendingUnreg => {
        tempLessons = removeLessonFromList(tempLessons, pendingUnreg);
      });
      
      return tempLessons;
    }
  );
}
