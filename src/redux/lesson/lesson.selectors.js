import { createSelector } from 'reselect';

const lessonSelector = state => state.lesson;

export const selectLessons = createSelector(
  [lessonSelector],
  lesson => lesson.lessons
);

// return array of instructors reduced from each lesson object
export const selectInstructors = createSelector(
  [selectLessons],
  lessons => lessons.reduce((accumulatedInstructors, lesson) => {
    accumulatedInstructors.push(lesson.instructor);
    return accumulatedInstructors;
  }, [])
);

export const selectToggleLessonHidden = createSelector(
  [lessonSelector],
  lesson => lesson.hidden
);

export const selectLessonData = createSelector(
  [lessonSelector],
  lesson => lesson.data
);

export const selectDayOfWeek = createSelector(
  [lessonSelector],
  lesson => lesson.dayOfWeek
);
