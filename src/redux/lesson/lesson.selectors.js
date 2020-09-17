import { createSelector } from 'reselect';

import { 
  selectPendingRegistration, 
  selectLessonsFromRegister, 
  selectPendingUnregistration 
} from '../register/register.selectors';
import { getTimesByDay } from '../register/register.util';

const lessonSelector = state => state.lesson;

export const selectLessons = createSelector(
  [lessonSelector],
  lesson => lesson.lessons
);

export const selectLessonsForPreview = createSelector(
  [selectLessons],
  lessons => lessons ? Object.keys(lessons).map(key => lessons[key]) : []
);

export const selectToggleLessonHidden = createSelector(
  [lessonSelector],
  lesson => lesson.hidden
);

export const selectLessonData = createSelector(
  [lessonSelector],
  lesson => lesson.data
);

export const selectLessonTitle = createSelector(
  [selectLessonData],
  lessonData => lessonData.title
);

export const selectAvailabilities = createSelector(
  [selectLessonData],
  lessonData => lessonData.availabilities
);

export const selectDayOfWeek = createSelector(
  [lessonSelector],
  lesson => lesson.dayOfWeek 
);

// Return array of available times based on current lesson data and day of week.
export const selectAvailabileTimesByDay = createSelector(
  [selectLessonData, selectDayOfWeek],
  (lessonData, dayOfWeek) => {
    const availabilityToFind = lessonData.availabilities.find(
      availability => availability.day === dayOfWeek
    );
    return availabilityToFind.times;
  }
);

/* Compare available against registered, to-register, and to-unregister lesson times.
   Return array of unique available lesson times for the day of week selected. */
export const selectAvailableTimesForPreview = createSelector(
  [
    selectAvailabileTimesByDay, 
    selectDayOfWeek, 
    selectPendingRegistration, 
    selectLessonsFromRegister, 
    selectPendingUnregistration
  ],
  (availableTimes, dayOfWeek, pendingLessons, registeredLessons, toUnregister) => {
    if (!pendingLessons.length && !registeredLessons.length && !toUnregister.length) return availableTimes;
    // isolate pending, registered, and unregistration times
    const pendingTimes = getTimesByDay(pendingLessons, dayOfWeek);
    const registeredTimes = getTimesByDay(registeredLessons, dayOfWeek);
    const unregistrationTimes = getTimesByDay(toUnregister, dayOfWeek);

    return availableTimes.reduce((accumulatedTimes, availTime) => {
      if (!pendingTimes.includes(availTime) && !registeredTimes.includes(availTime) && !unregistrationTimes.includes(availTime)) {
        accumulatedTimes.push(availTime);
      }

      return accumulatedTimes;
    }, []);
  }
);

const DAYS_OF_THE_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];


/* Return array indicating instructor availability for each day of the week.
   e.g. { monday: false, tuesday: true, ... } */
export const selectAvailabilityByWeek = createSelector(
  [selectAvailabilities],
  availabilities => 
    DAYS_OF_THE_WEEK.reduce((availabilityArr, dayOfWeek) => {
      const dayIsAvailable = availabilities.some(
        availability => dayOfWeek === availability.day
      );
      availabilityArr.push({ 
        day: dayOfWeek, 
        isAvailable: dayIsAvailable
      });
      return availabilityArr;
    }, [])
);

export const selectIsLessonDataFetching = createSelector(
  [lessonSelector],
  lesson => lesson.isFetching
);

export const selectIsLessonDataLoaded = createSelector(
  [lessonSelector],
  lesson => !!lesson.lessons
);