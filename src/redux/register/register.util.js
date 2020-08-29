export const addLessonToRegister = (currentLessons, lessonToAdd) => {
  const existingLesson = currentLessons.find(
    lesson => lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
  );
  if (existingLesson) {
    return currentLessons.map(lesson => 
      lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
        ? { ...lesson, times: [...lesson.times, lessonToAdd.time] }
        : lesson
    );
  };
  const { id, title, time, dayOfWeek } = lessonToAdd; 
  return [ ...currentLessons, { 
    id,
    title,
    dayOfWeek,
    times: [time],
   } ];
};
