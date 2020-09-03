import { createSelector } from 'reselect';

import { selectLessonsFromPending } from '../register/register.selectors';
import { getPendingTimesByDay } from '../register/register.util';

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

/* return array of available times based on current lesson data and day of week
   e.g. [ '12:30pm - 1:30pm, 1:30pm - 2:30pm ] */
export const selectAvailabileTimesByDay = createSelector(
  [selectLessonData, selectDayOfWeek],
  (lessonData, dayOfWeek) => {
    const availabilityToFind = lessonData.availabilities.find(
      availability => availability.day === dayOfWeek
    );
    return availabilityToFind.times;
  }
);

/* compare available and pending lesson times to exclude any matches from being displayed
   returns array of unique available lesson times */
export const selectAvailableTimesForPreview = createSelector(
  [selectAvailabileTimesByDay, selectDayOfWeek, selectLessonsFromPending],
  (availableTimes, dayOfWeek, pendingLessons) => {
    if (!pendingLessons.length) return availableTimes;
    const pendingTimes = getPendingTimesByDay(pendingLessons, dayOfWeek);

    return availableTimes.reduce((accumulatedTimes, availTime) => {

      if (!pendingTimes.includes(availTime)) {
        accumulatedTimes.push(availTime);
      }

      return accumulatedTimes;
    }, []);
  }
);

const DAYS_OF_THE_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

/* return array indicating instructor availability for each day of the week
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
