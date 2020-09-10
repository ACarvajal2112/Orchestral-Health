export const addLessonToList = (currentLessons, lessonToAdd) => {
  // find lesson in current lessons list with matching title and day of week
  const existingLesson = currentLessons.find(
    lesson => lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
  );
  // if lesson exists, add new time to existing times array
  if (existingLesson) {
    return currentLessons.map(lesson => 
      lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
        ? { ...lesson, times: [...lesson.times, lessonToAdd.time] }
        : lesson
    );
  };
  // otherwise return current lessons with the new lesson to be added
  const { id, title, time, times, dayOfWeek } = lessonToAdd;
  return [...currentLessons, { 
    id,
    title,
    dayOfWeek,
    times: times ? [...times] : [time],
   }];
};

export const getTimesByDay = (lessons, dayOfWeek) => {
  const lessonsByDay = lessons.find(lesson => lesson.dayOfWeek === dayOfWeek);
  return lessonsByDay ? lessonsByDay.times : [];
};

export const registerPendingLessons = (registeredLessons, pendingLessons) => {
  pendingLessons.forEach(pendingLesson => {
    registeredLessons = addLessonToList(registeredLessons, pendingLesson);
  });
  return registeredLessons;
};

export const removeLessonFromList = (currentLessons, lessonToRemove) => {

  const existingLesson = currentLessons.find(({ title, dayOfWeek }) => {
    return title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek
  });

  // if lesson has more than 1 time, return existing times without time to remove
  if (existingLesson.times.length > 1) {
    existingLesson.times  = existingLesson.times.filter(time => time !== lessonToRemove.time)
    return currentLessons.map(lesson => {
      return lesson.title === lessonToRemove.title && lesson.dayOfWeek === lessonToRemove.dayOfWeek 
        ? existingLesson
        : lesson
    });
  }
  // return lessons whose title/day don't match lesson to remove
  return currentLessons.filter(({ title, dayOfWeek }) =>
    !(title === lessonToRemove.title && dayOfWeek === lessonToRemove.dayOfWeek)
  );
}
