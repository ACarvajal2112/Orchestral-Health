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
  const { id, title, time, dayOfWeek } = lessonToAdd; 
  return [ ...currentLessons, { 
    id,
    title,
    dayOfWeek,
    times: [time],
   } ];
};

export const getPendingTimesByDay = (pendingLessons, dayOfWeek) => {
  const lessonsByDay = pendingLessons.find(lesson => lesson.dayOfWeek === dayOfWeek);
  return lessonsByDay.times;
};
