import { createSelector } from 'reselect';
import { getAllInstructors } from './lesson.util';

const lessonSelector = state => state.lesson;

export const selectLessons = createSelector(
  [lessonSelector],
  lesson => lesson.lessons
);

// return array of instructors reduced from each lesson object
export const selectInstructors = createSelector(
  [selectLessons],
  lessons => getAllInstructors(lessons)
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

export const selectAvailabileTimesByDay = createSelector(
  [selectLessonData, selectDayOfWeek],
  (lessonData, dayOfWeek) => {
    const availabilityToFind = lessonData.availabilities.find(
      availability => availability.day === dayOfWeek
    );
    return availabilityToFind.times;
  }
);

const DAYS_OF_THE_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

/* return array indicating which days the instructor is available 
   e.g. { monday: false } */
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
