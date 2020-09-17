/* Adds lesson to existing list of lessons, or adds time to existing lesson times.
   Return current lessons with added or updated lesson. */
export const addLessonToList = (currentLessons, lessonToAdd) => {
  // find lesson in current lessons list with matching title and day of week
  const existingLesson = currentLessons.find(
    lesson => lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
  );
  // if lesson exists, add new time to existing times array
  if (existingLesson) {
    return currentLessons.map(lesson => 
      lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
        ? { 
          ...lesson, 
          times: [...lesson.times, ...lessonToAdd.times]
        }
        : lesson
    );
  };
  // return current lessons with the new lesson to be added
  const { title, times, dayOfWeek } = lessonToAdd;
  return [...currentLessons, {
    title,
    dayOfWeek,
    times
   }];
};

// Returns array of times for the lesson matching the day of week passed.
export const getTimesByDay = (lessons, dayOfWeek) => {
  if(!lessons.length) return [];
  const lessonsByDay = lessons.find(lesson => lesson.dayOfWeek === dayOfWeek);
  return lessonsByDay ? lessonsByDay.times : [];
};

// Adds each pending lesson to the list of registered lessons.
export const registerPendingLessons = (registeredLessons, pendingLessons) => {
  for (const pendingLesson of pendingLessons) {
    registeredLessons = addLessonToList(registeredLessons, pendingLesson);
  }
  return registeredLessons;
};

// Removes each pending lesson from the list of registered lessons.
export const unregisterPendingLessons = (registeredLessons, pendingLessons) => {
  for (const pendingLesson of pendingLessons) {
    registeredLessons = removeLessonFromList(registeredLessons, pendingLesson);
  }
  return registeredLessons;
};

/* Removes lesson from existing list of lessons, or removes times from existing lesson times.
   Return current lessons with removed, or updated lesson */
export const removeLessonFromList = (currentLessons, lessonToRemove) => {

  const existingLesson = currentLessons.find(({ title, dayOfWeek }) => {
    return title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek
  });

  const tempLesson = {...existingLesson};
  
  if (tempLesson.times.length > 1) {
    // remove times from existing lesson's times array
    tempLesson.times = tempLesson.times.filter(
      time => !lessonToRemove.times.includes(time)
    );
    // if any times remain, return new array with current lessons and updated lesson
    if (tempLesson.times.length) {
      return currentLessons.map(lesson => {
        return lesson.title === tempLesson.title && lesson.dayOfWeek === tempLesson.dayOfWeek 
          ? tempLesson
          : lesson
        });
    }
  }
  // return lessons whose title and day don't match lesson to remove
  return currentLessons.filter(({ title, dayOfWeek }) =>
    !(title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek)
  );
}
