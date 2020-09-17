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
  // otherwise return current lessons with the new lesson to be added
  const { title, times, dayOfWeek } = lessonToAdd;
  return [...currentLessons, {
    title,
    dayOfWeek,
    times
   }];
};

/* returns array of times based on the lessons and day of week passed */
export const getTimesByDay = (lessons, dayOfWeek) => {
  if(!lessons.length) return [];
  const lessonsByDay = lessons.find(lesson => lesson.dayOfWeek === dayOfWeek);
  return lessonsByDay ? lessonsByDay.times : [];
};

export const registerPendingLessons = (registeredLessons, pendingLessons) => {
  pendingLessons.forEach(pendingLesson => {
    registeredLessons = addLessonToList(registeredLessons, pendingLesson);
  });
  return registeredLessons;
};

export const unregisterPendingLessons = (registeredLessons, pendingLessons) => {

  for (const pendingLesson of pendingLessons) {
    registeredLessons = removeLessonFromList(registeredLessons, pendingLesson);
  }
  return registeredLessons;
};

export const removeLessonFromList = (currentLessons, lessonToRemove) => {

  const existingLesson = currentLessons.find(({ title, dayOfWeek }) => {
    return title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek
  });

  const tempLesson = {...existingLesson};

  // if lesson has more than 1 time, return existing times without time to remove
  if (tempLesson.times.length > 1) {
    tempLesson.times = tempLesson.times.filter(
      time => !lessonToRemove.times.includes(time)
    );

    return tempLesson.times.length ? 
      currentLessons.map(lesson => {
      return lesson.title === tempLesson.title && lesson.dayOfWeek === tempLesson.dayOfWeek 
        ? tempLesson
        : lesson
      })
      : currentLessons.filter(lesson => {
        return !(lesson.title === tempLesson.title && lesson.dayOfWeek === tempLesson.dayOfWeek)
      })
  }
  // return lessons whose title and day don't match lesson to remove
  return currentLessons.filter(({ title, dayOfWeek }) =>
    !(title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek)
  );
}
